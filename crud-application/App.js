
import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import Axois from 'axios'
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const addUser = ()=>{
      Axois.post('http://localhost:3001/api/insert',{
        name:name,
        email:email,
      }).then(()=>{
        alert("New user is Added!")
        console.log("user added")
      })
  }
  return (
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
  );
}

export default App;
