import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {

    
    return (
        <>
        
       
        
        
        <div className='mt-24'>
        <h1  className='text-4xl font-bold uppercase text-center mb-12'>Brand Category</h1>
        <div className='flex justify-center items-center'>
            




            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12  ms-24'>
                <CategoryCard></CategoryCard>
            </div>
    
    
    
    
    
    
    
            </div>
        </div>
        
        
        
        </>
    );
};

export default Categories;