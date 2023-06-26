import React from 'react';
import { styled } from '@mui/system';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import homeBackground from '../../assets/services_background.jpg';

const Background1 = styled('div')({
  top: 0,
  left: 0,
  height: '100vh',
  width: '100%',
  zIndex: -1,
  maxHeight: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
});

const CardContainer = styled('div')({
  backgroundPosition: 'center',
  display: 'flex',
  width: '90%',
  justifyContent: 'space-around',
  alignItems: 'center',
});

const Card = styled('div')({
  margin: '20px',
  width: '30vw',
  height: '85vh',
  background: 'white',
  borderRadius: '10px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
});

const ServicesHome = () => {
  return (
    <div style={{ top: '0' }}>
      <Background1 style={{ backgroundImage: `url(${homeBackground})`, height: '100vh' }}>
        <CardContainer >
          <Card>
            <CardMedia
              src='../assets/services_background.jpg'
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card>Card 2</Card>
          <Card>Card 3</Card>
        </CardContainer>
      </Background1>
    </div>
  );
};

export default ServicesHome;
