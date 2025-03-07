import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd'; // Import message for notifications

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!input.email || !input.password) {
      message.error("Please enter email and password.");
      return;
    }

    try {
      const api = `http://localhost:3000/user/?email=${input.email}&password=${input.password}`;
      const res = await axios.get(api);

      if (res.data.length === 0) {
        message.error("Invalid Email or Password!");
      } else {
        message.success("Login Successful");
        localStorage.setItem("name", res.data[0].name);
        navigate("/home");
      }
    } catch (error) {
      console.error("Login Error:", error);
      message.error("An error occurred while logging in.");
    }
  };

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
      <div 
        style={{
          width: '400px',
          padding: '40px',
          border: '2px solid black',
          borderRadius: '10px',
          backgroundColor: 'white',
        }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email"
              placeholder="Enter email"
              style={{ width: '100%' }} 
              onChange={handleInput} 
              name="email" 
              value={input.email || ""}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password"
              style={{ width: '100%' }} 
              onChange={handleInput} 
              name="password" 
              value={input.password || ""}
            />
          </Form.Group>
          <Button variant="dark" style={{ width: '100%' }} onClick={handleSubmit}>
            Login
          </Button>
        </Form>
        <br />
        <h6 onClick={()=>{navigate("/Ragister")}}>Create new account :<span style={{cursor:"pointer",textDecoration:"underline",color:"blue"}}>Register</span></h6>
      </div>
    </div>
  );
};

export default Login;
