import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/assets/dropdown_icon.png';
import Item from '../components/Item/Item';
import all_product from '../components/assets/all_product';

const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      <div className='shopcategory-indexSort'>

        <p>
          <span>Showing 1-12</span> out of 36 all products
        </p>

        <div className='shopcatergory-sort'>
          Sort by <img src={dropdown_icon} alt=""/>
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.map((item, i) => {
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image = {item.image} new_price ={item.new_price} old_price = {item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory