import React from 'react';
import Logo from '../component/Logo';
import Movie from '../component/Movie';
import Navigation from '../component/Navigation';

const Home = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <Movie/>
        </div>
    );
};

export default Home;