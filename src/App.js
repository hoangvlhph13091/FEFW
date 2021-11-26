
import { useState, useEffect } from 'react';
import Routers from './Router';
import ProductApi from './api/ProductsApi';
import CategoryApi from './api/CategoryApi';
import "../src/";
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const {data : products} = await ProductApi.getAll();
        console.log(`products`, products)
        const {data : category} = await CategoryApi.getAll();
        console.log(`category`, category)
        setProducts(products)
        setCategories(category)
      } catch (error) {  
        console.log(error)
      }
    }
    fetchData()
  },[])

  const removeProduct = async (id) => {
    try {
      await ProductApi.remove(id);
      const newProduct = products.filter(product => product.id != id)
      setProducts(newProduct); 
    } catch (error) {
      
    }
  }
  const addProduct = async (data) => {
    try {
      await ProductApi.add(data)
    } catch (error) {
      console.log(error);
    }
  }

  const updateProduct = async (item) => {
    try {
      await fetch(`https://618e0576fe09aa00174409a8.mockapi.io/product/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      const newProduct = products.map((pro) =>
        pro.id === item.id ? item : products
      );
      console.log("okeoke", item);
    } catch (error) {
      console.log(error)
    }
  }
  const removeCategory = async (id) => {
    try {
      await CategoryApi.remove(id)
      const newCategory = categories.filter(category => category._id != id)
      setCategories(newCategory);
    } catch (error) {
      console.log(error)
    }
  }
  const addCategory = async (item) => {
    console.log(item);
    try {
      await CategoryApi.add(item)
    } catch (error) {
      console.log(error);
    }
  }
  const updateCategory = async (category) => {
    try {
      await fetch(`https://618e0576fe09aa00174409a8.mockapi.io/category/${category.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      });
      const newCategory = categories.map((cate) =>
        cate.id === category.id ? category : categories
      );
      console.log("okeoke", category);
      setCategories(newCategory);
    } catch (error) {
      console.log(error)
    }
  }
  
  
  return (
    <div className="App">
      <Routers 
        products={products}
        category={categories} 
        addProduct={addProduct}
        removeProduct={removeProduct}
        updateProduct={updateProduct}
        removeCategory={removeCategory}  
        addCategory={addCategory}
        updateCategory={updateCategory}
      />
    </div>
  );
}

export default App;
