import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import CartItem from './CartItem/CartItem'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import './Cart.css'

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {

  const classes = useStyles()

  const EmptyCart = () => (
    <Typography variant="subtitle1">No items your cart,
      <Link to="/shop" className={classes.link}> Gear Up</Link>!
    </Typography>
  )

  const FilledCart = () => (
    <>
      <Grid id="cartpadding" container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4" id="subtotal">
            Subtotal: { cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>

          <Button id="emptycart" classname={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            onClick={onEmptyCart}>
            Empty Cart
          </Button>

          <Button component={Link} to="/checkout" classname={classes.checkoutButton} size="large" type="button" variant="contained" id="checkout">
            Checkout
          </Button>
        </div>
      </div>
    </>
  )

  if(!cart.line_items) return 'Loading...'

  return (
    <Container>
      {/* <Typography className={classes.title} variant="h3" gutterBottom id="carttitle">YOUR CART</Typography> */}
      { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default Cart
