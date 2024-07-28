import React, { useState, useContext } from 'react'
import "./regform.css"
import {TextField, Typography, Button, Stack} from "@mui/material";
import {Link} from "react-router-dom";
import { useEffect } from 'react';
import { SmartButtonOutlined } from '@mui/icons-material';
import { AuthContext } from './AuthContext';



function Login({auth}) {


  const [showUsers, setShowUsers] = useState([]);
  const [offset, setOffset] = useState(0);   
  const [finduser, setFinduser] = useState('');  


  // переменная для смещения подгрузки новых постов
  document.addEventListener("scroll", scrollListener);

  useEffect(() => {  // то что должно сделаться при первом запуске так как указано []

    let url = new URL("/api/v1/products/login", "http://localhost:8000");  // конструктор URL адресов
    console.log(`Request! Offset ${offset}`)
    url.searchParams.set('offset', offset);
    let xhrFirstReq = new XMLHttpRequest();
    xhrFirstReq.open('GET', url);
    xhrFirstReq.setRequestHeader("Content-Type", "application/json")
    xhrFirstReq.responseType = 'json';
    xhrFirstReq.send();
    xhrFirstReq.onreadystatechange = function () {     // если не пашет выводить в консоль console.log
      if (xhrFirstReq.readyState != 4) return;
      let responseFirst = xhrFirstReq.response;
      console.log(responseFirst);
      setShowUsers([...showUsers, ...responseFirst]);
    }
  }, [offset]);

  function scrollListener(e) {
    console.log(`Sroll detected! ${window.scrollY + 2} ${document.body.offsetHeight - window.innerHeight}`)
    // if (window.scrollY + 2 > document.body.offsetHeight - window.innerHeight) {
    //   setOffset(offset + 25)
    // }
  }

  showUsers.map((userki) => <li>{userki.userokname} {userki.userokpass}</li>); // id обязательно надо для reacta

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [Name, SetName] = useState("");
  const [Password, SetPassword] = useState ("");
   
  const handleFilter = (event)=>{
    const value = event.target.value;
    const filtered = showUsers.filter(user=>user.userokname.includes(`${finduser}`));
    setFilteredUsers(filtered);
    console.log(filtered); //мб можно использовать уже существующий showUsers[]
    console.log(filtered[0].userokname);
    console.log(filtered[0].userokpass);

    if (filtered[0].userokname === finduser && filtered[0].userokpass === Password) {
      auth(true);
      // document.location.href='http://localhost:3000/';
    }
    else{
      console.log('Sasai')  // хорошо бы норм вывод об ошибке сделать
    }
  }
  
  return (  
   // Перенести функционал на кнопку "войти", убрать лишнее поле, замутить авторизацию на удаление
    <div className='container'>      
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'></Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите логин и пароль</Typography>
            <TextField
                fullWidth={true}
                value={finduser}
                margin='normal'
                label="Username"
                variant="outlined"
                placeholder="Введите ваш username"
                onChange={(e) => {
                setFinduser(e.target.value);}}
            />
                
            
            <TextField
                type="password"
                fullWidth={true}
                margin='normal'
                value={Password}
                label="Password"
                variant="outlined"
                placeholder="Введите ваш пароль"
                onChange={(e) => {
                SetPassword(e.target.value);}}
            />
           <Stack spacing={2} direction="row" justifyContent={"flex-end"} >
           <Link to='/'>
           <Button variant="contained" onClick={handleFilter}>Войти</Button>
          </Link>          
            <Link to='/registration'>
            <Button variant="contained"> Зарегистрироваться </Button>
          </Link>
             

          </Stack>
    </div>
  );
  };

export default Login;