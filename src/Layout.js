import React from 'react';
import Navbar from './Navbar/navbar';
import Topbar from './Topbar/topbar';
import Lastbar from './Lastbar/lastbar';

const Layout = () => {
    return (
      <div className="main-layout">
        <Navbar />
        <Topbar />
        <Lastbar />
       
      </div>
    );
  };

export default Layout;
