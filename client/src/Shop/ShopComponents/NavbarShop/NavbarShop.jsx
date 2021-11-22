import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'
import './NavbarShop.css'
import logo from '../../../Images/wip-logo.png'
import useStyles from './styles'

const NavbarShop = ({ totalItems }) => {

  const classes = useStyles()
  const location = useLocation()

  return (
    <>
        <Toolbar id="toolbar" >
          <Typography component={Link} to="/shop" variant="h6" className={classes.title} color="inherit" id="shoplogocontainer">
            <img src={logo} alt="Wicked in Pink" className={classes.iamge} id="shoplogo" />
          </Typography>
        <div className={classes.grow} />
        {location.pathname == '/shop' && (
          <div className={classes.button} id="cartcontainer">
            <IconButton component={Link} to="/cart" aria-label="Show Cart Items" color="inherit" >
              <Badge badgeContent={totalItems} color="secondary" >
                <ShoppingCart id="carticon" />
              </Badge>
            </IconButton>
          </div>)}
        </Toolbar>
    </>
  )
}

export default NavbarShop
