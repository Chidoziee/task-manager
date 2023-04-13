import React, { useState } from "react";
import Card from "../UI/Card";
import AddUser from "./AddUser";
import UserList from "./UserList";

const User = () => {
  const [data, setData] = useState(null)
  const [edit, setEdit] = useState()


  const userData = (enteredUserData) => {
   
    setData(enteredUserData)
    console.log(data);
  };

  const isEditing = (eData) => {
    setEdit(eData)
    console.log(eData);
  }
  return (
    <Card>
      <AddUser onGetUserData={userData} isEditing={edit} />
      <UserList data={data} isEditing={isEditing} />
    </Card>
  );
};

export default User;
