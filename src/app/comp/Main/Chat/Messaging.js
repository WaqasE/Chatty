import React from 'react';
import ChatProfile from './ChatProfile';
import Chatting from './Chatting';
import MessageNotSelected from './MessageNotSelected';

function Messaging({empty=false}) {
    return (
        <div id="messaging">
            {
                empty?
                <MessageNotSelected/>:
                <>
               <Chatting/>
               <ChatProfile/></>
            }
        </div>
    );
}

export default Messaging;