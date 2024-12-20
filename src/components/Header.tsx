import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <nav className='flex justify-center items-center gap-4 text-white bg-slate-600 h-[50px]'>
    <Link href={"/"} className="">Home</Link>
    <Link href={"/shopplace"} className="">Shop</Link>
    </nav>
  )
}

export default Header