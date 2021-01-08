import React from 'react';
import ChatIcon from './ChatIcon';
import PP from '../../../assets/Images/pp.png'

function ChatDiv() {
    return (
        <div id="chatDiv">
            <div id="chatDivHover"/>
            <ChatIcon name="waqas" img={PP} status="online" />
            <div id="chatDivDetailsWrapper">
                <div id="chatDivDetails">
                    <p id="chatDivHeading">Waqas</p>
                    <p id="chatDivText">Exercitation tempor nisi in fugiat aliquip irure.</p>
                </div>
                <div id="chatDivTime">
                    <p id="chatDivTimeText">12:31 AM</p>
                </div>
            </div>
        </div>
    );
}

export default ChatDiv;