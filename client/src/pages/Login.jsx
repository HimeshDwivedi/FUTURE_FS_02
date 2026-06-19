import {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

function Login(){

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  const navigate=useNavigate()

  const handleLogin=async(e)=>{
    e.preventDefault()

    try{
      const res=await axios.post(
        "https://crm-backend-1zao.onrender.com/api/auth/login",
        {
          email,
          password
        }
      )

      localStorage.setItem("token",res.data.token)

      navigate("/")
    }
    catch(error){
      alert("Invalid Credentials")
    }
  }

  return(
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login