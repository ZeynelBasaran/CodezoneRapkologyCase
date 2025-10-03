import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlogCard from './BlogCard';



const trendsData = [
    {
        id: "01",

        name: 'Jonathan Stewart',
        avatar: '/image/profile3.png',

        excerpt: 'LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.',
    },
    {
        id: "02",

        name: 'Steve Rogerson',
        avatar: '/image/profile2.png',

        excerpt: 'PRAESENT LOREM ORCI, MATTIS NON EFFICITUR ID CURABITUR AT RISUS SODALES AENEAN AT.',
    },
    {
        id: "03",

        name: 'Ismail Kor',
        avatar: '/image/profile1.png',

        excerpt: 'ULTRICIES DIGNISSIM NIBH UT CURSUS. NAM ET QUAM SIT AMET TURPIS FINIBUS MAXIMUS ...',
    },
    {
        id: "04",

        name: 'Jonathan Stewart',
        avatar: '/image/profile3.png',

        excerpt: 'LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.',
    },
    {
        id: "05",

        name: 'Steve Rogerson',
        avatar: '/image/profile3.png',

        excerpt: 'PRAESENT LOREM ORCI, MATTIS NON EFFICITUR ID CURABITUR AT RISUS SODALES AENEAN AT.',
    },
    {
        id: "06",

        name: 'Ismail Kor',
        avatar: '/image/profile1.png',

        excerpt: 'ULTRICIES DIGNISSIM NIBH UT CURSUS. NAM ET QUAM SIT AMET TURPIS FINIBUS MAXIMUS ...',
    },
];

const Trends = () => {
    return (
        <section className=" text-white ">
            <div className="max-w-[1440px] w-full mx-auto py-24 px-4 md:px-8 lg:px-20 flex flex-col gap-20">

                <div className="text-[60px] font-bold leading-[53px] flex justify-start items-center">
                    <h5> TRENDLER </h5>
                    <Image src="/icon/home/trend1.svg" alt="Logo" width={65} height={65} className='w-[65px] h-[65px] ml-6' />
                </div>



                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                    {trendsData.map((trend, i) => {



                        return (
                            <div key={`${trend.id}${i}`} className={`${i > 3 ? "hidden md:flex" : "flex"} gap-12`}>
                                <span className="text-[60px] leading-[54px] text-[#2A2A2A] font-bold inline-block">
                                    {trend.id}
                                </span>

                                <BlogCard data={trend} />
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <button className="text-[16px] leading-[17px] letter-spacing-1_5 text-black bg-white shadow-custom w-[186px] h-[48px] font-bold">
                        Tümünü Gör
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Trends;