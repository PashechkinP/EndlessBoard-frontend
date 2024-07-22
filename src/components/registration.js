import React from 'react';
import "./regform.css"
import {TextField, Typography, Button, Stack} from "@mui/material";

const Registration = () => {


  return (
    <div className='container'>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Регистрация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите данные для регистрации</Typography>
            <TextField
                fullWidth={true}
                margin='normal'
                label="Username"
                variant="outlined"
                placeholder="Введите ваш username"
            />
            <TextField
                type="password"
                fullWidth={true}
                margin='normal'
                label="Password"
                variant="outlined"
                placeholder="Введите ваш пароль"
            />
            <TextField
                type="password"
                fullWidth={true}
                margin='normal'
                label="Password"
                variant="outlined"
                placeholder="Повторите ваш пароль"
            />
           <Stack spacing={2} direction="row" justifyContent={"flex-end"} >
             <Button variant="contained">Регистрация</Button>
          </Stack>
    </div>
  );
  };

export default Registration;