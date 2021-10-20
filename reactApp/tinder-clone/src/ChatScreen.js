import React, { useState } from 'react'
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar"


function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Rohit',
            image: 'https://img.mensxp.com/media/content/2019/Sep/rohit-saraf-from-the-sky-is-pink-is-a-style-icon-in-the-making-1200x900-1568367545_1200x900.jpg',
            message:'Hey Cutie!'
        },
        {
            name: 'Rohit',
            image: 'https://img.mensxp.com/media/content/2019/Sep/rohit-saraf-from-the-sky-is-pink-is-a-style-icon-in-the-making-1200x900-1568367545_1200x900.jpg',
            message: 'whatsupp?'
        },
        {
            
            message: 'I am good! How about you?'
        },
        
    ]);

    const handleSend =(e) =>
    {
        e.preventDefault();

        setMessages([...messages, { message: input}]);
        setInput("");
    }

    return (
        <div className="chatScreen">
           
           
            <p className="chatScreen__timestamp">You matched with Rohit on 05/06/2021</p>
            {messages.map((message) => (
                message.name ?(
                    <div className="chatScreen__message">
                    <Avatar
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                   />
                   <p className="chatScreen__text">
                      { message.message}
                   </p>
               </div>
                ) :
                (
                    <div className="chatScreen__message">
                         <p className="chatScreen__textUser">
                             { message.message}
                         </p>
                    </div>
                )
               
            ))}

           
                <form className="chatScreen__input">
                    <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    type="text" 
                    className="chatScreen__inputField" 
                    placeholder="Type a message..."
                    />
                    <button 
                    type="submit"
                    onClick={handleSend}
                    className="chatScreen__inputButton"
                    >SEND</button>
                </form>
            
        </div>
    )
}

export default ChatScreen;
