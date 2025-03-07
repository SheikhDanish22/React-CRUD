import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { message } from 'antd';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';

import {  useNavigate } from 'react-router-dom';

const Registration = () => {

 
   const [input, setInput]= useState({});
   const navigator=useNavigate();


   const handleinput=(e)=>{
     let name= e.target.name;
     let value=e.target.value;
     
     setInput(values=>({...values,[name]:value}))
   }
 
   const handleSubmit=()=>{
     let api="http://localhost:3000/user";
     axios.get(api,input).then((res)=>{
       message.success("data inserted");
       console.log(input)
       navigator("/Login")
     })
   }


  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
      }}
    >
      <div style={{ width: '400px', padding: '40px', border: '2px solid black', borderRadius: '10px', backgroundColor: 'white' }}>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Enter your Name</Form.Label>
            <Form.Control type="text" style={{ width: '100%' }} name='name'  value={input.name} onChange={handleinput}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" style={{ width: '100%' }} name='email'  value={input.email} onChange={handleinput}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupMobile">
            <Form.Label>Enter your mobile number</Form.Label>
            <Form.Control type="number" style={{ width: '100%' }} name='number'  value={input.number} onChange={handleinput}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' style={{ width: '100%' }} value={input.password} onChange={handleinput}/>
          </Form.Group>
          <Button variant="dark" style={{ width: '100%' }} onClick={handleSubmit}>Register</Button>
        </Form>
        <br/>
        <h6 onClick={()=>{navigator("/Login")}}>Alredy Account :<span style={{cursor:"pointer",textDecoration:"underline",color:"blue"}}>Login</span></h6>
      </div>
    </div>
  );
};

export default Registration;
