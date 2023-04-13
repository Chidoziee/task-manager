import React, { useState } from "react";
import Card from "../UI/Card";
import "./People.css";
import { BsFillTrash2Fill,  } from "react-icons/bs";
import {  BiEditAlt } from "react-icons/bi";

const People = ({ fakeUser, deleteUser, getEditing }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { name, job, age, id } = fakeUser;

  const editingHandler = () => {
    setIsEditing(true);
    getEditing(isEditing);
  };
  return (
    <Card style={{ width: "100%", backgroundColor: "white" }}>
      <div className="container">
        <div>
          <span>Name: {name}</span>
          <span>Job: {job}</span>
          <span>Age: {age}</span>
        </div>
        <div>
          <BsFillTrash2Fill
            color="red"
            style={{ cursor: "pointer", marginRight: 5, padding: 2 }}
            onClick={deleteUser.bind(this, id)}
          />
          <BiEditAlt
            color="green"
            style={{ cursor: "pointer", padding: 2 }}
            onClick={editingHandler}
          />
        </div>
      </div>
    </Card>
  );
};

export default People;
