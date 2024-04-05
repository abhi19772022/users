import React, { useState } from 'react';
import axios from 'axios'; 
import './useradd.css';

const UserAdd = () => {
    const [data,setData]=useState({
        name:"",
        address:""
    });
    const handleChange=(e)=>{
        setData({...data,[e.target.name ]:e.target.value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        // console.log(data);
        axios.post('http://localhost:9000', data) 
        
            .then(response => {
                console.log('Success:', response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    return (
        <div className='container'>
            <h1>Add User</h1>
            <form acrion="POST">
                <div>
                    <label className='input-lable'> Name:</label>
                    <input type="text" onChange={handleChange} name="name"   required />
                </div>
                <div>
                    <label classname="address-lable">Address:</label>
                    <input type="text" name="address"  onChange={handleChange} required />
                </div>
                <button className='add-button' onClick={handleSubmit} type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserAdd;
