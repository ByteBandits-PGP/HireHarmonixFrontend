import React, { useState } from 'react';
import axios from "axios";
import { userCredentials } from '../type/UserCredentials';
import { Form } from 'react-router-dom';


export default function Landing() {
    const [userCredential, setUserCredential] = useState<userCredentials | null>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const newCredentials: userCredentials = {
            ...userCredential,
            [e.target.name]: e.target.value,
        }

        setUserCredential(newCredentials);

    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        axios.post('http://localhost:8080/api/user/login', {
            email: userCredential?.email,
            password: userCredential?.password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className='landing-container'>
            <div className='landing-container-left'>
                <h1>HireHarmonix</h1>
                <h3>Unlock the potential<br />of your organization with<br />HireHarmonix, the premier<br />Recruitment and Talent<br />Management Application.</h3>
            </div>
            <div className='landing-container-right'>
                <img className='logo' src="src/assets/images/hh-logo-purple-removebg-sz2.png" alt="" />
                <form onSubmit={handleSubmit}>
                    <div className='input-design'>
                        <label>E-mail</label>
                        <input type="text"
                            id="email"
                            name="email"
                            value={userCredential?.email}
                            onChange={handleChange} ></input>
                    </div>
                    <div className='input-design'>
                        <label>Password</label>
                        <input type="text"
                            id="password"
                            name="password"
                            value={userCredential?.password}
                            onChange={handleChange}></input>
                    </div>
                    <button type="submit" className='sign'>Sign in</button>
                </form>


            </div>
        </div>

    );
}
