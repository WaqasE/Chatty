import React from 'react';

function ChatIcon({ onClick, img, status = 'offline', name, showStatus=true }) {
    return (
        <div id="chatIcon" onClick={onClick}>
            {status && showStatus && <span style={{ backgroundColor: status === "offline" ? "grey" : "#1DBF73" }} id="chatIconDot" />}
            {!img ? <p id="chatIconText">{name.charAt(0)}</p> : <img id="chatIconImg" src={img} alt="pp" />}
        </div>
    );
}

export default ChatIcon;