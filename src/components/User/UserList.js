import React, { useEffect, useState } from "react";
import Users from "./People";
import "./User.css";
const fakeUsers = [
  {
    id: 1,
    name: "John",
    job: "Teacher",
    age: 34,
  },
  {
    id: 2,
    name: "Mark",
    job: "Policeman",
    age: 36,
  },
  {
    id: 3,
    name: "Frank",
    job: "Banker",
    age: 31,
  },
];

const UserList = ({ data, isEditing }) => {
  const [users, setUsers] = useState(fakeUsers);

  const [user, setUser] = useState(null);

  useEffect(() => {
    setUsers((prevData) => {
      return [...prevData, { ...data, id: Math.random().toString() }];
    });
  }, [data]);

  const deleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  const upDateUser = (id) => {};

  const getEditing = (editing) => {
    isEditing(editing);
    console.log(editing);
  };
  console.log(users);
  return (
    <div className="user">
      {users.map((user) => {
        return (
          <Users
            key={user.id}
            getEditing={getEditing}
            deleteUser={deleteUser}
            fakeUser={user}
          />
        );
      })}
    </div>
  );
};

export default UserList;
