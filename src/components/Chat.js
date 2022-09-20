import React, {useEffect, useState,useRef} from 'react';
import SendMessage from './SendMessage';
import './Chat.css';
import {db,auth} from '../ChatConfig';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import {FaUserFriends} from 'react-icons/fa';

function Chat() {
 const scroll = useRef()
 const [msgs, setMsgs] = useState([]);
 useEffect(() => {
    const unsub = onSnapshot(query(collection(db, "messages"),orderBy("date", "asc")),
        (snapShot) => {
          let list = [];
          snapShot.docs.forEach((doc) => {
            list.push(doc.data());
          });
          setMsgs(list);
        },
        (error) => {
          console.log(error);
        }
      );
  
      return () => {
        unsub();
      };
    }, []);





    return (
 <div className='chat'>
<div className='chnav-top'>
    <div className='location'>
        <FaUserFriends/>
        <p>Room</p>
    </div>
    <div className='utilisateur'>
        <p>Bproo Devs</p>
        <p>Room</p>
    </div>
    <div className='logos-call'>
    </div>
</div>
<div className="chatscroll">
<div ref={scroll} className="conversation">
    {msgs.map(({img,text,photoURL,uid},index) => {
                return (
<div key={index}>
    {text && <div className={uid == auth.currentUser.uid? 'talk right': 'talk left'}>
         <p>{text}</p>
        <img className='avatar' src={photoURL}/>
    </div>}
    {img && <div className={uid == auth.currentUser.uid? 'talk right': 'talk left'}><img className='cvimg' src={img} alt="" /><img className='avatar' src={photoURL}/></div>}
  </div>
 );})}
 <div ref={scroll} ></div>  
</div>
</div>
<SendMessage scroll={scroll} />
   </div>
    )
}

export default Chat