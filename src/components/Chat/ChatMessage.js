import React from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '../Sidebar/Avatar';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing(1)}px ${theme.spacing(1) * 3}px`,
  },
  messageWrappperFromMe: {
    justifyContent: 'flex-end',
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1) * 2,
  },
  messageFromMe: {
    marginRight: theme.spacing(1) * 2,
    backgroundColor: '#e6dcff'
  },
});

const ChatMessage = ({ classes, sender, content }) => {
  const isMessageFromMe = sender === 'me';

  const userAvatar = (
    <Avatar colorFrom={sender}>
      {sender}
    </Avatar>
  );

  return (
    <div className={classnames(
      classes.messageWrapper,
      isMessageFromMe && classes.messageWrappperFromMe
    )}>
      {!isMessageFromMe && userAvatar}
      <Paper className={classnames(
        classes.message,
        isMessageFromMe && classes.messageFromMe
      )}>
        <Typography variant="caption">
          {sender}
        </Typography>
        <Typography variant="body1">
          {content}
        </Typography>
      </Paper>
      {isMessageFromMe && userAvatar}
    </div>
  );
};

export default withStyles(styles)(ChatMessage);
