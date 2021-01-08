import React from 'react';
import ChatSidebar from './ChatSidebar';
import Messaging from './Messaging';

function Chat() {
    return (
        <div id="chat">
            <ChatSidebar/>
            <Messaging/>
        </div>
    );
}

export default Chat;