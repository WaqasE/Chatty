import React from 'react';
import ChatIcon from './ChatIcon';
import PP from '../../../assets/Images/pp.png'
import Button from '../Button';
function ChattingHeader() {
    return (
        <div id="ChattingHeader">
            <ChatIcon name="waqas" img={PP} status="online" showStatus={false} />
            <div id="ChattingHeaderDetailsWrapper">
                <div id="ChattingHeaderDetails">
                    <p id="ChattingHeaderHeading">Waqas</p>
                    <p id="ChattingHeaderText">Online</p>
                </div>
                <Button icon="more_horiz" active={true} bg="#FFFFFF" />
                
            </div>
        </div>
    );
}

export default ChattingHeader;