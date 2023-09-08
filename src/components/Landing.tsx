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
                <button className='apply'>Apply</button>
                <button className='sign'>Sign in</button>
            </div>
        </div>

    );
}
