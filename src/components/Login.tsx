import React, { useState } from 'react';
import axios from "axios";
import { userCredentials } from '../type/UserCredentials';
import { Form, useNavigate } from 'react-router-dom';
import cookie, { useCookies } from "react-cookie";
import { errorAlert } from '../helpers/ErrorHandler.tsx';
import { errorMessages } from '../helpers/ErrorMessages.tsx';



export default function Landing() {
    const [userCredential, setUserCredential] = useState<userCredentials | null>(null);
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['JSESSIONID']);

    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const newCredentials: userCredentials = {
            ...userCredential,
            [e.target.name]: e.target.value,
        }

        setUserCredential(newCredentials);

    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios.post<Role>('http://localhost:8080/api/user/login', {
            email: userCredential?.email,
            password: userCredential?.password
        })
            .then(function (response) {
                setCookie("JSESSIONID",response.data.token, {path : '/'});

                const roleAdmin = response.data.roles.find(role => role.name === 'admin')
                const roleClient = response.data.roles.find(role => role.name === 'client')
                const roleSales = response.data.roles.find(role => role.name === 'manager')
                const roleApplicant = response.data.roles.find(role => role.name === 'viewer')

                if (roleAdmin) {
                    navigate("/admin");
                } else if (roleSales) {
                    navigate("/manageUsers");
                } else if (roleApplicant) {
                    navigate("/manageUsers");
                } else {
                    navigate("/");
                }

            })
            .catch((err) => errorAlert(errorMessages.userNotFound, 'User not found', err));

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
