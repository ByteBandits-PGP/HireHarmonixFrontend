import React from 'react';


export default function Landing() {
    return (
        <div className='landing-container'>
            <div className='landing-container-left'>
                <h1>HireHarmonix</h1>
                <h3>Unlock the potential<br />of your organization with<br />HireHarmonix, the premier<br />Recruitment and Talent<br />Management Application.</h3>
            </div>
            <div className='landing-container-right'>
                <img className='logo' src="src/assets/images/hh-logo-purple-removebg-sz2.png" alt="" />
                <div className='input-design'>
                    <label>E-mail</label>
                    <input></input>
                </div>
                <div className='input-design'>
                    <label>Password</label>
                    <input></input>
                </div>

                <button className='sign'>Sign in</button>
            </div>
        </div>

    );
}
