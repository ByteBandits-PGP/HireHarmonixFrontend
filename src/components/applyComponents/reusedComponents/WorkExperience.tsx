import React, { useState } from 'react'
import '../Apply.css';

export interface WorkExperienceFormData {
    workExperienceId: string,
    jobTitle: string;
    workplace: string;
    yearsOfExperience: string;
}

interface WorkExperieceProps {
    addWorkExperience: (data: WorkExperienceFormData) => void;
    deleteWorkExperience: () => void;
}

const WorkExperience: React.FC<WorkExperieceProps> = ({deleteWorkExperience}) => {

    const [workExperienceData, setWorkExperienceData] = useState<WorkExperienceFormData>({
        workExperienceId: '',
        jobTitle: '',
        workplace: '',
        yearsOfExperience: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = event.target;
        setWorkExperienceData({
            ...workExperienceData,
            [name]: value
        });
    };

  return (
    <div>
        <hr />
        <div className="general-data-section">
            <div className="labels">
                <label htmlFor="jobTitle">Job title: </label>
                <input type="text" id="jobTitle" name="jobTitle" value={workExperienceData.jobTitle} onChange={handleChange}></input>
            </div>
            <div className="labels">
                <label htmlFor="workplace">Workplace </label>
                <input type="text" id="workplace" name="workplace" value={workExperienceData.workplace} onChange={handleChange}></input>
            </div>
            <div className="labels">
                <label htmlFor="yearsOfExperience">Years of experience </label>
                <input type="text" id="yearsOfExperience" name="workpyearsOfExperiencelace" value={workExperienceData.yearsOfExperience} onChange={handleChange}></input>
            </div>
        </div>
        <div className="delete-btn-div">
            <button type="button" onClick={() => deleteWorkExperience()} className="delete-button">Delete work experience</button>
        </div>
    </div>
  )
}

export default WorkExperience
