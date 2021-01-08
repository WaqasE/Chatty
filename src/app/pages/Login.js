import React from 'react';
import { FormHeader, FormField, FormExtra, FormSubmit, FormSwitch } from '../comp/Form/index'

function Login() {
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
                <FormExtra type="login"/>
                <FormSubmit title="Log in"/>
                <FormSwitch text="Don't have an account?" title="Sign up" />
            </div>
        </div>
    );
}

export default Login;