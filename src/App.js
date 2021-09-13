
import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import Axios from 'axios'



function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  //saving users in array 
  const [UsersList,setUsersList] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      setUsersList(response.data)
    //console.log(response.data)
    })
  },[])

  const addUser = ()=>{
      Axios.post('http://localhost:3001/api/insert',{
        name:name,
        email:email,
      }).then(()=>{
        console.log("user added")
      })
       //updating frontend page list
      setUsersList([
        ...UsersList,
        {name:name,email:email},
      ])
  }
  const deleteUser =(id)=>{
    Axios.delete("http://localhost:3001/api/delete/"+id);
    setUsersList(
      UsersList
    )
  }

  return (
    <div>
    <div className="App">
        <h1>CRUD Application - Lina Zaatreh</h1>
        <div >
        <div className="update">
          <label>Name:</label>
          <input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        
        <div className="update">
          <label>Email:</label>
          <input
            type="text"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
          <button onClick={addUser}>ADD</button>
          
         
       
        </div>
        
    </div>
    <div className="title">
      <h1>User</h1>
      <h1>Email</h1>
    </div>
    
    { UsersList.map(
            (val)=>{
            return (
              <div className="row"> 
                <div className="items">
                  <lable>{val.name}</lable>
                </div>
                <div className="items">
                  <lable> {val.email}</lable>
                </div>
                <button onClick={()=>{
                  deleteUser(val.id)
                  }
                }>DELETE USER</button>

             </div> 
            );
           }
          )}
    </div>
  );
}

export default App;
