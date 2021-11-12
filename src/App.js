import './App.css';
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import FormControl from '@mui/material/FormControl';
import { Input} from '@mui/material';
import Message from './Message';
import db from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = 
  useState([]);
  const [username, setUsername] = useState("");

  useEffect(()=> {
    db.collection("messages")
    .orderBy("timestamp","desc")
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  },[])

  useEffect(() => {
    setUsername (prompt("Ingresa tu nombre para comenzar:"));
  }, [])
 
  const sendMessage = (event) =>{
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  }

  return (
    <div className="App">
      <img classname="App__logo" src="https://image.flaticon.com/icons/png/512/1000/1000862.png" height="80px" alt="Logo MSN"/>
      <h1>MSN</h1>
      <h2>Bienvenido {username}</h2>

      <form className="app__form">
          <FormControl className="app__formControl">
            <Input className="app__input" placeholder="Ingrese mensaje 📝" value={input} onChange={event=> setInput(event.target.value)}/>
            <Button className="app__iconButton" disabled={!input} variant="contained" endIcon={<SendIcon />} type="submit" onClick={sendMessage}>Enviar</Button>
          </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
