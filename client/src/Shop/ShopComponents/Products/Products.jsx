import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//   { id: 1, name: 'WIP Shirt | 2022', description: 'Wicked in Pink 2022 Shirt', price: '$25', image: 'https://m.media-amazon.com/images/I/51DE4Ziu5iL._AC_UX342_.jpg' },
//   { id: 2, name: 'WIP Hoodie | 2022', description: 'Wicked in Pink 2022 Hoodie', price: '$40', image: 'https://cdn.shopify.com/s/files/1/2776/0162/products/basic_hoodie_pink.jpg?v=1527366409'},
// ]

const Products = ({ products, onAddToCart}) => {

  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;