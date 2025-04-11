import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'

const Add = () => {
  return (
    <div className='add'>
        <form className="flex-col">
            <div className="add-img-upload flex-col">
              <p>Upload Image</p> 
              <label htmlFor="image">
                <img src={assets.upload_area} alt="" />
              </label>
              <input type="file" id='image' hidden required/>
            </div>
            <div className="add-product-name flex-col">
                <p>Product name</p>
              <input type="text" name='name' placeholder='Type here'/>  
            </div>
            <div className="add-product-description flex-col">
                <p>Product description</p>
                <textarea name="description" rows='6' placeholder='Write content here ' required></textarea>

            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                 <p>Product category</p>
                 <select name="category">
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Deserts">Deserts</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Pure Veg">Pure Veg</option>
                    <option value=""></option>
                    <option value="Pasta"></option>
                    <option value="Noodles"></option>
                    </select>   
                </div>

            </div>
        </form>
      
    </div>
  )
}

export default Add
