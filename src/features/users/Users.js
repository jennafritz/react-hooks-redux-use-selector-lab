import React from "react";
import {useSelector} from 'react-redux'
import usersReducer from "./usersSlice";


function Users() {
  const users = useSelector(state => state.users)
  const numUsers = useSelector(state => state.users.length)
  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {users.map(user => <li>{user.username}</li>)}
        {/* In addition, display the total number of users curently in the store */}
        {numUsers > 0 ?
          <li>Total Users: {numUsers}</li>
        : null}
      </ul>
    </div>
  );
}

export default Users;
