
import React from "react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from "./FormContainer";
import {toast,ToastContainer} from 'react-toastify';
import { useRegisterMutation } from "../apiSlice/apiSlice.js";

const RegisterScreen = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setconfirmPassword] = useState('');

    const navigate = useNavigate();
    const register = useRegisterMutation();

    const submitHandler = async (e)=>{
        e.preventDefault();
        if(password !== confirmPassword){
            console.log("not matched")
            toast.error('password do not match');
        }else{
            try{
                const res = await register({name,email,password}).unwrap();
                if(res){
                    navigate('/')
                }
            }catch(err){
                toast.error(err?.data?.message || err.error);
            }
        }
    }


  return (
    <FormContainer>
        <h1>Sign Up</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group className="my-2" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                type="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2" controlId="confirmPassword">
                <Form.Label>ConfirmPassword</Form.Label>
                <Form.Control
                type="password"
                placeholder="Enter ConfirmPassword"
                value={confirmPassword}
                onChange={(e)=>setconfirmPassword(e.target.value)}
                ></Form.Control>
            </Form.Group>

            {/* {isLoading && <Loader/>} */}

            <Button type="submit" variant="primary" className="mt-3 ">
                Sign In
            </Button>
            <ToastContainer />
            <Row className="py-3">
                <Col>
                Altready have an account? <Link  to='/login'>Login</Link> 
                </Col>
            </Row>
        </Form>
    </FormContainer>
  )
}

export default RegisterScreen
