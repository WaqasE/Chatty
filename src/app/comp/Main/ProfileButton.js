import React from 'react';
import CustomIcon from './CustomIcon';

function ProfileButton({ onClick, img , bg,  status = 'offline' }) {
    return (
        <div id="mainButton" style={{ backgroundColor: bg }} onClick={onClick}>
            {!img ? <CustomIcon color="grey" icon="person" /> :
                <img id="mainButtonImg" src={img} alt="pp" />}
            {status && <span style={{ backgroundColor: status === "offline" ? "grey" : "#1DBF73" }} id="mainButtonImgDot" />}
        </div>
    );
}

export default ProfileButton;