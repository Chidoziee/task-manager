import { useState } from "react";
import { toast } from "react-toastify";

import Button from "../UI/Button";
import Input from "../UI/Input";
import "./AddUser.css";
const AddUser = ({ onGetUserData, isEditing }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredJob, setEnteredJob] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const enteredJobHandler = (event) => {
    setEnteredJob(event.target.value);
  };
  const enteredAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length < 1) {
      toast.error("Name can not be empty!");
      return;
    }
    if (enteredJob.trim().length < 1) {
      toast.error("Job can not be empty!");
      return;
    }
    if (enteredAge.trim().length < 1 || +enteredAge < 0) {
      toast.error("Put in a Valid age (> 0)");
      return;
    }

    const enteredUserData = {
      name: enteredName,
      job: enteredJob,
      age: enteredAge,
    };

    onGetUserData(enteredUserData);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input type="text" label="Name" onChange={enteredNameHandler} />
      <Input type="text" label="Job" onChange={enteredJobHandler} />
      <Input type="number" label="Age" onChange={enteredAgeHandler} />
      <Button className="btn">{isEditing ? "Edit" : "Add"}</Button>
    </form>
  );
};

export default AddUser;
