import React, { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";



export default function UpdateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getProduct();
  },[])

  const getProduct = async () => {
    // console.log(name,price,category,company)
    let result = await fetch(`http://localhost:4000/product/${params.id}`);
    result = await result.json();
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)

  };

  const updateProduct = async () => {
    console.log(name,price,category,company)
    let result = await fetch(`http://localhost:4000/product/${params.id}`, {
        method: 'put',
        body: JSON.stringify({name,price,category,company}),
        headers: {
            "Content-Type": "application/json",
        }
    })
    result = await result.json();
    console.log(result);
    navigate('/')
  }

  return (
    <div className="product">
      <h1>Update Product</h1>
      <input
        className="input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Update Name"
      />
      <input
        className="input"
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Update Price"
      />

      <input
        className="input"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Update Category"
      />

      <input
        className="input"
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Update Company"
      />
      <button type="button" onClick={updateProduct} className="btn">
        Update Product
      </button>
    </div>
  );
}
