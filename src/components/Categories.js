import React from 'react'
import { categories } from '../data'

function Categories() {
    return (
        <div className='w-full shadow-lg pb-3'>
            <div className='max-w-[95%] mx-auto pt-5'>
                <h3 className='text-gray-600 text-sm font-semibold'>Kategoriler</h3>
                <div className='category-container'>
                    {categories.map((category, index) => (
                        <div key={index} className="px-5 py-3 flex flex-col items-center category cursor-pointer group hover:scale-110 hover:shadow-lg">
                            <img src={category.img} alt="" width="48px" height="48px" />
                            <p className='mt-1 text-gray-600 text-sm font-semibold category-name group-hover:text-primary-brand-color'>{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Categories