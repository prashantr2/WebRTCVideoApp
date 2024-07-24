import React , { useState, useCallback } from 'react';

const LobbyScreen = () => {
    const [email, setEmail] = useState('');
    const [room, setRoom] = useState('');
    
    const formHandler = useCallback((e) => {
        e.preventDefault();
    }, [])

    return ( <div>
        <h1>Lobby</h1>
        <form onSubmit={formHandler}>
            <label htmlFor="emailId">Email ID</label>
            <input 
                type="text" 
                id="emailId"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
             />
            <br />
            <label htmlFor="room">Room Number</label>
            <input 
                type="text" 
                id="room" 
                value={room}
                onChange={(e) => setRoom(e.target.value)}
            />
            <br />
            <button type="submit">Join</button>
        </form>
    </div> );
}
 
export default LobbyScreen;