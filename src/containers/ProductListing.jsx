import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from './redux/actions/productActions'; // Correct action name

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products); // Access the specific slice of the state
  const dispatch = useDispatch();

  const getProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(setProducts(response.data)); // Correctly set products in Redux
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []); // Add dispatch to dependency array

  console.log('Products:', products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
