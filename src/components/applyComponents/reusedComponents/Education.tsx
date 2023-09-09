import React, { useState } from 'react'

export interface EducationFormData {
  educationId: string;
    educationLevel: string;
    degree: string;
    institute: string;
}

interface EducationProps {
  addEducation: (data: EducationFormData) => void; 
  deleteEducation: () => void;
}

const Education: React.FC<EducationProps> = ({deleteEducation}) => {

    const [educationData, setEducationeData] = useState<EducationFormData>({
      educationId: '',
      educationLevel: '',
      degree: '',
      institute: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = event.target;
        setEducationeData({
            ...educationData,
            [name]: value
        });
    };

  return (
    <div>
        <hr />
        <div className="general-data-section">
            <div className="labels">
                <label htmlFor="educationLevel">Education level </label>
                <input type="text" id="educationLevel" name="educationLevel" value={educationData.educationLevel} onChange={handleChange}></input>
            </div>
            <div className="labels">
                <label htmlFor="degree">Degree </label>
                <input type="text" id="degree" name="degree" value={educationData.degree} onChange={handleChange}></input>
            </div>
            <div className="labels">
                <label htmlFor="institute">Institute</label>
                <input type="text" id="institute" name="institute" value={educationData.institute} onChange={handleChange}></input>
            </div>
        </div>
        <div className="delete-btn-div">
          <button onClick={() => deleteEducation()} className="delete-button">Delete education</button>
        </div>
    </div>
  )
}

export default Education
