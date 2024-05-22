import React, { useEffect, useState } from 'react'

export default function ProductList() {
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        getProduct();
    },[])

    const getProduct = async () =>{
        let result = await fetch('http://localhost:4000/products');
        result = await result.json();
        setProduct(result);
    }
    console.log(product)
  return (
    <div className='productList'>
      <h1>Product</h1>
      <ul>
        <li>Serial Number</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
      </ul>
      {
        product.map((item,key) => (
          <ul>
            <li>{key}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
          </ul>
        ))
      }
      {/* <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>{item.company}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  )
}