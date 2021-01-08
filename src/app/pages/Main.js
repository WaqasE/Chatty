import React from 'react';
import Chat from '../comp/Main/Chat/Chat';
import Sidebar from '../comp/Main/Sidebar';

function Main() {
    return (
        <div id="main">
            <Sidebar/>
            <Chat/>
        </div>
    );
}

export default Main;