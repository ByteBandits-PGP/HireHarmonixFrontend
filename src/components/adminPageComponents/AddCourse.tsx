import { useState } from 'react';
import './AdminPage.css'

export const AddCourse = () => {
    const [fromData, setFromData] = useState({
      courseName: '',
      courseCode: '',
      hours: '',
      role: 'instructor',
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFromData((fromData) => ({
        ...fromData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form data submitted:', fromData);
    };
  
  
    return (
      <>
        <div className='container-user'>
          <form className='formdesign' onSubmit={handleSubmit}>
            <div className='labelrow'>
              <label htmlFor="firstName">Course Name:</label>
              <input
                type="text"
                id="courseName"
                name="courseName"
                value={fromData.courseName}
                onChange={handleChange} />
            </div>
  
            <div className='labelrow'>
              <label htmlFor="courseCode">Course Code:</label>
              <input
                type="text"
                id="courseCode"
                name="courseCode"
                value={fromData.courseCode}
                onChange={handleChange} />
            </div>
  
            <div className='labelrow'>
              <label htmlFor="hours">Hours:</label>
              <input
                type="text"
                id="hours"
                name="hours"
                value={fromData.hours}
                onChange={handleChange} />
            </div>

  
            <div className='labelrow'>
              <label htmlFor="instructor">Instructor</label>
              <select
                id="instructor"
                name="instructor"
                value={fromData.instructor}
                onChange={handleChange}>
                <option value="user">Peter van Manen</option>
                <option value="admin">Layla Silbergen</option>
                <option value="hr">Cristiano Ronaldo</option>
  
  
              </select>
            </div>
            <div>
              <button className="add-user-button" type="submit">Create</button>
            </div>
          </form>
        </div>
      </>
    );
  }
