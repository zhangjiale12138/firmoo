import React, { Component } from 'react';
import { Divider } from 'antd';
import './Footer.css';

import c from '../img/credit-card.jpg';
class Footer extends Component {
  render() {
    return (

      <div className='footer'>

        <div className='container row'>
          <div className='col-sm-4'>
          </div>
        </div>
        <div className='pay'>
          <img src={c} alt="" />
        </div>
        <div className='col-xs-12 cio'>
          <ul>
            <li className='cio2'></li>
            <li className='forbes'></li>
            <li className='entre'></li>
            <li className='engo'></li>
            <li className='tnw'></li>
            <li className='the_huffington'></li>
            <li className='inc'></li>
            <li className='business'></li>
          </ul>

        </div>
        <Divider style={{ height: 2 }} >Toll Free: 1-855-487-6006 | Email: service@firmoo.com</Divider>
        <p>Copyright © 2018 Firmoo Online Optical Store. <span className='right'>All Right Reserved.</span> </p>
      </div>


    );
  }
}

export default Footer;
