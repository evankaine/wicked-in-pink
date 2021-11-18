import React, { useState, useEffect } from 'react'
import "./Shop.css"
import { commerce } from './lib/commerce'
import Products from './ShopComponents/Products/Products'
import NavbarShop from './ShopComponents/NavbarShop/NavbarShop'

export default function Shop() {

  const [products, setProducts] = useState([])
  
  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProducts(data)
  }
  
  useEffect(()=> {
    fetchProducts();
  }, [])

  console.log(products)

  return (
    <div className="shop">
      <div className="shop-wrapper">
        <NavbarShop />
        <Products products={products} />
      </div>
    </div>
  )
}
