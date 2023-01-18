import React from 'react'
import { BiGlobe } from "react-icons/bi"
import { RiUserFill, RiUserAddFill } from "react-icons/ri"

function Header() {
    return (
        <div className='bg-brand-color py-1'>
            <div className="max-w-[80%] mx-auto h-11 flex items-center justify-between">

                <div className='-rotate-6 hover:rotate-0 transition-all'>
                    <a href="/" className='text-primary-brand-color bg-getirYellow rounded-full border-b-2 shadow-sm font-lecker font-bold text-2xl'>
                        HKRY
                    </a>
                </div>

                <nav className='flex gap-x-8'>
                    <a href="/" className='font-semibold text-sm flex items-center gap-x-2 text-white text-opacity-80 transition-all hover:text-opacity-100'>
                        <BiGlobe />
                        Türkçe (TR)
                    </a>

                    <a href="/" className='font-semibold text-sm flex items-center gap-x-2 text-white text-opacity-80 transition-all hover:text-opacity-100'>
                        <RiUserFill />
                        Giriş Yap
                    </a>

                    <a href="/" className='font-semibold text-sm flex items-center gap-x-2 text-white text-opacity-80 transition-all hover:text-opacity-100'>
                        <RiUserAddFill />
                        Kayıt Ol
                    </a>
                </nav>

            </div>
        </div>
    )
}

export default Header