import React from 'react';
function Mailbox(props){
    const unreadMessages = props.unreadMessages;
    return(
        unreadMessages.length > 0 &&
        <h1>you have {unreadMessages.length} unread messages</h1>
    )
}

export default Mailbox;
