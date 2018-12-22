import React from 'react';
import { Carousel } from 'antd';
const img1 = require('../img/01.jpg');
const img2 = require('../img/02.jpg');
const img3 = require('../img/03.jpg');
const img4 = require('../img/04.jpg');

export default class Banner extends React.Component {



    render() {
        const imgArr = [img1, img2, img3, img4];
        return (<React.Fragment>
            <Carousel autoplay>
                {
                    imgArr.map((item, index) => {
                        return (
                            <div key={item.toString()} >
                                <img src={item} alt="" />
                            </div>);
                    })
                }
            </Carousel>
        </React.Fragment>)
    }



}