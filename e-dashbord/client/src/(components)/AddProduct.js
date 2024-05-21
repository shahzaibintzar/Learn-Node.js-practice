import React, { useState } from "react";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const addProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    console.log(name, price, category, company);
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    // console.log(userId)
    let result = await fetch("http://localhost:4000/addProduct", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  };

  return (
    <div className="product">
      <h1>Add Product</h1>
      <input
        className="input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />
      {error && !name && <span className="invalid">Enter valid name</span>}
      <input
        className="input"
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="product Price"
      />
      {error && !price && <span className="invalid">Enter valid Price</span>}

      <input
        className="input"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Product Category"
      />
      {error && !category && <span className="invalid">Enter valid Category</span>}

      <input
        className="input"
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Product Company"
      />
      {error &&!company && <span className="invalid">Enter valid Company</span>}
      <button type="button" onClick={addProduct} className="btn">
        Add Product
      </button>
    </div>
  );
}
