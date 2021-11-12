import React, { forwardRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./Message.css";


const Message = forwardRef(({message, username}, ref) => {
    const isUser = username === message.username;

    return (
        <>
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            {/* CSSS SOLO APLICABLE AL USUARIO LOGUEADO, PARA DIFERENCIARLO */}
            {console.log("Resultado"+ isUser)}
            <Card className={isUser ? "message__userCard" : "message_guestCard"}>
                <CardContent>
                    <Typography 
                        color="black" 
                        variant="h5"
                        component="h2"
                    >
                        {!isUser && `${message.username || "Usuario desconocido"}: `}{message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
        </>
    )
})

export default Message
