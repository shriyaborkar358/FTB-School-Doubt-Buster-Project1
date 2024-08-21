import React,{useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Toaster,toast } from 'react-hot-toast';


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const loginNow = async () => {
    try {
      const response = await axios.post(`http://localhost:8000/login`, {
        email:email,
        password:password,
      });
      console.log(response)
    
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem('currentUser', JSON.stringify(response.data.data));
        toast.loading('Redirecting to dashboard...');
        setTimeout(()=>{
          window.location.href = '/';
        },3000)
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again.');
    }
            }
  return (<>
    <div>
      <h1>Login</h1>
      <form>
        <label>Username:</label>
        <input type="email" 
        value={email}
        placeholder='UserID'
        onChange={(e) => setEmail(e.target.value)} 
         />
        <br/>
        <label>Password:</label>
        <input type="password" 
        value={password}
        placeholder='Enter Your Password'
        onChange={(e) => setPassword(e.target.value)}
         />
        <br/>
        <button type="button" onClick={loginNow}>Login</button>
        <p>Don't have an account? <Link to="/signup">Register</Link></p>

      </form>
      <Toaster/>
    </div>
    
    </>
  )
}

export default Login