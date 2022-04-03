import React from 'react';
import './newProduct.css';

export default function Newproduct() {
  return (
    <div className='newProduct'>
      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm">
        <div className="addProductItem">
          <label htmlFor="file">Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder='Apple Airpods' />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder='123' />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select className='newProductSelect' name='active' id='active'>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newProductButton">Create</button>
      </form>
    </div>
  )
}
