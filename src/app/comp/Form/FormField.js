import React from 'react';

function FormField({...otherprops}) {
    return (
        <div id="formField">
            <input {...otherprops}/>
        </div>
    );
}

export default FormField;