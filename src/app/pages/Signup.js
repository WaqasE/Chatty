import React from 'react';
import { FormHeader, FormField, FormExtra, FormSubmit, FormSwitch } from '../comp/Form/index'
function Signup() {
    return (
        <div id="formContainer">
            <div id="bg1">
            </div>
            <div id="bg2">
            </div>
            <div id="formWrapper">
                <FormHeader />
                <FormField
                    placeholder="Email or Username"
                />
                <FormField
                    placeholder="Password"
                />
                <FormExtra type="signup"/>
                <FormSubmit title="Join Chatty" />
                <FormSwitch text="Already have an account?" title="Log in" />
            </div>
        </div>
    );
}

export default Signup;