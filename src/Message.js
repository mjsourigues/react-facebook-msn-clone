import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./Message.css";

function Message({message, username}) {
    const isUser = username === message.userName;

    return (
        <div className={`message ${isUser && 'message__user'}`}>
            {/* CSSS SOLO APLICABLE AL USUARIO LOGUEADO, PARA DIFERENCIARLO */}
            {console.log("Resultado"+ isUser)}
            <Card className={isUser ? "message__userCard" : "message_guestCard"}>
                <CardContent>
                    <Typography 
                        color="black" 
                        variant="h5"
                        component="h2"
                    >
                        {message.username}:{message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message
