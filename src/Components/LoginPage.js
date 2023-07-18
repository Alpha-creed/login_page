import React, { useState } from 'react'
import styled from 'styled-components'
import { loginIcon } from '../assest/icons';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

export const LoginPage = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
      e.preventDefault();

      dispatch(
        login({
          name:name,
          email:email,
          password:password,
          loggedIn:true,
        })
      )
    }


  return (
    <FormStyled onSubmit={e=>handleSubmit(e)}>
      <h1>Login Here {loginIcon}</h1>
      <div className='inputs'>
      <input 
        type="name" 
        placeholder='Name '
        value ={name}
        onChange={(e)=>setName(e.target.value)}
        />
        </div>
        <div className='inputs'>
      <input 
        type="email" 
        placeholder='Email '
        onChange={(e)=>setEmail(e.target.value)}
        />
        </div>
        <div className='inputs'>
      <input 
        type="password" 
        placeholder='Password'
        onChange={(e)=>setPassword(e.target.value)}
        />
        </div>
        <div>
            <Button  type="submit" name={"SUBMIT "}/>
        </div>
    </FormStyled>
  ) 
}

const FormStyled = styled.form`
    left:0;
    margin-top:-100px;
    position:absolute;
    text-align:center;
    top:50%;
    width:100%;
    input{
       width:350px;
       padding:12px 20px;
       margin:8px 0;
       box-sizing:border-box;
       font-size:14px;
    }
`;

export default LoginPage
