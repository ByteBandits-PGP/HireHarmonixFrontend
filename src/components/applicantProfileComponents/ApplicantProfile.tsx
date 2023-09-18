import { useParams } from 'react-router-dom';
import './ApplicantProfile.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';

export const ApplicantProfile = () => {

    const { applicantName } = useParams();
    const noOfInterviewSteps:number = 6;
    const completedNoOfInterviewSteps:number = 2;
    const updateClicked:boolean = false;
    const [isUpdateClicked, setIsUpdateClicked] = useState(updateClicked); 

    const handleUpdateClick = (isUpdateClicked:boolean) => {
      setIsUpdateClicked(isUpdateClicked => !isUpdateClicked);
    };

    return (
      <>
      
      <h3>Applicant Profile</h3>
      <div className="basic-info-div">
        <div className="basic-info-div_div">
          <p>{applicantName}</p>
          <p>060xxxxxxx</p>
          <button className="basic-info-div_download-button">Download CV</button>
        </div>
        <div className="basic-info-div_div">
          <p>Applied for:</p>
          <p>JFS</p>
          <p>AMS</p>
        </div>
      </div>
      <div className="interview-progress-div"><h2>Interview Progress</h2>
        <div>
          <ProgressBar variant='info' striped now={(completedNoOfInterviewSteps/noOfInterviewSteps)*100} label= {<span className='progress-label'>{`Step ${completedNoOfInterviewSteps} of ${noOfInterviewSteps}`}</span> } />
          <button className="update-progress-button" onClick={() => handleUpdateClick(isUpdateClicked ? !isUpdateClicked : isUpdateClicked)}>Update</button>
          
        </div>
      </div>

      {isUpdateClicked && <div className="update-interview-progress">
        <div className="update-text">
          <p>Step {completedNoOfInterviewSteps + 1}: </p>
        </div>
        <div className="update-buttons">
          <button>Accept</button>
          <button>Reject</button>
        </div>
      </div>
      }


      </>
    )
  }