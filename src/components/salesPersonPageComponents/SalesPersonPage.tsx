import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ApplicantDetails } from './ApplicantDetails';
import './SalesPersonPage.css'


const SalesPersonPage = () => {
  const [defaultItem, setDefaultItem] = useState("Applicants");

  const handleItemClick = (item: any) => {
    setDefaultItem(item);
  };

  return (
    <>
      <div className="dropdown-div">
        
        <div className="dropdown-div_div">
        <label>Select User Type: </label>
          </div>

        <div className="dropdown-div_div">
          <DropdownButton
            id="dropdown-basic-button"
            title={defaultItem}
            variant="Secondary"
            className='doropdown-sales'
          >
            <Dropdown.Item onClick={() => handleItemClick("Applicants")}>Applicants</Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemClick("Students")}>Students</Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemClick("Graduates")}>Graduates</Dropdown.Item>
          </DropdownButton></div>

      </div>
      
      {defaultItem === "Applicants" && <ApplicantDetails />}
      {defaultItem === "Students" && <h1>Students</h1>}
      {defaultItem === "Graduates" && <h1>Graduates</h1>}

    </>

  )
}

export default SalesPersonPage
