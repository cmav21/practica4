import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Footer from './Components/Footer/Footer';

class HomeView extends Component {
    render(){
        return(
            <>
                <Header />
                <Menu />
                <Footer />
            </>
        );
    }
}

export default HomeView;