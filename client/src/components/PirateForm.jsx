import React, { useEffect, useState } from "react";
import axios from "axios";

const CreatePirate = (props) => {
  const [pirate, setPirate] = useState({
    name: "",
    img: "https://images.unsplash.com/photo-1594189683218-b5a9a346a43f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    treasures: 0,
    catch_phrase: "",
    position: "",
    peg_leg: true,
    eye_patch: true,
    hook_hand: true,
  });
  const [pirateCreated, setPirateCreated] = useState(false);
  const [errors, setErrors] = useState([]);
  const positions = [
    "First Mate",
    "Captain",
    "Boatswain",
    "Powder Monkey",
    "Quarter Master",
  ];

  function handleChange(event) {
    setPirate({
      ...pirate,
      [event.target.name]: event.target.value,
    });
  }

  function handleCheckBoxChange(event) {
    setPirate({
      ...pirate,
      [event.target.name]: event.target.checked ? true : false,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setPirateCreated(false);
    setErrors([]);
    axios
      .post("http://localhost:8080/api/pirates/new", pirate)
      .then((res) => {
        setPirateCreated(true);
      })
      .catch((err) => {
        const data = err.response.data;
        const errorMessages = [];
        if ("errors" in data) {
          for (let field in data.errors) {
            const validationError = data.errors[field];
            errorMessages.push(validationError.message);
          }
        }
        setErrors(errorMessages);
      });
  }

  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="row d-flex justify-content-center text-center">
        {errors.map((error, i) => {
          return (
            <div className="ms-5 alert alert-danger w-50 d-flex flex-column">
              <span key={i} className="ms-4 row">
                Error:{error}
              </span>
            </div>
          );
        })}
        {pirateCreated && (
          <div className="ms-5 alert alert-success w-50 d-flex flex-column">Pirate has been added successfully</div>
        )}
      </div>
      <form
        className="d-flex justify-content-around"
        onSubmit={handleSubmit}
      >
        <div className="col-4 m-4">
          <div className="row mb-3">
            <label className="form-label" htmlFor="">
              Name
            </label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="row mb-3">
            <label className="form-label" htmlFor="">
              Img Url
            </label>
            <input
              className="form-control"
              type="text"
              name="img"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="row mb-3">
            <label className="form-label" htmlFor="">
              # of treasures
            </label>
            <input
              className="form-control"
              type="number"
              name="treasures"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="row mb-3">
            <label className="form-label" htmlFor="">
              Pirate Catch Phrase
            </label>
            <input
              className="form-control"
              type="text"
              name="catch_phrase"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className=" m-4 col-4">
          <div className="row mb-3">
            <label htmlFor=""> Crew Position</label>
            <select
              className="form-select"
              name="position"
              id="position"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              {positions.map((pos, i) => {
                return (
                  <option key={i} value={pos}>
                    {pos}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="row mb-3">
            <label htmlFor="">Peg Leg</label>
            <input
              name="peg_leg"
              type="checkbox"
              onChange={(e) => {
                handleCheckBoxChange(e);
              }}
            />
          </div>
          <div className="row mb-3">
            <label htmlFor="">Eye Patch</label>
            <input
              name="eye_patch"
              type="checkbox"
              onChange={(e) => {
                handleCheckBoxChange(e);
              }}
            />
          </div>
          <div className="row mb-3">
            <label htmlFor="">Hook Hand</label>
            <input
              name="hook_hand"
              type="checkbox"
              onChange={(e) => {
                handleCheckBoxChange(e);
              }}
            />
          </div>
          <div className="row mb-3">
            <input
              type="submit"
              value="Add Pirate"
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePirate;
