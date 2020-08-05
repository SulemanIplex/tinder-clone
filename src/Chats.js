import React from 'react';
import Chat from './Chat';
import './Chats.css';

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Sarah"
                message="Hey! how are you!"
                timeStamp="35 minutes ago"
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0fGiqQN9XvPg8SKKEWQSnjW3TpSY4GGed2A&usqp=CAU"
            />

            <Chat
                name="Mark"
                message="Yo Whats Up!"
                timeStamp="40 Secs ago"
                profilePic="https://pbs.twimg.com/profile_images/378800000221877365/4025412bcd4ec1003ffc3ce1051d46ae_400x400.jpeg"
            />
            <Chat
                name="John"
                message="Hola!"
                timeStamp="40 mins ago"
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4qzRUUamzDSAOLvL6qTwGPrhiJX-rTcKcbg&usqp=CAU"
            />
            <Chat
                name="Angela"
                message="Sure!"
                timeStamp="20 Secs ago"
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjaiGo1iFMN07f0krKTyotg6bzOITQqL1dyA&usqp=CAU"
            />
        </div>
    )
}

export default Chats
