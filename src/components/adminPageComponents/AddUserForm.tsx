import React, { useState, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Input } from './Input'
import { confirm_email_validation, email_validation, contact_number_validation, firstname_validation, job_title_validation, lastname_validation, password_validation, role_validation } from '../../common/utils/InputValidations'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import axios from 'axios';
import queryString from 'query-string';

type addUserFormDataType = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  contactNumber: string;
  email: string;
  roles: string[];
}

const AddUserForm = () => {

  const methods = useForm()
  const [success, setSuccess] = useState(false)
  const [roles, setRoles] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedValue, setSelectedValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [addUserFormData, setAddUserFormData] = useState<addUserFormDataType>(
    {
      firstName: "",
      lastName: "",
      jobTitle: "",
      contactNumber: "",
      email: "",
      roles: []
    }
  );

  useEffect(() => {

    axios.get("http://localhost:8080/api/role", { withCredentials: true })
      .then(response => response.data)
      .then(data => {
        setRoles(data);
        setSelectedValue(data[0]);
      })
      .catch((error) => {
        console.error('Error fetching roles:', error);
      });
  }, [count]);

  const handleAssignClick = () => {

    // Update the text area value
    const updatedTextAreaValue = textAreaValue + selectedValue + '\n';
    setTextAreaValue(updatedTextAreaValue);

    // Update roles based on the updated text area value
    const rolesList = updatedTextAreaValue.split('\n').filter(role => role.trim() !== '');
    setAddUserFormData({ ...addUserFormData, roles: rolesList });
  };

  const handleClearClick = () => {
    setTextAreaValue('');
  };

  const handleFormOnChange = async (
    e:
      | React.FormEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.FormEvent<HTMLTextAreaElement>
  ) => {
    switch (e.currentTarget.id) {
      case "firstname":
        setAddUserFormData({ ...addUserFormData, firstName: e.currentTarget.value });
        break;
      case "lastname":
        setAddUserFormData({ ...addUserFormData, lastName: e.currentTarget.value });
        break;
      case "jobTitle":
        setAddUserFormData({ ...addUserFormData, jobTitle: e.currentTarget.value });
        break;
      case "contactNumber":
        setAddUserFormData({ ...addUserFormData, contactNumber: e.currentTarget.value });
        break;
      case "email":
        setAddUserFormData({ ...addUserFormData, email: e.currentTarget.value });
        break;
    }
  };

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    console.log(JSON.stringify(addUserFormData))

    axios({url: "http://localhost:8080/api/employee", method:"POST", data: queryString.stringify(addUserFormData), withCredentials: true})
      .then((response) => {
        console.log(response);
        // console.log(response.headers);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });

    methods.reset()
    setSuccess(true)
  })

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={e => e.preventDefault()}
          noValidate
          autoComplete="off"
          className="container"
        >
          {/* <div className="grid gap-5 md:grid-cols-2"> */}
          <div>
            <Input className={''} {...firstname_validation} onChange={handleFormOnChange} />
            <Input className={''} {...lastname_validation} onChange={handleFormOnChange} />
            <Input className={''} {...job_title_validation} onChange={handleFormOnChange} />
            <Input className={''} {...contact_number_validation} onChange={handleFormOnChange} />
            <Input className={''} {...email_validation} onChange={handleFormOnChange} />
            <Input className={''} {...confirm_email_validation} onChange={handleFormOnChange} />

            <label className="font-semibold capitalize input-label">Assign Roles: </label>

            <select id="role" name="role" className='select-role-dropdown' onChange={(e) => setSelectedValue(e.target.value)}>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>

            <button className="assign-role-button" type="button" onClick={handleAssignClick}>
              Assign
            </button>



            <textarea placeholder={''} className={'role-textarea'} {...role_validation} readOnly value={textAreaValue} />
            <button className="clear-roles-button" type="button" onClick={handleClearClick}>
              Clear
            </button>
          </div>

          <div className="mt-5">
            {success && (
              <p className="flex items-center gap-1 mb-5 font-semibold text-green-500">
                <BsFillCheckSquareFill /> Form has been submitted successfully
              </p>
            )}
            <button
              onClick={onSubmit}
              // className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
              className="add-user-button"
            >
              Submit Form
            </button>
          </div>

        </form>

      </FormProvider>

    </>
  )
}

export default AddUserForm