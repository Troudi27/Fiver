import { useState } from "react";
import "./Login.scss";
import axios from "axios";

function Login() {

const[username,setUsername] = useState("")
const[password,setPassword] = useState("")
const[error,setError] = useState(null)

const handelSubmit = async (e)=>{
  e.preventDefault()

try {
  const res = await axios.post("http://localhost:8800/api/auth/login",{
    username , 
    password,
  });
  console.log(res.data)
} catch (err) {
  setError(err.data);
  console.log(err)
}
};



  return (
    <div className="login">
      <form onSubmit={handelSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input name="username" type="text" placeholder="Troudi27" onChange={e=>setUsername(e.target.value)}/>
        <label htmlFor="">Password</label>
        <input name="password" type="password" onChange={e=>setPassword(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;