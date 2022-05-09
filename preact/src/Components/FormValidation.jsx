const FormValidation = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "Name Is Required !";
    } else if (/^([a-z0-9]{5,})$/.test(values.name)) {
      errors.name = "Name Must have charachter not numbers only !";
    } else {
      errors.namevalid = "Valid";
    }
    if (!values.email) {
      errors.email = "Email Is Required !";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is Invalid";
    } else {
      errors.emailvalid = "Valid";
    }
    if (!values.password) {
      errors.password = "Password is Invalid";
    } else if (values.password.length < 5) {
      errors.password = "Password Must be More Than 5 Char";
    } else {
      errors.passwordvalid = "valid";
    }
    
    if (
      values.name &&
      values.email &&
      values.password
    ) {
      errors.confirm = "~~ Congratulations Valid Register ~~";
      errors.namevalid = "";
      errors.emailvalid = "";
      errors.passwordvalid = "";
    } else {
      errors.check = "~~ Please Check Your Data Registration ~~";
    }
  
    return errors;
  };
  
  export default FormValidation;
  