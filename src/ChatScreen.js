import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';

import './ChatScreen.css'
function ChatScreen() {

    const [input, setInput] = useState('')
    const [message, setMessage] = useState([
        {
            name: 'Angela',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjaiGo1iFMN07f0krKTyotg6bzOITQqL1dyA&usqp=CAU',
            message: 'Whats up'
        },
        {
            name: 'Angela',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjaiGo1iFMN07f0krKTyotg6bzOITQqL1dyA&usqp=CAU',
            message: 'Hey! how are you!'
        },
        {
            message: 'how it is going?'
        }
    ])

    const handleSend = e => {
        e.preventDefault();
        setMessage([...message, { message: input }]);
        setInput("")
    }

    return (
        <div className={"chatScreen"}>
            <p className="chatScreen__timeStamp">YOU MATCHED WITH ANGELA ON 10/08/20</p>
            {message.map(mes => (
                mes.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={mes.name}
                            src={mes.image}
                        />
                        <p className="chatScreen__text">{mes.message}</p>
                    </div>

                ) : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">{mes.message}</p>
                        </div>
                    )

            ))}

            <form className="chatScreen__input">
                <input
                    className="chatScreen__inputField"
                    placeholder="Type a message..."
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
            </form>

        </div>
    )
}

export default ChatScreen
