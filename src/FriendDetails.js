import React from "react";
import { useParams } from "react-router";
import friendsData from "./FriendList";
const mystyle = {
    width: "100px",
    borderRadius: "50%"
  };
function FriendDetails(){
    const {id} = useParams();
    return (
        <div>
      
          <div className="users">
            <div className="container mt-2">
              <h1>Friends Details Page</h1>
    
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Phone</th>
                    <th>Email</th>
               
                  </tr>
                </thead>
                <tbody>
                  {
                    friendsData.filter((users)=>users.id===id).map((users) => (
                      <tr key={users.id}>
                        <td>{users.name}</td>
                        <td><img style={mystyle} src={users.imgURL} /></td>
                        <td>{users.phone}</td>
                        <td>{users.email}</td>
                      
    
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

export default FriendDetails;