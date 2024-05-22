import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

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

const deleteProduct = async (id) =>{
    let result = await fetch(`http://localhost:4000/product/${id}`,{
        method:'DELETE',

    });
    result = await result.json();
    getProduct();
    if(result){
        alert('Product deleted successfully');
    }
}


const searchHandle = async (event) =>{
    let key = event.target.value;
    if(key){
        let result =  await fetch(`http://localhost:4000/search/${key}`);
        result = await result.json();
        if(result){
            setProduct(result);
        }
    }else{
        getProduct();
    }


}

return (
    <div className='productList'>
      <h1>Product</h1>
      <input type='text' placeholder='Search Products' className='search-box-product' onChange={searchHandle} />
      <ul>
        <li>Serial Number</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation</li>
      </ul>
      {
       product.length>0 ? product.map((item,key) => (
          <ul>
            <li>{key}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li><button onClick={()=>{deleteProduct(item._id)}}>Delete </button> <Link to={"/update/"+item._id}><button> Update</button></Link></li>
          </ul>
        ))
        : <h1>No Result found</h1>
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
};
