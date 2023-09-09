import React, { useState } from 'react';
import './header.css';

const Header = () => {
    return(
        <section className='flex ai-c jc-sb lp-header lp-shadow'>
            <div className='btn'>LOGO</div>
            <div className='flex g-1'>
                <div className='btn'>Product</div>
                <div className='btn'>Learn</div>
                <div className='btn'>Pricing</div>
            </div>
            <div className='flex btn-slider btn'>
                <div className='img'>{` img `}</div>
                <div className='text'>Try Jasper Free</div>
            </div>
        </section>
    )
}
export default Header;