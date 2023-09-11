import React, { useState } from 'react'

export interface ProjectFormData {
  projectId: string;
    projectName: string;
    technologies: string;
}

interface ProjectProps {
    addProject: (data: ProjectFormData) => void;
    deleteProject: () => void;
}

const Project: React.FC<ProjectProps> = ({deleteProject}) => {

    const [projectData, setProjectData] = useState<ProjectFormData>({
      projectId: '',
      projectName: '',
      technologies: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = event.target;
        setProjectData({
            ...projectData,
            [name]: value
        });
    };

  return (
    <div>
        <hr />
        <div className="general-data-section">
            <div className="labels">
                <label htmlFor="projectName">Project name</label>
                <input type="text" id="projectName" name="projectName" value={projectData.projectName} onChange={handleChange}></input>
            </div>
            <div className="labels">
                <label htmlFor="technologies">Technologies</label>
                <input type="text" id="technologies" name="technologies" value={projectData.technologies} onChange={handleChange}></input>
            </div>
        </div>
        <div className="delete-btn-div">
          <button onClick={() => deleteProject()} className="delete-button">Delete project</button>
        </div>
    </div>
  )
}

export default Project
