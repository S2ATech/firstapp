import React from 'react';
import Chat from '../components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../ChatConfig';
import Login from './Login';

const Messages = () => {
  const [user] = useAuthState(auth)
  return (
    <>
   {user ? <Chat /> : <Login />} 
    </>
  );
}

export default Messages