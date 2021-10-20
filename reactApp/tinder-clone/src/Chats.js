import React from 'react';
import "./Chats.css";
import Chat from './Chat';

function Chats() {
    return (
        <div className='chats'>
            <Chat
                name="Dev Raiyani"
                message="Hey?"
                timestamp="40 secs ago"
                profilePic="https://pbs.twimg.com/profile_images/1233159387344039937/QGLWM9zd_400x400.jpg"
            />
            <Chat
                name="Rohit Saraf"
                message="what's upp??"
                timestamp="30 minutes ago"
                profilePic='https://img.mensxp.com/media/content/2019/Sep/rohit-saraf-from-the-sky-is-pink-is-a-style-icon-in-the-making-1200x900-1568367545_1200x900.jpg'
            />
            <Chat
                name="Cole Sprouse"
                message="Olaa!"
                timestamp="7 minutes ago"
                profilePic="https://i.pinimg.com/736x/0a/91/e9/0a91e994fe7fa839c31860638ca9cf48.jpg"
            />
            <Chat
                name="taylor Lautner"
                message="Oops there he is..my dog ran into someone's DMs"
                timestamp="37 secs ago"
                profilePic="https://image.shutterstock.com/image-photo/taylor-lautner-arriving-the-twilight-260nw-119446027.jpg"
            />
            <Chat
                name="Armaan Malik"
                message="How are you?!"
                timestamp="45 secs ago"
                profilePic="https://i.pinimg.com/originals/08/5d/68/085d6892fa2b89e76bf35bb0ae0e54c9.jpg"
            />
        </div>
    )
}

export default Chats

