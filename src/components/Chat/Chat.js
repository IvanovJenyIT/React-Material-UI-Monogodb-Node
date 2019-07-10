import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChatMessageList from './ChatMessageList';
import MessageInput from './MessageInput';


const styles = () => ({
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    height: '100%',
    overflow: 'hidden',
  }
});

const Chat = ({classes, messages}) => {
  return (
    <React.Fragment>
      <ChatMessageList messages={messages} />
      <MessageInput />
    </React.Fragment>
  )
};

export default withStyles(styles)(Chat);
