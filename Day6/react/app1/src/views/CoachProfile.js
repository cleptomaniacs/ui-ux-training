import { useState } from "react";

function CoachProfile() {
  const [inputField, setInputField] = useState({
    name: "",
    password: "",
    dob: "",
    gender: "male",
    phoneNumber: "",
    speciality: "",
  });
  const setValue = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };
  const submitData = (e) => {
    e.preventDefault();
    console.log("Data: ", inputField);
  };
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="p-4 bg-dark rounded shadow">
          <h2 className="text-light text-center">Life coach profile</h2>
          <form className="row g-2">
            <div className="col-lg-6">
              <label className="form-label text-light">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                onChange={(event) => setValue(event)}
                value={inputField.name}
                name="name"
                required
              />
            </div>
            <div className="col-lg-6">
              <label className="form-label text-light">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                onChange={(event) => setValue(event)}
                value={inputField.password}
                required
              />
            </div>
            <div className="col-lg-6">
              <label className="form-label text-light">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                name="dob"
                placeholder="Enter your date of birth"
                onChange={(event) => setValue(event)}
                value={inputField.dob}
                required
              />
            </div>
            <div className="col-lg-6">
              <label className="form-label text-light">Gender</label>
              <br />
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineCheckbox1"
                  value="male"
                  onChange={(event) => setValue(event)}
                  checked={inputField.gender === "male"}
                />
                <label className="form-check-label text-light">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineCheckbox2"
                  value="female"
                  onChange={(event) => setValue(event)}
                  checked={inputField.gender === "female"}
                />
                <label className="form-check-label text-light">Female</label>
              </div>
            </div>
            <div className="col-lg-6">
              <label className="form-label text-light">Phone Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your phone number"
                name="phoneNumber"
                onChange={(event) => setValue(event)}
                value={inputField.phoneNumber}
                required
              />
            </div>
            <div className="col-lg-6">
              <label className="form-label text-light">Speciality</label>
              <input
                type="text"
                name="speciality"
                className="form-control"
                placeholder="Enter your speciality"
                onChange={(event) => setValue(event)}
                value={inputField.speciality}
                required
              />
            </div>
            <div className="col-lg-12">
              <button
                className="btn btn-success px-5"
                onClick={(event) => submitData(event)}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CoachProfile;
