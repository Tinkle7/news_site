import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      emailId: "",
      gender: "select",
      phoneNumber: "",
      city: "select",
      formErrors: {},
    };

    this.initialState = this.state;
  }

  handleFormValidation() {
    const { name, emailId, gender, phoneNumber, city } = this.state;
    let formErrors = {};
    let formIsValid = true;

    //Name
    if (!name) {
      formIsValid = false;
      formErrors["nameErr"] = "Name is required.";
    }

    //Email
    if (!emailId) {
      formIsValid = false;
      formErrors["emailIdErr"] = "Email id is required.";
    } else if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/.test(emailId)) {
      formIsValid = false;
      formErrors["emailIdErr"] = "Invalid email id.";
    }

    //Gender
    if (gender === "" || gender === "select") {
      formIsValid = false;
      formErrors["genderErr"] = "Select gender.";
    }

    //Phone number
    if (!phoneNumber) {
      formIsValid = false;
      formErrors["phoneNumberErr"] = "Phone number is required.";
    } else {
      var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
      if (!mobPattern.test(phoneNumber)) {
        formIsValid = false;
        formErrors["phoneNumberErr"] = "Invalid phone number.";
      }
    }

    //City
    if (city === "" || city === "select") {
      formIsValid = false;
      formErrors["cityErr"] = "Select city.";
    }

    this.setState({ formErrors: formErrors });
    return formIsValid;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.handleFormValidation()) {
      alert("You have been successfully registered.");
      this.setState(this.initialState);
    }
  };

  render() {
    const { nameErr, emailIdErr, genderErr, phoneNumberErr, cityErr } =
      this.state.formErrors;

    return (
      <div className="formDiv">
        <h3 style={{ textAlign: "center" }}>Contact us! </h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Your name.."
                className={nameErr ? " showError" : ""}
              />
              {nameErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>{nameErr}</div>
              )}
            </div>
            <div>
              <label htmlFor="emailId">Email Id</label>
              <input
                type="text"
                name="emailId"
                value={this.state.emailId}
                onChange={this.handleChange}
                placeholder="Your email id.."
                className={emailIdErr ? " showError" : ""}
              />
              {emailIdErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {emailIdErr}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                onChange={this.handleChange}
                className={genderErr ? " showError" : ""}
                value={this.state.gender}
              >
                <option value="select">--Select--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="female">Other</option>
              </select>
              {genderErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {genderErr}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                onChange={this.handleChange}
                value={this.state.phoneNumber}
                placeholder="Your phone number.."
                className={phoneNumberErr ? " showError" : ""}
              />
              {phoneNumberErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {phoneNumberErr}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="city">City</label>
              <select
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                className={cityErr ? " showError" : ""}
              >
                <option value="select">--Select--</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Hyderabad">Hyderabad</option>
              </select>
              {cityErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>{cityErr}</div>
              )}
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
