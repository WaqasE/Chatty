import React from 'react';

function FormSwitch({text, title}) {
    return (
        <div id="formSwitch">
            {text} <span>{title}</span>
        </div>
    );
}

export default FormSwitch;