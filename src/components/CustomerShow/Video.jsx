import React from 'react';
import { connect } from 'react-redux';
class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video: [
                {
                    id: "1",
                    introduction: "I quit my job, so I wasn't gonna have insurance anymore,I wanted to go get a cute new glasses.  I wanted to save money I could have literally just like got some online actually new ones that are super cute and I would had like three hundred dollars in my pocket still.",
                    name: "@ Heflin Estelle",
                    products_id: "5446",
                    products_model: "S11050X",
                    url: "IE-9EzNLiFo"
                },
                {
                    id: "2",
                    introduction: "The problem with me is when it comes to frames but I never find a pair that I fall in love with. So I came across Fimoo on instagram, checked their post, nice! Cheked our their website, nice! Specially those prices, nice! Very happy experience.",
                    name: "@ STRUGGAIL  ",
                    products_id: "4309",
                    products_model: "LKFS9913",
                    url: "bwXamMW7Mcg"
                },
                {
                    id: "3",
                    introduction: "I've got glasses from different firms and I would like to compare those ones that I got online. I will share my first shopping glasses online experience honestly.",
                    name: "@ JessIsAMess  ",
                    products_id: "4612",
                    products_model: "S6305",
                    url: "DCvf53ZmIiI"
                },
                {
                    id: "4",
                    introduction: "I've been trying to wear glasses a little bit more just to let my eyes rest and heal from ten years of that contact use experience， first pair I got a little too small for my head, we are going to exchange them or return them and actually their exchange return policy is they don't fit or prescription whatever is not correct you can in fact return them or exchange them.",
                    name: "@ Allisen Byrd  ",
                    products_id: "5141",
                    products_model: "DBSN62293",
                    url: "OuAIQOdjLqs"
                }
            ]
        }
    }
    componentWillMount(){
        console.log('componentWillMount');
        console.log(this.props.num, '即将挂载');
    }
    componentDidMount(){
        console.log('componentDidMount');     
    }
    componentWillReceiveProps(){
        console.log(this.props.num, '父组件重新render,即将接受props');     
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;        
    }
    componentWillUnmount(){       
        console.log('组件即将卸载....');
    }
    render() {
        console.log('render......');
        const  {num} =this.props;
        const {video} = this.state;
        return (<div className="video-container">
            {num.map((item, index) => {
                return (
                    <div
                        key={item.toString()}
                        style={{
                            display: 'inline-block',
                            width: '585px',
                            padding: '0px 15px'
                        }}>
                        <iframe
                            title={item.toString()}
                            style={{
                                maxWidth: "100%",
                                width: '100%',
                                height: '315px',
                                border: "none"
                            }}
                            src={"https://www.youtube.com/embed/" + video[item].url}
                            frameBorder="0"></iframe>
                        <p>{video[item].introduction}</p>
                    </div>)
            })}
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        num: state.videoIndex.number
    }
}
const Videos = connect(mapStateToProps)(Video)
export default Videos;