import React from 'react'

export default function Login(props) {
  return (
    <div className='bg-secondary'>
      <h1 className='text-center'>LOGIN</h1>
      <div className='text-center'>
        <p>User Name</p>
        <input className='w-75' type="text" />
        <p>Password</p>
        <input className='w-75' type="text" />
        <br />
        <button className='btn btn-success'>Login</button>
      </div>

    </div>
  )
}
