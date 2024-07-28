import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState, useRef } from 'react';
import {Button, CardActionArea, CardActions, TextField} from '@mui/material';
import { Link } from 'react-router-dom';
import "./regform.css"

export default function AdCard({ imgLink, adTitle, adText, adId, post_id }) {
  const [redact, setRedact] = React.useState(false);

  const [name2, setName2] = useState(adText);
  const [name1, setName1] = useState(adTitle);
  const [name3, setName3] = useState(imgLink);


  const valueRef1 = useRef('');
  const valueRef2 = useRef('');
  const valueRef3 = useRef('');


  return (

    <Card sx={{ maxWidth: 500, minWidth: 500, minHeight: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300rem"
          image={imgLink}
          alt="нет изображения"
        />
        <CardContent>
          {redact ? 
          <div>
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
              label="Price"
              variant="outlined"
              placeholder="Введите price"
              onChange={(e) => {
                setName3(e.target.value);
              }}
            />
          </div> : 
          <div>
            <Typography gutterBottom variant="h5" component="div">{adTitle}</Typography>
            <Typography variant="body2" color="text.secondary">
              {adText}
            </Typography>
          </div>}
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to='/'>   
        {redact ? <Button size="small" color="primary" onClick={
              ()=>fetch(`http://localhost:8000/api/v1/products/${post_id}/put`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name: name1, description: name2, price: name3})
              })
              .then(res => res.json())
              .then(data => console.log('Успешно:', data))
              .then(setRedact(false))
              .catch(error => console.error('Ошибка:', error))
            }>Сохранить</Button> :
          <Button size="small" color="primary" onClick={function handleClick() { setRedact(true) }}>Редактировать</Button>}
        <Button size="small" color="primary" onClick={
          () => fetch(`http://localhost:8000/api/v1/products/${adId}/del`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
          })
            .then(res => res.json())
            .then(data => console.log('Успешно:', data))
            .catch(error => console.error('Ошибка:', error))
        }>Удалить</Button>
      </Link>  
      </CardActions>
    </Card>

  );
}