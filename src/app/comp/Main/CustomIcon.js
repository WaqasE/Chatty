import React from 'react';
import Icon from '@material-ui/core/Icon'

function CustomIcon({ icon, color, fontSize="20", id }) {
    return (
        <Icon id={id}  style={{fontSize,color:color}}>{icon}</Icon>
    );
}

export default CustomIcon;