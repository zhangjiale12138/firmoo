import React from 'react';
import Nav from './NavFirst';
import Footer from './Footer.jsx';
export default class LayOut extends React.Component {



    render() {

        return (
            <React.Fragment>
                <Nav />
                  <main>
                   {this.props.children}
                  </main>
                <Footer />
            </React.Fragment>)
    }




}