import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Shop.css';
import ShopItem from './ShopItem';

const Shop = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const BASE_URL = 'https://fakestoreapi.com/products';

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(BASE_URL);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    getProducts();
    //eslint-disable-next-line
  }, []);

  const renderPage = () => {
    if (loading) {
      return <h1>Loading...</h1>;
    }

    if (error) {
      return <h1>An error occured, please check your internet and refresh</h1>;
    }
    return data.map((item) => (
      <div className="" key={item.id}>
        <ShopItem
          title={item.title}
          price={item.price}
          image={item.image}
          id={item.id}
          category={item.category}
        />
      </div>
    ));
  };

  return <div className="wrapper">{renderPage()}</div>;
};

export default Shop;
