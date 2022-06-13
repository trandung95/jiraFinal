import React, { useState } from 'react';
import { Prompt } from 'react-router-dom';
import { Col, Row, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default function Login(props) {

  return (
    <form className='container' style={{ height: window.innerHeight }}>
      <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: window.innerHeight }}>
        <h1 className='text-center'>LOGIN PAGE</h1>

        <div className='d-flex'>
          <Input name='userName' size='large' placeholder='Enter your username here..' prefix={<UserOutlined />} />
        </div>

        <div className='d-flex mt-3'>
          <Input type="password" name='password' size='large' placeholder='Enter password here..' prefix={<LockOutlined />} />
        </div>
        <div className="mt-3 d-flex">
          <Button type="prmary" shape="round" size={'medium'}>Login</Button>
        </div>
      </div>
    </form>
  )
}
