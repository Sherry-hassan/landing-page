import React from 'react'
import '../herosection/hero.css'
import groupImg from './images/Group.png'

const Hero = () => {
    return (
        <>
            <div className='main-section'>
                <section className='hero-section'>
                    <h1>Introduce Your Product Quickly & Efficiently</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                    <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    <div className='hero-button'>
                        <button className='purchase-btn'>Purchase UI Kit</button>
                        <button className='light-button'>Learn More</button>
                    </div>
                </section>
                <div className='img-container'>
                    <img src={groupImg} alt="" className='hero-img' />
                </div>
            </div>
        </>
    )
}

export default Hero