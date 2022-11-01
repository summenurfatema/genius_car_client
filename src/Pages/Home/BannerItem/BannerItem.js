import React from 'react';
import './BannerItem.css'

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='banner-img'>
                <img src={image} alt='' className="w-full rounded-lg" />
            </div>


            <div className='absolute left-10 top-10 space-y-10'>
                <h1 className='text-4xl font-bold text-white w-1/3'>Affordable Price for Car Servicing</h1>
                <p className='w-1/2 text-white'>There are many variation of passages of available,but the mejority have suffered alteration in some form</p>

                <div className='flex'>
                    <button className="btn btn-outline btn-primary mr-5">Button</button>
                    <button className="btn btn-outline btn-secondary">Button</button>
                </div>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-7">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;