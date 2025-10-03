import React from 'react'
import Image from 'next/image';
import KesfetButonSelect from './KesfetButonSelect';
import Link from 'next/link';
import BlogCard from './BlogCard';



const links = [
    { name: "Haberler", href: "#" },
    { name: "Etkinlikler", href: "#" },
    { name: "Müzikler", href: "#" },
    { name: "Videolar", href: "#" },
    { name: "İletişim", href: "#" },
];

const kesfetData = [
    {
        id: "01",
        img: "/image/blogImage5.png",
        name: 'Jonathan Stewart',
        avatar: '/image/profile3.png',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.  Mauris nec leo non libero sodales lobortis. Quisque a neque preti ...',
        date: "29 Mart 2022",
    },
    {
        id: "02",
        img: "/image/blogImage4.png",
        name: 'Steve Rogerson',
        avatar: '/image/profile2.png',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.  Mauris nec leo non libero sodales lobortis. Quisque a neque preti ...', date: "29 Mart 2022",
    },
    {
        id: "03",
        img: "/image/blogImage3.png",
        name: 'Ismail Kor',
        avatar: '/image/profile1.png',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.  Mauris nec leo non libero sodales lobortis. Quisque a neque preti ...', date: "29 Mart 2022",
    },
    {
        id: "04",
        img: "/image/blogImage2.png",
        name: 'Jonathan Stewart',
        avatar: '/image/profile3.png',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.  Mauris nec leo non libero sodales lobortis. Quisque a neque preti ...', date: "29 Mart 2022",
    },
    {
        id: "05",
        img: "/image/blogImage1.png",
        name: 'Steve Rogerson',
        avatar: '/image/profile3.png',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.  Mauris nec leo non libero sodales lobortis. Quisque a neque preti ...', date: "29 Mart 2022",
    },
];


const Kesfet = () => {
    return (
        <section className=" text-white w-full">
            <div className="max-w-[1440px] w-full mx-auto py-24 px-4 md:px-8 lg:px-20 flex flex-col screen12:flex-row justify-between gap-12">

                <div className='flex flex-col screen12:max-w-[733px] w-full'>

                    <div className='flex  items-center justify-between'>
                        <div className="text-[60px] font-bold leading-[53px] flex w-full">
                            <h5> KEŞFET </h5>
                            <Image src="/icon/home/trend1.svg" alt="Logo" width={54} height={54} className='w-[54px] h-[54px] ml-6' />
                        </div>

                        <div className='flex gap-4'>
                            <Image src="/icon/search.svg" alt="Logo search" width={23} height={22} className='w-[23px] h-[22px] ' />
                            <Image src="/icon/home/burger.svg" alt="Logo burger" width={24} height={20} className='w-[24px] h-[20px] ' />
                            <Image src="/icon/home/burger2.svg" alt="Logo burder icon" width={23} height={20} className='w-[23px] h-[20px] ' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-[52px] md:gap-[72px] mt-[80px]'>
                        {kesfetData.map((item, i) => (
                            <div key={`${item.name}${i}`} className='flex flex-col md:flex-row gap-4 md:gap-5'>

                                <div className='flex flex-col gap-8'>
                                    <div className='w-[302px] h-[196px]'>
                                        <Image src={item.img} alt="blogImage" width={302} height={196} className='w-full h-full' />
                                    </div>

                                    <h5 className='text-[16px] text-[#3B3B3B]'>{item.date}</h5>
                                </div>

                                <BlogCard data={item} kesfet={true} />

                            </div>
                        ))}


                        <div className='md:hidden flex justify-center items-center'>

                  
                        <button className=' text-black bg-white shadow-custom w-[195px] h-[48px] font-bold text-[16px] homebtn mt-3'>Devamını Oku</button>
                        </div>

                    </div>


                </div>


                <div className='screen12:max-w-[413px] w-full '>
                    <div className='mb-6'>
                        <h5 className='font-bold text-[40px] text-white leading-[41px] uppercase mt-2'>NE GÖRMEK İSTERSİN?</h5>
                    </div>

                    <KesfetButonSelect />

                    <div className='mt-20'>
                        <h5 className='font-bold text-[40px] text-white leading-[41px] uppercase mt-2'>GELİŞMELERDEN İLK SEN HABERDAR OL!</h5>

                        <div className='relative h-[35px] mt-12 border-b border-[#3B3B3B] pb-6'>

                            <input type="text" placeholder='EMAIL' className='bg-black w-full h-full pl-2 py-2 pr-20 placeholder:text-white text-white text-[14px]  focus:ring-0 outline-none' />

                            <div className='absoluteYCenter text-[#F0E74D] text-[14px] font-bold flex  justify-center items-center right-[0px] pb-3'>
                                <span>GÖNDER</span>

                                <Image src="/icon/home/rightIcon.svg" alt="ArrowLogo" width={23} height={20} className='w-[10px] h-[10px] ml-2' />
                            </div>

                        </div>

                    </div>


                    <div className='flex items-center justify-start gap-5 mt-12'>
                        <Image src="/icon/home/facebook.svg" alt="facebook logo" width={40} height={40} className='w-[15px] h-[29px] ml-2' />

                        <Image src="/icon/home/twitter.svg" alt="twitter logo" width={40} height={40} className='w-[27px] h-[22px] ml-2' />

                        <Image src="/icon/home/discord.svg" alt="discord logo" width={40} height={40} className='w-[32px] h-[24px] ml-2' />

                        <Image src="/icon/home/spotify.svg" alt="spotify logo" width={40} height={40} className='w-[34px] h-[34px] ml-2' />

                        <Image src="/icon/home/youtube.svg" alt="youtube logo" width={40} height={40} className='w-[34px] h-[24px] ml-2' />
                    </div>

                    <div className="grid gap-4 mt-16">

                        <div className="grid grid-cols-3 gap-4">
                            {links.slice(0, 2).map((item, i) => (
                                <Link key={`${item}${i}`} href={item.href} className="uppercase text-[14px] leading-[14px]">
                                    {item.name}
                                </Link>
                            ))}
                        </div>


                        <div className="grid grid-cols-3 gap-4">
                            {links.slice(2).map((item, i) => (
                                <Link key={`${item}${i}`} href={item.href} className="uppercase text-[14px] leading-[14px]">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>


                    <p className='text-[#5C5C5C] text-[14px] leading-[14px] mt-6'>© RAPKOLOGY All Rights Are Reserved 2022.</p>



                </div>


            </div>



        </section>
    )
}

export default Kesfet;