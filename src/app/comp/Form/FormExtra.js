import React from 'react';

function FormExtra({type}) {
    return (
        <div id="formExtra">
            {type==="login"?
            <>
            <label id="formExtraCheckbox">Remember Me
                <input type="checkbox"  />
                <span id="checkmark"/>
            </label>
            <p>Forgot Password?</p></>:
            <label id="formExtraCheckbox">
                I agree to the Chatty <span>User Agreement</span> and <span>Privacy Policy.</span>
                <input type="checkbox"  />
                <span id="checkmark"/>
            </label>}
        </div>
    );
}

export default FormExtra;