import React, { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button, Modal, Box } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import './Product.css'
import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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


    <div id="popupbuttondiv">

    <Button id="popupbutton" size="large" type="button" variant="contained" onClick={handleOpen}><span id="viewtext">View Item</span></Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
    <Box id="modalstyle">
      <img src={product.image.url} alt={product.name} />
    </Box>
  </Modal>


        {/* <Button id="popupbutton" size="large" type="button" variant="contained" onClick={togglePopup}>
        <span id="viewtext">View Item</span>
      </Button> */}
    
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id)}>
          <AddShoppingCart id="iconbutton" />
        </IconButton>
      </CardActions>

      </div>
    </Card>
  );
};

export default Product;