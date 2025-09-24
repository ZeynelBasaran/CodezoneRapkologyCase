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
    <nav className='w-full flex justify-between items-center h-[80px] px-20'>


      <div className='flex items-center justify-start'>
        <Image src="/icon/NavbarLogo.png" alt="Logo" width={235} height={60} className='w-[235px] h-[59px] mr-8' />
        <ul className='flex gap-14'>


          {navLinks.map((link) => (
            <li className='text-[14px] cursor-pointer leading-[14px] '>
              <Link key={link.path} href={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

      </div>

      <div className='flex items-center'>

        <Image src="/icon/search.svg" alt="Logo" width={23} height={22} className='w-[23px] h-[22px] mr-8' />

        <button className='text-[14px] font-bold w-[120px] h-[40px] center text-black bg-white'>Giriş Yap</button>
      </div>
    </nav>
  )
}

export default Navbar