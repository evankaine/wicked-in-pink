import React from 'react'
import "./Shop.css"

import ShopHeader from './ShopComponents/Header/Header'
import Basket from './ShopComponents/Basket/Basket'

export default function Shop() {
  return (
    <div className="shop">
      <div className="shop-wrapper">
        <ShopHeader />
        <div className="main-shop">
          <h2>Products</h2>
      
          <Basket />
        </div>
      </div>
    </div>
  )
}
