import React, { useState } from 'react';
import axios from 'axios';
import RestaurantsFinder from '../apis/RestaurantsFinder';
import { Header } from '../component/Header';
import { AddRestaurant } from '../component/AddRestaurant';
import { RestaurantList } from '../component/RestaurantList';
// import { Profile } from '../component/Profile';

const Home = () => {
  
  return (
    <div>
      <Header />
      <AddRestaurant />
      <RestaurantList />
    </div>
  )
};

export default Home;