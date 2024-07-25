import React from 'react';
import "./regform.css"
import {TextField, Typography, Button, Stack} from "@mui/material";
import { useState } from "react";
import {Link} from "react-router-dom";

const Registration = () => {

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  return (
    <div className='container'>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Регистрация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите данные для регистрации</Typography>
            <TextField
                fullWidth={true}
                value={name1}
                margin='normal'
                label="Username"
                variant="outlined"
                placeholder="Введите ваш username"
                onChange={(e) => {
                  setName1(e.target.value);
              }}
            />
            <TextField
                type="password"
                value={name2}
                fullWidth={true}
                margin='normal'
                label="Password"
                variant="outlined"
                placeholder="Введите ваш пароль"
                onChange={(e) => {
                  setName2(e.target.value);
              }}
            />
            {/* <TextField
                type="password"
                fullWidth={true}
                margin='normal'
                label="Password"
                variant="outlined"
                placeholder="Повторите ваш пароль"
            /> */}
           <Stack spacing={2} direction="row" justifyContent={"flex-end"} >
           <Link to='/'>
             <Button variant="contained" onClick={
              ()=>fetch('http://localhost:8000/api/v1/products/userok', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({userokname: name1, userokpass: name2})
              })
              .then(res => res.json())
              .then(data => console.log('Успешно:', data))
              .catch(error => console.error('Ошибка:', error))
            }>Регистрация</Button>
            </Link>
          </Stack>
    </div>
  );
  };

export default Registration;