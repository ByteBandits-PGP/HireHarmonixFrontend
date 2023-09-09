import React, { useState } from "react";
import WorkExperience, {WorkExperienceFormData} from "./reusedComponents/WorkExperience";
import Education, { EducationFormData } from "./reusedComponents/Education";
import Project, {ProjectFormData} from "./reusedComponents/Project";
import './Apply.css';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    skills: string;
    location: string;
    bootcamp: string;
    workExperience: WorkExperienceFormData[];
    education:  EducationFormData[] ;
    project: ProjectFormData[];
    languages: string | string[];
}

const Apply: React.FC = () => {

    const [formData, setFormData] = useState<FormData> ({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        skills: '',
        location: 'Select a location',
        bootcamp: 'Select a bootcamp',
        workExperience: [],
        education: [],
        project: [],
        languages: '',
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value, 
        })
    };

    const handleAddWorkExperience = (workExperienceData: WorkExperienceFormData) => {
        setFormData({
            ...formData,
            workExperience: [...formData.workExperience, workExperienceData]
        });
    };

    const handleAddEducation = (educationData: EducationFormData) => {
        setFormData({
            ...formData,
            education: [...formData.education, educationData],
        });
    };

    const handleAddProject = (projectData: ProjectFormData) => {
        setFormData({
            ...formData,
            project: [...formData.project, projectData],
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("FormData: ", formData);
        
    }

    const handleDeleteWorkExperience = (index: number) => {
        const updatedWorkExperience = [...formData.workExperience];
        updatedWorkExperience.splice(index, 1);
        setFormData({
          ...formData,
          workExperience: updatedWorkExperience,
        });
      };    

      const handleDeleteEducation = (index: number) => {
        const updateEducation = [...formData.education];
        updateEducation.splice(index, 1);
        setFormData({
            ...formData,
            education: updateEducation,
        });
      };

      const handleDeleteProject = (index: number) => {
        const updateProject = [...formData.project];
        updateProject.splice(index, 1);
        setFormData({
            ...formData,
            project: updateProject,
        });
      };

  return (
    <div className="main-apply">
        <div className="upload-cv"><button className="upload-cv-btn">Upload CV</button></div>
        <hr />
        <form onSubmit={handleSubmit} className="main-form">
          <div className="general-data-section">
            <div className="labels">
                <label htmlFor="firstNmae">First name: </label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange}></input>
            </div>
            <div className="labels">
                <label htmlFor="lastName">Last name: </label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange}></input>
            </div>
            <div className="labels">
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" name="email" value={formData.email} onChange={handleChange}></input>
            </div>
            <div className="labels">
                <label htmlFor="contactNumber">Mobile number: </label>
                <input type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange}></input>
            </div>
            <div className="labels">
                <label htmlFor="skills">Skills: </label>
                <input type="text" id="skills" name="skills" value={formData.skills} onChange={handleChange}></input>
            </div>
            <div className="labels">
                <label htmlFor="location">Location: </label>
                <select id="location" name="location" value={formData.location} onChange={handleChange}>
                    <option value="Select location">Select location</option>
                    <option value="option2">Amsterdam</option>
                    <option value="option3">Location 2</option>
                    <option value="option4">Location 3</option>
                </select>
            </div>
            <div className="labels">
                <label htmlFor="bootcamp">Bootcamp: </label>
                <select id="bootcamp" name="bootcamp" value={formData.bootcamp} onChange={handleChange}>
                    <option value="Select bootcamp">Select bootcamp</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
          </div>
          <hr />
          <div>
          <div className="title-section">
            <h3>Work experience</h3>
            <button type="button" 
                    onClick={() => handleAddWorkExperience({workExperienceId:'',
                                                    jobTitle: '',
                                                    workplace: '',
                                                    yearsOfExperience: '' })} 
                    className="add-work-experience">+ add work experience</button>
        </div>
        {formData.workExperience.map((workExperience, index) => (
            <WorkExperience
              key={workExperience.workExperienceId}
              addWorkExperience={handleAddWorkExperience}
              deleteWorkExperience={() => handleDeleteWorkExperience(index)}
            />
          ))}
        </div>
        <hr />
        <div>
            <div className="title-section">
                <h3>Education</h3>
                <button type="button" onClick={() => handleAddEducation({educationId: '',
                                                        educationLevel: '',
                                                        degree: '',
                                                        institute: '',
                                        })} 
                        className="add-education">+ add education</button>
            </div>
            {formData.education.map((education, index) => (
                <Education
                key={education.educationId}
                addEducation={handleAddEducation}
                deleteEducation={() => handleDeleteEducation(index)}
                />
          ))}
        </div>
        <hr />
        <div>
            <div className="title-section">
                <h3>Projects</h3>
                <button type="button" onClick={() => handleAddProject({projectId:'',
                                                        projectName: '',
                                                        technologies: '',
                                        })} 
                                        className="add-project">+ add project</button>
            </div>
            {formData.project.map((project, index) => (
                <Project
                key={project.projectId}
                addProject={handleAddProject}
                deleteProject={() => handleDeleteProject(index)}
                />
          ))}
        </div>
        <hr />
          <div className="labels">
            <label><h3>Languages</h3></label>
            <input type="text" name="languages" value={formData.languages}></input>
        </div>
        <hr />
          <div className="apply-div">
            <button type="submit" className="apply-btn">Apply</button>
          </div>
        </form>
    </div>
  )
}

export default Apply
