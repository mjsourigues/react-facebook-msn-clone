import './App.css';
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import FormControl from '@mui/material/FormControl';
import { Input, InputLabel } from '@mui/material';
import Message from './Message';
import db from "./firebase";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = 
  useState([]);
  const [userName, setUsername] = useState("");

  useEffect(()=> {
    db.collection("messages").onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()));
    })
  },[])

  useEffect(() => {
    setUsername (prompt("Ingresa tu nombre para comenzar:"));
  }, [])
 
  const sendMessage = (event) =>{
    event.preventDefault();
    setMessages([...messages,{userName: userName, text: input}]);
    setInput("");
  }

  return (
    <div className="App">
      <h1>FACEBOOK MSN</h1>
      <h2>Bienvenido {userName}</h2>

      <form>
          <FormControl>
            <InputLabel>Ingreso de mensaje 📝</InputLabel>
            <Input value={input} onChange={event=> setInput(event.target.value)}/>
            <Button disabled={!input} variant="contained" endIcon={<SendIcon />} type="submit" onClick={sendMessage}>Enviar</Button>
          </FormControl>
      </form>
      {
        messages.map(message => (
          <Message username={userName} message={message} />
        ))
      }
    </div>
  );
}

export default App;
