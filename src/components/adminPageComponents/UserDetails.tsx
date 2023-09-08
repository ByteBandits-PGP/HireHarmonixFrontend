import React, {useState} from 'react'


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
    <div><div>userDetails</div><form onSubmit={handleSubmit}>
          <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={fromData.firstName}
                  onChange={handleChange} />
          </div>

          <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={fromData.lastName}
                  onChange={handleChange} />
          </div>

          <div>
              <label htmlFor="email">Email:</label>
              <input
                  type="text"
                  id="email"
                  name="firstName"
                  value={fromData.email}
                  onChange={handleChange} />
          </div>

          <div>
              <label htmlFor="password">Password:</label>
              <input
                  type="text"
                  id="password"
                  name="password"
                  value={fromData.password}
                  onChange={handleChange} />
          </div>

          <div>
              <label htmlFor="role">Role</label>
              <select 
              id="role" 
              name="role" 
              value={fromData.role} 
              onChange={handleChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
  );
}

export default UserDetails;