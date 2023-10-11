import React from 'react';
import Grid from '@mui/material/Grid';
import ChocolateCard from './ChocolateCard';  

const chocolates = [
  {
    name: 'Dark Chocolate',
    description: 'Rich and bitter, perfect for dark chocolate lovers.',
    imageUrl: 'https://royceindia.com/cdn/shop/files/ChocolateBarBlack_1.webp?v=1695897318&width=1080',
  },
  {
    name: 'almond Chocolate',
    description: 'Sweet and creamy, a classic favorite for many.',
    imageUrl: 'https://royceindia.com/cdn/shop/files/ChocolateBarAlmond_1.webp?v=1695897043&width=1080',
  },
  {
    name: 'Rum &raisin Chocolate',
    description: 'Sweet and creamy, a classic favorite for many.',
    imageUrl: 'https://images.tokopedia.net/img/cache/200-square/product-1/2017/7/31/198535495/198535495_731be1be-be11-48fd-9f6a-c82ddce391d4_1080_748.jpg',
  },
];

const ChocolatesContainer = () => {
  return (
    <Grid container spacing={2} justifyItems={'center'}>
      {chocolates.map((chocolate, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <ChocolateCard {...chocolate} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ChocolatesContainer;