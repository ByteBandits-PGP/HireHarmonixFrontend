import React, {useState} from 'react'
<<<<<<< HEAD
import './UserDetails.css'
import { NavBar } from '../commonComponents/NavBar';

=======
>>>>>>> dev


const UserDetails = () => {
    const [fromData, setFromData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmpassword: '',
        role: 'user', 
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
<<<<<<< HEAD
    <>
    {/* <div className='navbar'> */}
      <NavBar/>
    {/* </div> */}
    <div className='container-user'>
      {/* <div className='firstrow'> */}
      <form className='formdesign' onSubmit={handleSubmit}>
          <div className='labelrow'>
          <label htmlFor="firstName">First Name:</label>
=======
    <div><div>userDetails</div><form onSubmit={handleSubmit}>
          <div>
              <label htmlFor="firstName">First Name:</label>
>>>>>>> dev
              <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={fromData.firstName}
                  onChange={handleChange} />
          </div>

<<<<<<< HEAD
          <div className='labelrow'>
=======
          <div>
>>>>>>> dev
              <label htmlFor="lastName">Last Name:</label>
              <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={fromData.lastName}
                  onChange={handleChange} />
          </div>

<<<<<<< HEAD
          <div className='labelrow'>
=======
          <div>
>>>>>>> dev
              <label htmlFor="email">Email:</label>
              <input
                  type="text"
                  id="email"
                  name="firstName"
                  value={fromData.email}
                  onChange={handleChange} />
          </div>

<<<<<<< HEAD
          <div className='labelrow'>
=======
          <div>
>>>>>>> dev
              <label htmlFor="password">Password:</label>
              <input
                  type="text"
                  id="password"
                  name="password"
                  value={fromData.password}
                  onChange={handleChange} />
          </div>

<<<<<<< HEAD
          <div className='labelrow'>
=======
          <div>
>>>>>>> dev
              <label htmlFor="role">Role</label>
              <select 
              id="role" 
              name="role" 
              value={fromData.role} 
              onChange={handleChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
<<<<<<< HEAD
            <option value="hr">HR</option>
            <option value="developer">Developer</option>


          </select>
          </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
      </div>
      {/* </div> */}
      </>
=======
          </select>
          </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
>>>>>>> dev
  );
}

export default UserDetails;