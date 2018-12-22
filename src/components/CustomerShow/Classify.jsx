import React from 'react';
import CustomerShowContent from './CustomerShowCotent'
import { connect } from 'react-redux'; 
import { tradeVideo } from '../../actions/video-trade';
import LazyLoad from 'react-lazyload';
import './Classify.css';

class Classifies extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            title: ['Gallery', 'Video', 'Voice'],
            type: ['View More', 'trade'],
            tag: 0
        };
    }

    onKeyTag(type) {

        this.setState({ tag: type });

    }
    trade(){
     const {tradeVideo} = this.props;
     

     tradeVideo([2,3]);
    
    }

    render() {

        return (
            <React.Fragment>
                <div className="customerShow-title">
                    {this.state.title.map((item, index) => {
                        return (
                            <button
                                key={item.toString()}
                                className="customerShow-title-item"
                                onClick={this.onKeyTag.bind(this, index)}>
                                {item}
                            </button>
                        )
                    })}
                </div>
                <div className="customerShow-viewmore">
                    <span className="type-item type-left">{'View More'}</span>
                    <span className="type-item" onClick={this.trade.bind(this)} >{'trade'}</span>
                </div>
                <LazyLoad height={392}>
                <CustomerShowContent tag={this.state.tag} />
                </LazyLoad>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        tradeVideo: (number) => {
        dispatch(tradeVideo(number))
      }
    }
  }

const Classify = connect(null, mapDispatchToProps)(Classifies)

export default Classify;