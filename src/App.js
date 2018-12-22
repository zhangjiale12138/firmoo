import React, { Component } from 'react';
import LayOut from './components/layout';
import Banner from './components/banner';
import Scanf from './components/Scanf';
import Products from './components/Product';
import Advertise from './components/Advertise';
import CustmerShow from './components/CustomerShow'
import './App.css';

class App extends Component {

  render() {
    return (
       <LayOut>
         <Banner />
         <Scanf />
         <Products />
         <Advertise />
         <CustmerShow />
       </LayOut>
    );
  }
}

export default App;
