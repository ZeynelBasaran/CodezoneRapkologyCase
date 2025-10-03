import React from 'react'
import Image from 'next/image'
import Link from 'next/link';



const navLinks = [
  { name: "HABERLER", path: "/haberler" },
  { name: "ETKİNLİKLER", path: "/etkinlikler" },
  { name: "MÜZİKLER", path: "/muzikler" },
  { name: "VİDEOLAR", path: "/videolar" },
  { name: "İLETİŞİM", path: "/iletisim" },
];


const Navbar = () => {
  return (
    <nav className='w-full fixed top-0 flex items-center justify-center z-50  backdrop-blur-md bg-white/10 border border-[#2A2A2A]  shadow-lg'>
      <div className='flex justify-between items-center h-[80px] lg:px-20 md:px-8 px-4 
         max-w-[1440px] w-full '>


        <div className='flex items-center justify-start w-full'>
          <Image src="/icon/NavbarLogo.png" alt="Logo" width={235} height={60} className='w-[182px] h-[45px] md:w-[235px] md:h-[59px] mr-4 screen11:mr-8' />
          <ul className='hidden  screen8:flex gap-4 screen11:gap-14'>


            {navLinks.map((link) => (
              <li key={link.name} className='text-[14px] cursor-pointer leading-[14px] '>
                <Link key={link.path} href={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

        </div>

        <div className='items-center hidden screen8:flex justify-end w-full'>

          <Image src="/icon/search.svg" alt="Logo" width={23} height={22} className='w-[23px] h-[22px] mr-2 screen11:mr-8 ' />

          <button className='text-[14px] font-bold w-[120px] h-[40px] center text-black bg-white uppercase'>GİRİŞ YAP</button>
        </div>

        <Image src="/icon/burgerIcon.svg" alt="Logo" width={30} height={10} className='w-[23px] h-[22px] screen8:hidden ' />
      </div>
    </nav>
  )
}

export default Navbar