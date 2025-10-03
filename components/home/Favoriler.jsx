import React from 'react'
import Image from 'next/image'

const Favoriler = () => {
    return (
        <section className='w-full'>

            <div className='max-w-[1440px] mx-auto w-full relative pl-4 md:pl-8 lg:pl-20 py-[88px] lg:py-[74px] flex flex-col lg:flex-row justify-between'>

                <div className='absolute bg-[#FFFFFF] max-w-[376px] h-[88px]  screen13:max-w-[602px] screen13:h-[126px] kesfetLogo w-full flex justify-center items-center  gap-6 screen13:gap-12 top-0 left-0'>

                    <Image src="/icon/home/youtube1.svg" alt="Logo" width={160} height={48} className='w-[113px] h-[25px] screen13:w-[160px] screen13:h-[48px]' />
                    <Image src="/icon/home/spotify1.svg" alt="Logo" width={126} height={36} className='w-[113px] h-[33px] screen13:w-[160px] screen13:h-[48px] ' />

                </div>




                <div className="text-[40px] lg:text-[60px] font-bold leading-[40px] lg:leading-[53px]  w-full uppercase text-white flex flex-col items-center justify-center h-full my-10 lg:my-0">
                    <h5 className='text-center lg:text-left h-full w-full lg:mt-20'> AYIN <br />FAVORİLERİ </h5>
                </div>

                <div className='flex max-w-[926px] overflow-x-auto gap-12 custom-scroll relative pb-8'>
                <Image src="/image/Fav1.png" alt="favori image" width={274} height={264} className='w-[274px] h-[380px] lg:h-[264px]' />
                    <Image src="/image/Fav2.png" alt="favori image" width={274} height={264} className='w-[274px] h-[380px] lg:h-[264px]' />
                    <Image src="/image/Fav1.png" alt="favori image" width={274} height={264} className='w-[274px] h-[380px] lg:h-[264px]' />
                    <Image src="/image/Fav2.png" alt="favori image" width={274} height={264} className='w-[274px] h-[380px] lg:h-[264px]' />
                    <Image src="/image/Fav1.png" alt="favori image" width={274} height={264} className='w-[274px] h-[380px] lg:h-[264px]' />
                    <Image src="/image/Fav2.png" alt="favori image" width={274} height={264} className='w-[274px] h-[380px] lg:h-[264px]' />
                </div>

            </div>
        </section>
    )
}

export default Favoriler