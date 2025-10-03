import React from 'react'

const HeroInfo = ({ heroText }) => {
  return (
    <div className='max-w-[1440px] w-full mt-[118px] screen8:mt-[198px] flex  justify-center screen8:justify-end mx-auto relative z-10'>
      <div className='max-w-[287px] screen8:max-w-[460px] w-full screen8:mr-52  text-center screen8:text-left font-saira flex flex-col items-center screen8:items-start'>
        <h1 className={`text-[30px] max-w-[230px] screen8:max-w-[460px] screen8:text-[60px] font-bold leading-[33px] screen8:leading-[66px] tracking-tight  w-full ${heroText.class}`}>{heroText.text}</h1>

        <p className={`text-[14px] leading-[15px] screen8:text-[16px] screen8:leading-[19px] tracking-[1px] mt-3 screen8:mt-0 ${heroText.class}`}>{heroText.info}  </p>

        <button className='text-black bg-yellow shadow-custom w-[137px] h-[39px] font-bold text-[14px] homebtn mt-3'>Devamını Oku</button>
      </div>
    </div>
  )
}

export default HeroInfo