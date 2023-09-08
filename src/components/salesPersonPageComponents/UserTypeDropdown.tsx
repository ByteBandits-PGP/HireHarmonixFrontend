import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const UserTypeDropdown = () => {

    const [defaultItem, setDefaultItem] = useState("Applicants");

    const handleItemClick = (item:any) => {
        setDefaultItem(item);
    };

    return (
        <div className="dropdown-div">

            <div className="dropdown-div_div"> 
            <label>Select User Type: </label></div>

            <div className="dropdown-div_div">
            <DropdownButton 
                id="dropdown-basic-button" 
                title={defaultItem}
                variant="Secondary"  
            >
                <Dropdown.Item href="/showApplicants" onClick={() => handleItemClick("Applicants")}>Applicants</Dropdown.Item>
                <Dropdown.Item href="/showStudents" onClick={() => handleItemClick("Bootcampers")}>Bootcampers</Dropdown.Item>
                <Dropdown.Item href="/showGraduates" onClick={() => handleItemClick("PGP Salties")}>PGP Salties</Dropdown.Item>
            </DropdownButton></div>

        </div>

    )
}
