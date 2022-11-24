import React from 'react';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Categories from '../Categories/Categories';
import IphoneBanner from '../IphoneBanner/IphoneBanner';

const Home = () => {
    return (
        <div className=''>   
            <Banner></Banner>
            <IphoneBanner></IphoneBanner>
            <Categories></Categories>
            
            <Brand></Brand>
        </div>
    );
};

export default Home;