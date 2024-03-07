import React from 'react'
import logo from '../assets/koinxLogo.svg';
import { Menu } from 'lucide-react';

function Navbar() {
  return (
      <nav className='py-4 shadow-sm'>
          <div className='max-w-[1536px] flex justify-between items-center px-4 md:px-12 mx-auto'>
            <img src={logo} alt="koinx logo"/>
            <div className='hidden md:flex text-base font-semibold'>
                <menu className='flex gap-8 items-center'>
                  <li>Crypto Taxes</li>
                  <li>Free Tools</li>
                  <li>Resource Center</li>
                </menu>
                <button className='ml-10 py-2 px-6 bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] text-white rounded-md'>Get Started</button>
            </div>
            <Menu className='md:hidden'/>
          </div>
      </nav>
  )
}

export default Navbar