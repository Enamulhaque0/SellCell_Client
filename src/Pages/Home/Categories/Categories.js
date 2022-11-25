import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {

    const { data: Brands=[] } = useQuery({
        queryKey: ['brand'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category');
            const data = await res.json();
            return data;
        }
    })

    
    return (
        <>
        
       
        
        
        <div className='mt-24'>
        <h1  className='text-4xl font-bold uppercase text-center mb-12'>Brand Category</h1>
        <div className='flex justify-center items-center'>
            




            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12  ms-24'>
               {

Brands.map(brand=> <CategoryCard brand={brand} key={brand._id}></CategoryCard>)
               }
              
            </div>
    
    
    
    
    
    
    
            </div>
        </div>
        
        
        
        </>
    );
};

export default Categories;