export const firstname_validation = {
    validationName: 'firstName',
    label: 'First Name',
    type: 'text',
    id: 'firstname',
    placeholder: 'write your first name ...',
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
    validationName: 'lastName',
    label: 'Last Name',
    type: 'text',
    id: 'lastname',
    placeholder: 'write your last name ...',
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
    validationName: 'email',
    label: 'Email Address',
    type: 'email',
    id: 'email',
    placeholder: 'write your email address',
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
    validationName: 'email',
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
    },
  }




  export const password_validation = {
    validationName: 'password',
    label: 'Password',
    type: 'password',
    id: 'password',
    placeholder: 'type your password ...',
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
    validationName: 'role',
    label: 'Roles Assigned',
    multiline: true,
    id: 'role',
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
    },
  }

  