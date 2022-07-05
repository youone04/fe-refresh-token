import React from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Navbar() {
    let navigate = useNavigate();

    const handleLogout = async() => {
      try{

        await axios.delete('http://localhost:5000/logout');
        navigate('/')
      }catch(error){
        console.log(error)
      }

    }

  return (
    <div
      style={{
        width: "100%",
        height: 40,
        backgroundColor: "#9CB4CC",
        color: "white",
        padding: 5,
        display:'flex'
      }}
    >
      <div>Yudi Gunawan</div>

      <div style={{width: '90%', display:'flex',justifyContent:'right'}}>
        <p onClick={handleLogout} style={{margin: 5,cursor:'pointer'}}>LogOut</p>
        <p onClick={() => navigate("/register")} style={{margin: 5,cursor:'pointer'}}>Register</p>
      </div>
    </div>
  );
}

export default Navbar;
