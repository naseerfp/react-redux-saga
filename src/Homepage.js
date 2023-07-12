import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector,useDispatch  } from "react-redux";
import * as action from "./action/index"
const mystyle = {
    width: "100px",
    borderRadius: "50%"
};
function Homepage() {
    const dispatch = useDispatch();
    const users = useSelector((state)=>state.user);
    useEffect(()=>{
        dispatch(action.getData())
       },[]);
    return (
        <div>
            <div className="Homepage">
                <div className="container mt-2">




                    <table className="table">
                        <thead>
                            <tr >
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.filter((users) => users.id == 1).map((users) => (
                                    <tr key={users.id}>
                                        <td>{users.name}</td>
                                        <td>{users.phone}</td>
                                        <td>{users.email}</td>


                                    </tr>
                                )
                                )
                            }
                        </tbody>
                    </table>

                    <Link to="/friends">
                        <button type="button" className="btn btn-primary btn-lg btn-block"> Show More Freinds</button>

                    </Link>
                  



                </div>
            </div>

        </div>
    )
}

export default Homepage;