
import React from 'react'
import { styled } from 'styled-components'

const Button = ({name,onClick}) => {
  return (
    <ButtonStyled onClick={onClick}>
      {name}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
        outline:none;
        border:none;
        cursor:pointer;
        transition:all .4s ease-in-out;
        background:black;
        color:white;
        padding:
        width:350px;
       padding:18px 120px;
       margin:8px 0;
       box-sizing:border-box;
       font-size:20px;
       
`;

export default Button
