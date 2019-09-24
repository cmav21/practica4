import React,{ Component } from 'react';
import TopBar from './Components/TopBar';
import NavigationBar from './Components/NavigationBar';
import TeamsBar from './Components/TeamsBar';

class Header extends Component {

    state = {
        top: true,
        scroll: 0
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 50;
            if(isTop !== this.state.top){
                this.setState({ top:isTop })
            }
            this.setState({ scroll: window.scrollY })
        });
    }

    render(){
        return (

            <div>
            <TopBar />
            <NavigationBar top={this.state.top} scroll={this.state.scroll} />
            <TeamsBar />
        </div>
    )
    }
};

export default Header;