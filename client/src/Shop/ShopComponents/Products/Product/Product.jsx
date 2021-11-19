import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, ButtonBase } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import './Product.css'
import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} id="maincard">
    
      <CardMedia className={classes.media} image={product.image.url} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" id="productname">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" id="productprice">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" id="productdesc" />
      </CardContent>
    
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id)}>
          <AddShoppingCart id="iconbutton" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;