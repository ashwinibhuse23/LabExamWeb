import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Users() {
 const  [users,setUsers] =useState([])

 useEffect(()=>{

    axios.get('http://localhost:3001/')
    .then(result => setUsers(result.data))
    .catch(error => console.log(error)) 

 }, [])
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rouded p-3">
        <Link to="/create" className='btn btn-success'>Add Tv showroom</Link>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Model Name</th>
              <th>Brand</th>
              <th>Price </th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
           {
            users.map(user =>(
                 <tr>
                    <td>{user.id}</td>
                    <td>{user.ModelName}</td>
                    <td>{user.Brand}</td>
                    <td>{user.Price}</td>
                    <td>{user.Size}</td>
                 
                    <td>
                    <Link to={`/update/${user._id}` }className='btn btn-success'>Update</Link>
                        <button className="btn btn-danger">Delete</button>

                    </td>
                </tr>

            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
