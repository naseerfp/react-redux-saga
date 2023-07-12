import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector,useDispatch  } from "react-redux";
import * as action from "./action/index"

const mystyle = {
  width: "100px",
  borderRadius: "50%"
};

function FriendsDispaly() {
  const dispatch = useDispatch();
  const users = useSelector((state)=>state.user);
//const CustomLoader = useSelector((state)=>state.fetching);
//console.log(CustomLoader);
  useEffect(()=>{
    dispatch(action.getData())
   },[]);
 //console.log(users);
  return (
    <div>
      <div className="users">
        <div className="container mt-2">
          <h1>Friends List</h1>
  
          <table className="table">
            <thead>
              <tr>
                {/* <th>ID</th> */}
                
                <th>Name</th>
           
                <th>Phone</th>
                <th>Email</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {
               
               users.map((users) => (
                  <tr key={users.id}>

                    {/* <td>{users.id}</td> */}
                    <td>{users.name}</td>
                 
                    <td>{users.phone}</td>
                    <td>{users.email}</td>
                    <td><Link to={`/details/${users.id}`}>View Details</Link></td>

                  </tr>
                )
                )
              }
            </tbody>
          </table>
          
        </div>

      </div>
    </div>
  )
}

export default FriendsDispaly;