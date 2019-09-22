import React from 'react';
import TopBar from './Components/TopBar';
import NavigationBar from './Components/NavigationBar';
import TeamsBar from './Components/TeamsBar';

const Header = () => (
    <div>
        <TopBar />
        <NavigationBar />
        <TeamsBar />
    </div>
);

export default Header;