import React, { useState } from 'react'
import './WorkExperience.css';

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
        <div className="experience-data-section">
            <div className="experience-label">
                <label htmlFor="jobTitle">Job title: </label>
                <input type="text" id="jobTitle" name="jobTitle" value={workExperienceData.jobTitle} onChange={handleChange} className="experience-input"></input>
            </div>
            <div className="experience-label">
                <label htmlFor="workplace">Workplace </label>
                <input type="text" id="workplace" name="workplace" value={workExperienceData.workplace} onChange={handleChange} className="experience-input"></input>
            </div>
            <div className="experience-label">
                <label htmlFor="yearsOfExperience">Years of experience </label>
                <input type="text" id="yearsOfExperience" name="workpyearsOfExperiencelace" value={workExperienceData.yearsOfExperience} onChange={handleChange} className="experience-input"></input>
            </div>
        </div>
        <div className="delete-btn-div">
            <button type="button" onClick={() => deleteWorkExperience()} className="delete-button">Delete work experience</button>
        </div>
        <hr />
    </div>
  )
}

export default WorkExperience
