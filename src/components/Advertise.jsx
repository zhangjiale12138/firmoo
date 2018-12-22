import React from 'react';
import './Advertise.css';
export default function Advertise({ src }) {

    return (
        <div className="advs-container">
            <div className='advs-img-top-container'>
                <div><img src={require('../img/a.jpg')} alt="" /></div>
                <div><img src={require('../img/b.jpg')} alt="" /></div></div>
            <div className='advs-img-middle-container'>
                <img src={require('../img/j.jpg')} alt="" /></div>
            <div className='advs-img-bottom-container'>
                <div><img src={require('../img/d.jpg')} alt="" /></div>
                <div><img src={require('../img/e.jpg')} alt="" /></div>
                <div><img src={require('../img/f.jpg')} alt="" /></div>
            </div>
        </div>
    )

}
