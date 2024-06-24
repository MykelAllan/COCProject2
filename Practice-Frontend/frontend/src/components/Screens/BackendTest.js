import React, { useState, } from 'react';

//import api
import APIs from '../../api/APIs'

export default function BackendTest() {
    const [message, setMessage] = useState('No Data');
    const [users, setUsers] = useState([]);

    const fetchGreet = () => {
        APIs.fetchHello()
            .then(data => {
                setMessage(data.message)
            })
            .catch(err => {
                setMessage("Error on fetching the data")
            })
    }

    const fetchUsers = () => {
        APIs.fetchUsers()
            .then(data => {
                setUsers(data)
            })
            .catch(err => {
                setMessage("Error on fetching the data users")
            })
    }
    return (
        <div>
            <h1>Response from API:</h1>
            <p>{message}</p>
            <button onClick={fetchGreet}>Fetch Data</button>
            <button onClick={fetchUsers}>Fetch Data Users</button>

            <div>
                <h2>Users:</h2>
                {users.length > 0 ? (
                    <div>
                        {users.map(user => (
                            <p key={user.id}>{user.name}</p>
                        ))}
                    </div>
                ) : (
                    <p>No users to display</p>
                )}
            </div>
        </div>
    );

}