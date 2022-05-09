import React, { useState, useRef, useEffect } from "react";
import FormValidation from "./FormValidation";
export function TypesForms() {
  const [errors, setErrors] = useState({});
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(FormValidation(values));
    if (
      refinput.current.value &&
      refinputemail.current.value &&
      refinputpass.current.value 
    ) {
      setValues({
        name: "",
        email: "",
        password: ""
      });
    }
  };
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    Gender: "",
    Country: "",
  });
  const refinput = useRef();
  const refinputemail = useRef();
  const refinputpass = useRef();
  useEffect(() => {
    refinput.current.focus();
  }, []);

  const handleChange = (e) => {
    setValues({
      ...values,
      name: e.target.value,
    });
  };
  const handleChangeemail = (e) => {
    setValues({
      ...values,
      email: e.target.value,
    });
  };
  const handleChangeepassword = (e) => {
    setValues({
      ...values,
      password: e.target.value,
    });
  };

  return (
    <>
      <div className="parent d-flex">
       
        <form className=" imag">
          <div className="text-danger" />
          <div className="container d-flex justify-content-center">
            <div className="card px-1 py-4">
              <div className="card-body">
                <h6
                  style={{
                    color: "#0d85fe",
                    fontSize: "large",
                    fontWeight: "bolder",
                  }}
                  className="card-title mb-3"
                >
                  Registration Form
                </h6>
                <br></br>
                <div className="row">
                  <div className="col-sm-12 mb-5">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={values.name}
                        onChange={handleChange}
                        ref={refinput}
                      />
                    </div>
                    {errors.name && (
                      <p className="d-block text-danger"> {errors.name}</p>
                    )}
                    {errors.namevalid && (
                      <p className="mt-1 d-block text-success">
                        {" "}
                        {errors.namevalid}
                      </p>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group mb-5">
                      <div className="input-group">
                        <input
                          type="email"
                          className="form-control"
                          value={values.email}
                          placeholder="Email"
                          onChange={handleChangeemail}
                          ref={refinputemail}
                        />
                      </div>
                      {errors.email && (
                        <p className="d-block text-danger">{errors.email}</p>
                      )}
                      {errors.emailvalid && (
                        <p className="mt-1 d-block text-success">
                          {errors.emailvalid}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 mb-5">
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          type="password"
                          className="form-control"
                          value={values.password}
                          placeholder="Password"
                          onChange={handleChangeepassword}
                          ref={refinputpass}
                        />
                      </div>
                      {errors.password && (
                        <p className="d-block text-danger">{errors.password}</p>
                      )}
                      {errors.passwordvalid && (
                        <p className="mt-1 d-block text-success">
                          {errors.passwordvalid}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              
              
                <button
                  onClick={handleFormSubmit}
                  className="btn btn-primary btn-block confirm-button"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
