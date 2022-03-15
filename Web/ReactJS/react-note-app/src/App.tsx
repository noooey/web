import React from 'react';
import { GlobalStyle } from './App.styles';
import FriendList from './components/friendList/FriendList';
import Profile from './components/profile/Profile';
import Template from './components/template/Template';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Template>
        <Topbar />
        <FriendList />
        <Profile />
      </Template>
    </div>
  );
}

export default App;
