import React, { useState, useEffect } from "react";
import icon from "../assets/svgs/Schedule-Meet.svg";
import Axios from "axios";
function RegistrationForm() {
  const url = "https://mock-it-up.herokuapp.com/api/v1/main";
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    domain: "",
    drive: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  function changeHandler(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  function submitHandler(e) {}
  function submitHandler(e) {
    e.preventDefault();
    setErrors(validate(data));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      Axios.post(url, {
        name: data.name,
        phone: parseInt(data.phone),
        email: data.email,
        domain: data.domain,
        drive: data.drive,
      }).then((res) => {
        console.log(res.data);
      });
    }
  }, [errors]);

  const validate = (values) => {
    const errors = {};
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!values.name) {
      errors.name = "Please Enter Your Name";
    }
    if (!values.email) {
      errors.email = "Please Enter Your Email Address";
    } else if (!regex.test(values.email)) {
      errors.email = "Please Provide a Valid Email";
    }
    if (!values.domain) {
      errors.domain = "Please Enter A Domain";
    }
    if (!values.drive) {
      errors.drive = "Please Enter The Drive Link to Your CV";
    }
    if (!values.phone) {
      errors.phone = "Please Enter Your Phone Number";
    } else if (values.phone.length < 9) {
      errors.phone = "Phone Number too Short";
    } else if (values.phone.length > 12) {
      errors.phone = "Phone Number too Long";
    }
    return errors;
  };

  return (
    <div className="form-overlay" id="test">
      <img src={icon} alt="" className="form-pic" />
      <div className="form-sheet">
        {Object.keys(errors).length === 0 && isSubmit ? (
          <div className="form__Message">
            {" "}
            &#10003; Registered Successfully!!
          </div>
        ) : (
          <div className="none"></div>
        )}
        <form onSubmit={(e) => submitHandler(e)} className="form-container">
          <div className="form">
            <input
              onChange={(e) => changeHandler(e)}
              id="name"
              value={data.name}
              type="text"
              placeholder="NAME"
              className="input-field"
            />
            <p className="registration__error">{errors.name}</p>
            <input
              onChange={(e) => changeHandler(e)}
              id="email"
              value={data.email}
              type="text"
              placeholder="EMAIL"
              className="input-field"
            />
            <p className="registration__error">{errors.email}</p>
            <input
              onChange={(e) => changeHandler(e)}
              id="phone"
              value={data.phone}
              type="text"
              placeholder="PHONE"
              className="input-field"
            />
            <p className="registration__error">{errors.phone}</p>
            <input
              type="text"
              onChange={(e) => changeHandler(e)}
              id="drive"
              value={data.drive}
              placeholder="G-DRIVE LINK TO RESUME"
              className="input-field"
            />
            <p className="registration__error">{errors.drive}</p>
            <label for="domain"></label>
            <select
              className="input-field"
              id="domain"
              name="domain"
              onChange={(e) => changeHandler(e)}
            >
              <option value="" disabled selected>
                Select your Domain
              </option>
              <option value="HR Questions">HR Questions</option>
              <option value="Array and Matrix">Array and Matrix</option>
              <option value="Strings">Strings</option>
              <option value="Linked List">Linked List</option>
              <option value="tack and Queue">Stack and Queue</option>
              <option value="Trees">Trees</option>
              <option value="Hashing">Hashing</option>
              <option value="Heap">Heap</option>
              <option value="Graph">Graph</option>
              <option value="Trie">Trie</option>
              <option value="Dynamic Programing">Dynamic Programing</option>
              <option value="Other Algorithms">Other Algorithms</option>
              <option value="Computer Science Fundamentals">
                Computer Science Fundamentals
              </option>
              <option value="Resume Discussions">Resume Discussions</option>
            </select>
            <label
              onChange={(e) => changeHandler(e)}
              id="domain"
              value={data.domain}
              className="input-field"
            />
            <p className="registration__error">{errors.domain}</p>
            <button className="button registration">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
