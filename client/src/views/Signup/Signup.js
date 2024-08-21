import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

function Signup() {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    mobile: '',
    address: '',
    password: '',
    role: '',
  });
  const navigate = useNavigate();
  const signup = async () => {
    const { fullName, email, mobile, address, password, role } = user;
    if (!fullName || !email || !mobile || !address || !password) {
      toast.error('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8000/signup`, {
        fullName,
        email,
        mobile,
        address,
        password,
        role,
      });

      if (response.data.success) {
        toast.success(response.data.message || 'Signup successful!');
        setUser({
          fullName: '',
          email: '',
          mobile: '',
          address: '',
          password: '',
          role: '',
        });
        setTimeout(() => { navigate('/'); }, 1000)
      } else {
        toast.error(response.data.message || 'Signup failed.');
      }
    } catch (error) {
      toast.error('An error occurred during signup.');
    }
  };

  return (
    <>
      <Toaster />
      <div className="container">
        <h1>Register</h1>
        <form>
          <label>Full Name:</label>
          <input
            type="text"
            value={user.fullName}
            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
          />
          <br />
          <br />
          <label>Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <br />
          <label>Mobile No.:</label>
          <input
            type="number"
            value={user.mobile}
            onChange={(e) => setUser({ ...user, mobile: e.target.value })}
          />
          <br />
          <label>Address:</label>
          <textarea
            rows={5}
            cols={10}
            value={user.address}
            onChange={(e) => setUser({ ...user, address: e.target.value })}
          />
          <br />
          <label>Set Password:</label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <br />
          <label>Role:</label>
          <select
            value={user.role}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
          >
            <option value="student" selected>Student</option>
            <option value="teacher">Teacher</option>
            <option value="parent">Parent</option>
            <option value="admin">Principle</option>
          </select>
          <br />
          <br />
          <button type="submit" onClick={signup}>
            Register
          </button>
        </form>
        <span>Do You Have Alredy Account?<Link to={'/login'}>Login </Link></span>

      </div>
    </>
  );
}

export default Signup;