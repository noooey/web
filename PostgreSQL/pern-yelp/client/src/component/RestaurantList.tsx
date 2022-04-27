import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RestaurantsFinder from '../apis/RestaurantsFinder';

// interface Idata {
//   name: string,
//   location: string,
//   price_range: number,
// }

export const RestaurantList =  () => {
  const [data, setData] = useState([{
    name: 'gg',
    location: 'seoul',
    price_range: 4,
  },]);

  const fetchData = async () => {
    try {
      const res = await RestaurantsFinder.get('/');
      setData(res.data.data.restaurants);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">location</th>
            <th scope="col">prcie_range</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, idx) => {
              const { name, location, price_range } = item;
              return (
                <tr key={idx+1}>
                  <th scope="row">{idx + 1}</th>
                  <td>{name}</td>
                  <td>{location}</td>
                  <td>{price_range}</td>
                  <td>
                    <button className='btn btn-warning'>edit</button>
                  </td>
                  <td>
                    <button className='btn btn-danger'>delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
};