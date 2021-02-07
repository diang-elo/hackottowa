import React from 'react'

import { useRef, useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { Link } from 'react-router-dom'; 



firebase.initializeApp({
    apiKey: "AIzaSyDrxyMszMoV0JPbXZ38V3cd2il2LhC4I50",
    authDomain: "chat-app-c9529.firebaseapp.com",
    projectId: "chat-app-c9529",
    storageBucket: "chat-app-c9529.appspot.com",
    messagingSenderId: "623526542480",
    appId: "1:623526542480:web:8dfeba2b71a92e6040ec15",
    measurementId: "G-RYV3H9ZKR1"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();









function Chat() {
    const [user] = useAuthState(auth);
    return (
        <div className="mainApp">
          
      <header>
        <h1>Chat Room</h1>
        <SignOut />
      </header>

      <section >
        {user ? <ChatRoom /> : <SignIn />}
      </section>


      <div className="home_button">
            <Link to="/" >Home</Link>
            </div>
      </div>
    )
}

function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        <p>A place to relax and chat</p>
      </>
    )
  
  }
  
  function SignOut() {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }
  
  
  function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
        <button type="submit" disabled={!formValue}>⭐</button>
  
      </form>
    </>)
  }
  
  
  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img className="profileIMG" src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <p>{text}</p>
      </div>
    </>)
  }



export default Chat
