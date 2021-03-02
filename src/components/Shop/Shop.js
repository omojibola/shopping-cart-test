import React, { useState, useEffect } from 'react';
import './Shop.css';
import ShopItem from './ShopItem';

const Shop = (allprops) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const BASE_URL = 'https://fakestoreapi.com/products';

  useEffect(() => {
    console.log(data);
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log(error);
      });

    setLoading(false);
    // eslint-disable-next-line
  }, []);
  console.log(data);

  return (
    <div className="wrapper">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((item) => (
          <div className="" key={item.id}>
            <ShopItem
              title={item.title}
              price={item.price}
              image={item.image}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Shop;
