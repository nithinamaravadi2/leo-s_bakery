import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
//import './css/card.css'

const ChocolateCard = ({ name, description, imageUrl }) => {
  return (
    <Card id="i1"sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image={imageUrl}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ChocolateCard;