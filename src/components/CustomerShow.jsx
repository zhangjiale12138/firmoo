import React from 'react';
import Classify from './CustomerShow/Classify';
import './CustomerShow.css';

export default class CustomerShow extends React.Component{

  
    render(){

       return (<div className="customershow-container">
               <div className="customershow-title-container">
                  <span />
                  <h2 style={{margin:0}}>Firmoo & Me</h2>
                  <span />
               </div>
               <div className="customershow-intro-container">
                   <p>New to Firmoo? Have a look at the photos, shopping experience and voice shared by our customers.</p>
                   <p>*Notice. If you don't want your photo to be featured , please contact service@firmoo.com.</p>
                   <Classify />
               </div>
               
               <div></div>
               <div></div>
  


             </div>)




    }






}