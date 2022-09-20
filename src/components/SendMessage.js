import { useState } from 'react';
import './SendMessage.css';
import { collection, addDoc, Timestamp } from "firebase/firestore"; 
import {db, storage, auth} from '../ChatConfig'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {MdSend} from 'react-icons/md';
import {FiPaperclip} from 'react-icons/fi';


function SendMessage({ scroll }) {
const [msg, setMsg] = useState("");
const [img, setImg] = useState(null);
const [url, setUrl] = useState("")

async function addMsg(e) {
  e.preventDefault();
  const { uid, photoURL } = auth.currentUser;
  const storageRef = ref(storage, 'images/');
  const uploadTask = uploadBytesResumable(storageRef, img);
 if (img !== null) {
  uploadTask.on('state_changed', 
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
      // Handle unsuccessful uploads
    }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setUrl(downloadURL);

      
        console.log('File available at', downloadURL);
      });
    }
  );
  if (url !== "") {     
  try { 
      const docRef = await addDoc(collection(db, "messages"), {
            img: url,
            id:  4,
            uid,
            photoURL,
            date: Timestamp.now()
          });
      console.log("Document written with ID: ", docRef.id);
      } catch (e) {
      console.error("Error adding document: ", e);
      }
  setImg(null);
  setMsg(""); }
    } 
if (msg !== "") {
  try { 
    const docRef = await addDoc(collection(db, "messages"), {
      text: msg,
      id:  3,
      uid,
      photoURL,
      date: Timestamp.now()
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
 
 } 
 setMsg("");
  scroll.current?.scrollIntoView({ behavior: 'smooth' })
}

 

   
  return (

<form onSubmit={addMsg} className="chat-form">

<div className='container-inputs-stuffs'>

    <div className='files-logo-cont'>
            <input
        type="file" id='fill'
        onChange={(e) => setImg(e.target.files[0])}
        style={{display: 'none'}}
      />
        <label htmlFor="fill"><FiPaperclip/></label>
    </div>
 
    <div className="group-inp">
        <textarea placeholder="Enter your message here"  value={msg} onChange={(e) => setMsg(e.target.value)} minLength="1" maxLength="1500"></textarea>
    </div>


    <button type='submit' className="submit-msg-btn">
        <MdSend className='submit-msg-btn'/>
    </button>
</div>

</form>
  );
}
export default SendMessage