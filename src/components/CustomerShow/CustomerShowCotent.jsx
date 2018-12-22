import React from 'react';
import PropTypes from 'prop-types';
import Voice from './Voice';
import Video from './Video';
import Gallery from './Gallery';
class CustomerShowContent extends React.Component{
  static propsTypes = {
    tag: PropTypes.number.isRequired
  }
  render(){
           return (<React.Fragment> 
            {this.props.tag===0 && <Gallery /> }
            {this.props.tag===1 && <Video /> }
            {this.props.tag===2 && <Voice /> }
           </React.Fragment>)
  }

}
export default CustomerShowContent;