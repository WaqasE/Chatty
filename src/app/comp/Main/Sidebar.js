import React from 'react';
import Logo from '../../assets/Images/logo.png'
import PP from '../../assets/Images/pp.png'
import Button from './Button';
import ProfileButton from './ProfileButton';

function Sidebar() {
    return (
        <div id="mainSidebar">
            <img id="mainLogo" src={Logo} alt="logo" />
            <div id="mainPrimaryButtonsWrapper">
                <Button icon="description" />
                <Button icon="event" />
                <Button icon="chatbubble" active={true}/>
                <Button icon="notifications" dot={true}/>
            </div>
            <div id="mainSecondaryButtonsWrapper">
                <Button icon="person_add" />
                <Button icon="settings" />
                <ProfileButton status="online"/>
            </div>
        </div>
    );
}

export default Sidebar;