import React from 'react'
import Navbar from './Navbar'

const HeroSection = () => {
    return (
        <section className=''>
            <div className='max-w-[1440px]'>
                <Navbar />

                <div>
                    <h1 className='text-[70px] font-bold  '>TÜRKÇE RAP VEDÜNYA MÜZİK
                                    HABERLERİNİ TAKİP ET</h1>


                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                    <button className=''>Devamını Oku</button>

                </div>
            </div>
        </section>
    )
}

export default HeroSection