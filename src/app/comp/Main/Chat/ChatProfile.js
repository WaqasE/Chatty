import React from 'react';
import Card from './Card';
import PP from '../../../assets/Images/pp.png'
import Button from '../Button';


function ChatProfile() {
    return (
        <div id="chatProfile">
            <Card>
                <div id="chatProfileImgWrapper">
                    <img id="chatProfileImg" src={PP} alt="pp" />
                </div>
                <div id="chatProfileDetails">
                    <p id="chatProfileHeading">Waqas</p>
                    <p id="chatProfileText">Programmer or something..!</p>
                </div>
            </Card>
            <Card>
                <div id="chatProfileImagesAndLinks">
                    <p id="chatProfileImagesAndLinksHeading">Image and Links</p>
                    <Button icon="expand_more" active={true} bg="#FFF" />
                </div>
            </Card>
            <Card>
                <div id="chatProfileImagesAndLinks">
                    <p id="chatProfileImagesAndLinksHeading">Files and docs</p>
                    <Button icon="expand_more" active={true} bg="#FFF" />
                </div>
            </Card>
            <Card>
            <div id="chatProfileImagesAndLinks">
                    <p id="chatProfileImagesAndLinksHeading">Pinned Items</p>
                    <Button icon="expand_more" active={true} bg="#FFF" />
                </div>
            </Card>
        </div>
    );
}

export default ChatProfile;