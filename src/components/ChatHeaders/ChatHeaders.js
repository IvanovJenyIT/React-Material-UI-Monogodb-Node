import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const styles = () => ({
  appBar: {
    position: 'fixed',
    width: `calc(100% - 330px)`,
  },
});

const ChatHeaders =({classes})=> {
    return (
    <AppBar color="primary" className={classes.appBar}>
        <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
                React Chat
            </Typography>
        </Toolbar>
    </AppBar>
    )
};

export default withStyles(styles)(ChatHeaders);
