import React, { useState } from 'react'

export default function AddProduct() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [company, setCompany] = useState('')

  const addProduct = (e) => {
    e.preventDefault()
    console.log(name, price, category, company)
  }

  return (
    <div className='product'>
      <h1>Add Product</h1>
      <input className='input' type='text' value={name} onChange={(e) =>setName(e.target.value)} placeholder='Product Name' />
      <input className='input' type='text' value={price} onChange={(e) =>setPrice(e.target.value)} placeholder='product Price' />
      <input className='input' type='text' value={category} onChange={(e) =>setCategory(e.target.value)} placeholder='Product Category' />
      <input className='input' type='text' value={company} onChange={(e) =>setCompany(e.target.value)} placeholder='Product Company' />
      <button type='button' onClick={addProduct} className='btn'>Add Product</button>
    </div>
  )
}
