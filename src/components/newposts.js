import React from 'react';
import { useRef, Component } from 'react'
import "./newposts.css"
import {TextField, Typography, Button, Stack} from "@mui/material";
import { useState } from "react";
import {Link} from "react-router-dom";
const NewPosts = () => {

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");

  const valueRef1 = useRef('');
  const valueRef2 = useRef('');
  const valueRef3 = useRef('');

  return (
    
    <div className='container'>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Создать новую запись</Typography>
            <TextField
            inputRef={valueRef1}
                fullWidth={true}
                value={name1}
                margin='normal'
                label="Название"
                variant="outlined"
                placeholder="Введите название"
                onChange={(e) => {
                  setName1(e.target.value);
              }}
            />
            <TextField
            inputRef={valueRef2}
                fullWidth={true}
                value={name2}
                margin='normal'
                label="Описание"
                variant="outlined"
                placeholder="Введите описание"
                onChange={(e) => {
                  setName2(e.target.value);
              }}
            />
            <TextField
            inputRef={valueRef3}
                fullWidth={true}
                value={name3}
                margin='normal'
                label="href on img omg"
                variant="outlined"
                placeholder="Введите ссылку на картинку"
                onChange={(e) => {
                  setName3(e.target.value);
              }}>
                
              </TextField>
              <img
              src={name3}
              height="200"/>
           <Stack spacing={2} direction="row" justifyContent={"flex-end"} >
           <Link to='/'>
             <Button variant="contained"
             onClick={
              ()=>fetch('http://localhost:8000/api/v1/products/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name: name1, description: name2, price: name3})
              })
              .then(res => res.json())
              .then(data => console.log('Успешно:', data))
              .catch(error => console.error('Ошибка:', error))
            }
             >Добавить</Button>
             
          </Link>

          </Stack>
    </div>
  );
  };

export default NewPosts;