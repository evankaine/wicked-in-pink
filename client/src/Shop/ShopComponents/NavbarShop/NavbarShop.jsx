import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../../Images/wip-logo.png'
import useStyles from './styles'

const NavbarShop = ({ totalItems }) => {

  const classes = useStyles()
  const location = useLocation()

  return (
    <>
        <Toolbar>
          <Typography component={Link} to="/shop" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="Commerce.js" height="25px" className={classes.iamge} />
              Shop
          </Typography>
        <div className={classes.grow} />
        {location.pathname == '/shop' && (
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show Cart Items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>)}

        </Toolbar>
    </>
  )
}

export default NavbarShop
