import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';

const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();//we will find product id using this
  const product = all_product.find((e)=> e.id === Number(productId));


  return (
    <div>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
    </div>
  )
}

export default Product