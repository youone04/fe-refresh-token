import React,{useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {

      await axios.post("http://localhost:5000/login", {
        email,
        password,
  
      });
      navigate("/dashboard")
    } catch (error) {
      if(error.response){
        alert(error.response.data.msg)
      }else{
        alert('Kesalahan Server!')
      }
  
      
    }
  };

  return (
    <div style={{marginLeft:'auto',marginRight:'auto', height: 400,width: 300}}>
        <input  value={email}
        onChange={(e) => setEmail(e.target.value)} type={'email'} placeholder="Email" />
        <br/> <br/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type={'password'} placeholder="*****" />
        <br/> <br/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login