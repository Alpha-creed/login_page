import React from 'react'
import { styled } from 'styled-components'
import Button from './Button';
import { logoutIcon } from '../assest/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';

const Logout = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const handleLogout = (e) =>{
    e.preventDefault();

    dispatch(logout())
  }

  return (
    <LogoutStyled>
      <h1>
          Welcome <span className='user_name' >{user.name} {logoutIcon}</span>
          <div className='btn'>
          <Button name={"Logout"} onClick={e=>handleLogout(e)}/>
          </div>
      </h1>
    </LogoutStyled>
  )
}

const LogoutStyled = styled.div`
left:0;
margin-top:-100px;
position:absolute;
text-align:center;
top:50%;
width:100%;
.btn{
    margin-top:20px;
}
`;
export default Logout
