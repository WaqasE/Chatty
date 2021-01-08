import React from 'react';
import CustomIcon from '../CustomIcon';

function MessageNotSelected(props) {
    return (
        <div id="messagingEmpty">
        <CustomIcon icon="chatbubble"  fontSize={80} color="#3275F7"/>
        <h2 id="messagingEmptyHeading">Select a Conversation</h2>
        <p  id="messagingEmptyDetail">Try selecting a conversation or searching for someone specific.</p>
    </div> 
    );
}

export default MessageNotSelected;