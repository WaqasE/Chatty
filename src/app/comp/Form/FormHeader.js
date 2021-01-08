import React from 'react';
import Logo from '../../assets/Images/logo.png'

function FormHeader(props) {
    return (
        <div id="formHeader">
            <img src={Logo} alt="logo" id="formLogo" />
            <p id="formLogoText">Chatty</p>
        </div>
    );
}

export default FormHeader;