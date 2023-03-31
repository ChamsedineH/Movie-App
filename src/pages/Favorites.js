import React from 'react';
import Favlist from '../component/Favlist';
import Logo from '../component/Logo';
import Navigation from '../component/Navigation';

const Favorites = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <Favlist/>
        </div>
    );
};

export default Favorites;