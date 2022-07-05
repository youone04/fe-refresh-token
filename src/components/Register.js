import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    try {

      await axios.post("http://localhost:5000/users", {
        name,
        email,
        password,
        confirmPassword,
      });
      navigate("/")
    } catch (error) {
      if(error.response){
        alert(error.response.data.msg)
      }else{
        alert('Kesalahan Server!')
      }
  
      
    }
  };

  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        height: 400,
        width: 300,
      }}
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type={"text"}
        placeholder="nama"
      />
      <br /> <br />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type={"email"}
        placeholder="Email"
      />
      <br /> <br />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type={"password"}
        placeholder="*****"
      />
      <br /> <br />
      <input
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type={"password"}
        placeholder="*****"
      />
      <br /> <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
