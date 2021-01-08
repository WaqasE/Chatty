import React from 'react';
import CustomIcon from './CustomIcon';

function Button({ active = false, onClick, icon, bg, dot = false}) {
    return (
        <div id="mainButton" style={{ backgroundColor: bg }} onClick={onClick}>
            <CustomIcon color={active ? '#3275F7' : '#C1C1C3'} icon={icon} />
            {dot && <span id="mainButtonDot" />}
        </div>
    );
}

export default Button;