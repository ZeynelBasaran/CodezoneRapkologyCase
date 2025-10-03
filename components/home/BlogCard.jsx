import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const BlogCard = ({data,kesfet= false}) => {
    return (
        <div className={`text-white flex flex-col ${kesfet ? "gap-[28px] md:gap-[32px] " : "gap-5 "}`}>
            <div className="flex items-center">
                <Image
                    src={data.avatar}
                    alt={data.name}
                    className="w-[33px] h-[33px] rounded-[10px] mr-3 "
                    width={33} height={33}
                />
                <span className="text-[16px] leading-[20px] uppercase">{data.name}</span>
            </div>

            <p className="text-[20px] leading-[21px] md:text-[25px] font-bold letter-spacing-0 md:leading-[26px] uppercase">
                {data.excerpt}
            </p>

            <hr className={`w-full h-px  border-b-[#3B3B3B]`} />

            <Link href="#" className="text-[16px]  letter-spacing-1_5 leading-[18px] cursor-pointer">
                Daha Fazla Oku
            </Link>
        </div>
    )
}

export default BlogCard