import { useState } from 'react';
import './AdminPage.css'

export const AddRole = () => {
  const [roleName, setRoleName] = useState('');
  const [accessPrivilege, setAccessPrivilege] = useState(false);

  const handleRoleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoleName(e.target.value);
  };

  const handleAccessPrivilegeChange = () => {
    setAccessPrivilege(!accessPrivilege);
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <label>
        Role Name:
        <input type="text" value={roleName} onChange={handleRoleNameChange} />
      </label>
      <div className="checkbox">
  <label>
    <input type="checkbox" data-toggle="toggle"/>
    Option one is enabled
  </label>
</div>
      <label>
        Access Privilege:
        <input
          type="checkbox"
          checked={accessPrivilege}
          onChange={handleAccessPrivilegeChange}
        />
      </label>
      <button onClick={handleAccessPrivilegeChange}>
        {accessPrivilege ? 'Toggle Off' : 'Toggle On'}
      </button>
    </div>
  );
}
