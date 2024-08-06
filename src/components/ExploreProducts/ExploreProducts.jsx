import React from 'react'
import './ExploreProducts.css'
import { menu_list } from '../../assets/assets'

const ExploreProducts = ({category, setCategory}) => {
    return (
        <div className='explore-product' id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-product-text'>Choose from a diverse menu featuring a delectable array of dishes
                crafted with the finest ingredients and culinary expertise, Our mission is
                to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
            <div className="explore-product-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() =>setCategory(prev=>prev ===item.menu_name?"All":item.menu_name)} key={index} className="explore-product-list-item">
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt='' />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
<hr />



        </div>
    )
}

export default ExploreProducts