import { useState } from "react";
import axios from "axios";
import UserForm from "./UserForm";

const CreateUser = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  const [userCreated, setUserCreated] = useState(false);

  const [errors, setErrors] = useState([]);

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setUserCreated(false);
    setErrors([]);
    axios
      .post("http://localhost:8000/api/users/new", user)
      .then((response) => {
        setUserCreated(true);
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
    <div>
      {errors.map((errorMessage, index) => (
        <div key={index}>Error: {errorMessage}</div>
      ))}
      {userCreated && <div>User has been successfully created</div>}

      <UserForm handleChange={handleChange} handleSubmit={handleSubmit} {...user} />
    </div>
  );
};

export default CreateUser;
