import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChatMessage from './ChatMessage';


const styles = theme => ({
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing(1) * 7,
    paddingBottom: '120px',
  },
});

class ChatMessageList extends React.Component {

  render() {
    const { classes, messages } = this.props;

    return (
      <div className={classes.messagesWrapper} ref="messagesWrapper">
        {messages && messages.map((message, index) => (
          <ChatMessage key={index} {...message} />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(ChatMessageList);
