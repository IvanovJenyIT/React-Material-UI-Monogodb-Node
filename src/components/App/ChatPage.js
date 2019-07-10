import React from 'react';
import Sidebar from '../Sidebar';
import ChatHeaders from '../ChatHeaders';
import Chat from '../Chat';
import { animateScroll } from 'react-scroll'



class ChatPage extends React.Component {

  componentDidUpdate(nextProps)
  {
    animateScroll.scrollToBottom();

    const { match: { params }, setActiveChat } = this.props;
    const { params: nextParams } = nextProps.match;

    // If we change route, then fetch messages from chat by chatID
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
    }
  }

  componentDidMount()
  {
    animateScroll.scrollToBottom();

    const { match, fetchAllChats, fetchMyChats, setActiveChat } = this.props;

    Promise.all([
      fetchAllChats(),
      fetchMyChats(),
    ])
      .then(() => {
        // If we pass a chatId, then fetch messages from chat
        if (match.params.chatId) {
          setActiveChat(match.params.chatId);
        }
      });
  }

  render()
  {
    const {
      logout, chats, activeUser,
      createChat, joinChat, leaveChat, deleteChat, sendMessage,
      messages, editUser
    } = this.props;

    return (
      <React.Fragment>
        <ChatHeaders
          activeUser={activeUser}
          activeChat={chats.active}
          leaveChat={leaveChat}
          deleteChat={deleteChat}
          logout={logout}
          editUser={editUser}
        />
        <Sidebar
          chats={chats}
          createChat={createChat}
        />
        <Chat
          messages={messages}
          activeChat={chats.active}
          activeUser={activeUser}
          sendMessage={sendMessage}
          joinChat={joinChat}
        />
      </React.Fragment>
    );
  }
}

export default ChatPage;
