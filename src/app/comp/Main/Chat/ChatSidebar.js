import React from 'react';
import CustomIcon from '../CustomIcon';
import Button from '../Button';
import Inbox from './Inbox';

function ChatSidebar(props) {
    return (
        <div id="chatSidebar">
            <div id="chatSidebarHeader">
                <div id="chatSidebarMainHeader">
                    <p>Chats</p>
                    <Button icon="add" active={true} bg="#FFFFFF" />
                </div>
                <div id="chatSidebarSearchWrapper">
                    <input placeholder="Search here" />
                    <CustomIcon icon="search" color="darkgrey" id="chatSidebarSearchIcon" />
                </div>
            </div>
            <Inbox />
        </div>
    );
}

export default ChatSidebar;