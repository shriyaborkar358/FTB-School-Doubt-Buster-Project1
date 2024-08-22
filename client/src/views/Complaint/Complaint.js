import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import './Complaint.css'
import GreetingCard from './../../components/dynamicGreet/greetCard'
function Complaint() {
  return (
    <div>
      <GreetingCard />
      <h1 className='text-center' style={{marginTop: '100px'}}>Add Your Complaint here</h1>
      <div className='complaint-container'>
        <div className='complaintForm'style={{width: '80%', marginLeft: '-30%', marginRight: '-40%'}}>
          <form className=' col-md-6 col-sm-12 registerForm' >
            <div className='md-5'>
              <label className="form-label">Full Name:</label>
              <input
                className="form-control"
                type="text"
              />
              <label className='form-label'>Email:</label>
              <input
                type="email"
                className="form-control"
              />
              <label className='form-label'>Mobile No.:</label>
              <input
                type="number"
                className="form-control"
              />
              <label className='form-label'>Address:</label>
              <textarea
                rows={2}
                cols={10}
                className="form-control"
              />
              <label className='form-label'>Set Password:</label>
              <input
                type="password"
                className="form-control"
              />
              <label className='form-label'>Role:</label>
              <select
                className="form-control"

              >
                <option>select role</option>
                <option value="student" selected >Student</option>
                <option value="teacher">Teacher</option>
                <option value="parent">Parent</option>
                <option value="admin">Principle</option>
              </select>
              <button type="submit"
                className='btn mt-5 btn-light position-absolute translate-middle start-50 '
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <div>
          <h2>hello world....we are here to help you. </h2>
        </div>
      </div>
    </div>
  )
}

export default Complaint