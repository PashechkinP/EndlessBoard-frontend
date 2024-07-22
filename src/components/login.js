import React from 'react';
import "./regform.css"
import {TextField, Typography, Button, Stack} from "@mui/material";
import {Link} from "react-router-dom";


const Login = () => {

  return (
   
    <div className='container'>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Войти на сайт</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите логин и пароль</Typography>
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
           <Stack spacing={2} direction="row" justifyContent={"flex-end"} >
            <Link to = '/'>
             <Button variant="contained">Войти</Button>
             </Link>
             <Link to = '/registration'>
             <Button variant="contained">Зарегистрироваться</Button>
             </Link>

          </Stack>
    </div>
  );
  };

export default Login;