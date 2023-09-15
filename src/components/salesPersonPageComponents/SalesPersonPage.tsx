import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { UserDetailsList } from "../salesPersonPageComponents/UserDetailsList"


export const SalesPersonPage = () => {
  const [defaultItem, setDefaultItem] = useState("Applicants");

  const handleItemClick = (item: any) => {
    setDefaultItem(item);
  };

  return (
    <>
      <div className="dropdown-div">

        <div className="dropdown-div_div">
          <label>Select User Type: </label></div>

        <div className="dropdown-div_div">
          <DropdownButton
            id="dropdown-basic-button"
            title={defaultItem}
            variant="Secondary"
          >
            <Dropdown.Item onClick={() => handleItemClick("Applicants")}>Applicants</Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemClick("Bootcampers")}>Bootcampers</Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemClick("PGP Salties")}>PGP Salties</Dropdown.Item>
          </DropdownButton></div>

      </div>
      {defaultItem === "Applicants" && <UserDetailsList />}
      {defaultItem === "Bootcampers" && <h1>Bootcampers</h1>}
      {defaultItem === "PGP Salties" && <h1>PGP Salties</h1>}

    </>

  )
}

export default SalesPersonPage
