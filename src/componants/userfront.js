import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import"./userfront.css";
import { useNavigate } from 'react-router-dom';
const UserFront = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9000/")
            .then(res => {
                setUserData(res.data);
            })
            .catch(err => console.log(err));
    }, []);
    let navigate = useNavigate();

    const navigateAdd = () => {
        navigate('/UserAdd');
    }

    return (
        <>
        <button className='button-86' onClick={navigateAdd}>Add info</button>
        <div className="container">
            <h1>User Data</h1>
            <div className="grid">
                {userData.map(user => (
                    <div className="card" key={user._id}>
                        <p>Name: {user.name}</p>
                        <p>address: {user.address}</p>
                        {/* Add more fields as needed */}
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default UserFront;