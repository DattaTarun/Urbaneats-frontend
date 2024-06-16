import { useCreateMyUser } from '@/Api/MyUserApi';
import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useRef } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function AuthCallbackPage() {
    const navigate=useNavigate();
    const {user}=useAuth0();
    const{createUser}=useCreateMyUser()
    const hasCreatedUser=useRef(false); 
    useEffect(()=>{
        if(user?.sub && user?.email && !hasCreatedUser.current)
            {
                createUser({auth0Id:user.sub, email:user.email})
                hasCreatedUser.current=true;
            }
            navigate("/")
    },[createUser,navigate,user])
  return (
    <div>
      
    </div>
  )
}

export default AuthCallbackPage
