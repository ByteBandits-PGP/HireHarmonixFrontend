export const firstname_validation = {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    id: 'firstname',
    placeholder: 'Enter first name ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
    },
  }

  export const lastname_validation = {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    id: 'lastname',
    placeholder: 'Enter last name ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
    },
  }

  export const email_validation = {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    id: 'email',
    placeholder: 'Enter email address',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'not valid',
      },
    },
  }

  export const confirm_email_validation = {
    name: 'emailConfirm',
    label: 'Confirm Email Address',
    type: 'email',
    id: 'email',
    placeholder: 'confirm your email address',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'not valid',
      },
      validate: (value: string) => {
        // Custom validation function to check if the value matches the email field
        const emailField = document.querySelector('#email') as HTMLInputElement;
        const emailFieldValue = emailField.value;
        if (value === emailFieldValue) {
          return true;
        } else {
          return 'Email addresses do not match';
        }
      }
    },
  }

  export const password_validation = {
    name: 'password',
    label: 'Password',
    type: 'password',
    id: 'password',
    placeholder: 'Enter password ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      minLength: {
        value: 6,
        message: 'min 6 characters',
      },
    },
  }

  export const role_validation = {
    name: 'role',
    label: 'Roles Assigned',
    multiline: "true",
    id: 'roles',
    validation: {
      required: {
        value: true,
        disabled: true,
        message: 'required',
      },
      maxLength: {
        value: 200,
        message: '200 characters max',
      },
      // validate: {
      //   duplicateRole: (value, allValues) => {
      //     if (value.trim() === '') {
      //       return true; // Allow empty value
      //     }
      //     if (allValues.assignedRoles.includes(value)) {
      //       return 'Role already assigned';
      //     }
      //     return true;
      //   },
      // },
    },
  }

  export const job_title_validation = {
    name: 'jobTitle',
    label: 'Job Title',
    type: 'text',
    id: 'jobTitle',
    placeholder: 'Enter job title ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
    },
  }

  export const contact_number_validation = {
    name: 'contactNumber',
    label: 'Contact Number',
    type: 'text',
    id: 'contactNumber',
    placeholder: 'Enter contact number ...',
    validation: {
      required: {
        value: true,
        message: 'Contact number is required',
      },
      minLength: {
        value: 10,
        message: 'Contact number must be exactly 10 digits long',
      },
      maxLength: {
        value: 10,
        message: 'Contact number must be exactly 10 digits long',
      },
      pattern: {
        value: /^\d{10}$/, // Regular expression for exactly 10 digits
        message: 'Invalid contact number format',
      },
    },
  };

  