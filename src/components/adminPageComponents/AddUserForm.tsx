import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Input } from './Input'
import { confirm_email_validation, email_validation, firstname_validation, lastname_validation, password_validation, role_validation } from '../../common/utils/InputValidations'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'

const AddUserForm = () => {
    const methods = useForm()
    const [success, setSuccess] = useState(false)


    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
      };

    //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    //     const { name, value } = e.target;
    //     setFromData((fromData) => ({
    //       ...fromData,
    //       [name]: value,
    //     }));
    //   };

  return (
    
    <FormProvider {...methods}>
    <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container"
      >
        <div className="grid gap-5 md:grid-cols-2">
        <Input multiline={false} className={''} {...firstname_validation} />
        <Input multiline={false} className={''} {...lastname_validation} />
        <Input multiline={false} className={''} {...email_validation} />
        <Input multiline={false} className={''} {...confirm_email_validation} />
        {/* <Input multiline={false} className={''} {...password_validation} />
        <Input multiline={false} className={''} {...password_validation} /> */}

        <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
            //   value={fromData.role}
            //   onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="hr">HR</option>
              <option value="developer">Developer</option>
            </select>
            <button className="add-user-button" type="submit">Add</button>
        
        
        <textarea  placeholder={''} className={''} {...role_validation}/>
        
        </div>
        <div className="mt-5">
          {success && (
            <p className="flex items-center gap-1 mb-5 font-semibold text-green-500">
              <BsFillCheckSquareFill /> Form has been submitted successfully
            </p>
          )}
          <button
            onClick={onSubmit}
            className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
          >
            <GrMail />
            Submit Form
          </button>
        </div>


      </form>

    </FormProvider>
    
    
    
  )
}

export default AddUserForm