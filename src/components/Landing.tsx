import { useNavigate } from 'react-router-dom';

export default function Landing() {

    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate('/login');
    };

    const handleApplyClick = () => {
        navigate('/apply');
      };

    return (
        <div className='landing-container'>
            <div className='landing-container-left'>
                <h1>HireHarmonix</h1>
                <h3>Unlock the potential<br />of your organization with<br />HireHarmonix, the premier<br />Recruitment and Talent<br />Management Application.</h3>
            </div>
            <div className='landing-container-right'>
                <img className='logo' src="src/assets/images/hh-logo-purple-removebg-sz2.png" alt="" />
                <button className='apply' onClick={handleApplyClick}>Apply</button>
                <button className='sign' onClick={handleLoginClick}>Sign in</button>
            </div>
        </div>

    );
}
