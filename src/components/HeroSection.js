import React, { useState } from 'react'
import ReactFlagsSelect from "react-flags-select";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSection() {

    const [selected, setSelected] = useState("TR");

    const phones = {
        US: "+1",
        DE: "+50",
        TR: "+90",
        IT: "+7",
        IN: "+15"
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    }

    return (
        <div className='w-full h-[500px] relative before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-20'>
            <Slider {...settings}>

                <div>
                    <img src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg" className='object-cover h-[500px]' alt="" />
                </div>

                <div>
                    <img src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" className='object-cover h-[500px]' alt="" />
                </div>

                <div>
                    <img src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg" className='object-cover h-[500px]' alt="" />
                </div>

                <div>
                    <img src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg" className='object-cover h-[500px]' alt="" />
                </div>

            </Slider>

            <div className="flex justify-between w-[80%] left-[10%] absolute top-[20%] z-30  text-white">
                <div className='flex flex-col items-center'>
                    <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="Logo" />
                    <h3 className='mt-8 text-4xl text-white font-semibold'>Dakikalar içinde <br /> kapınızda</h3>
                </div>
                <div className="w-[400px] bg-gray-50 rounded-lg p-6 flex flex-col gap-y-5 self-center">
                    <h4 className='text-primary-brand-color text-center font-semibold'>Giriş yap veya kayıt ol</h4>
                    <div className='text-black flex gap-x-2'>
                        <ReactFlagsSelect
                            countries={Object.keys(phones)}
                            customLabels={phones}
                            selected={selected}
                            onSelect={(code) => setSelected(code)}
                            className= "flag-select"
                        />

                        <label className="flex-1 relative block">
                            <input type="text" required className='h-14 px-4 border-2 border-gray-200 rounded-md w-full transition-colors focus:border-primary-brand-color outline-0 peer pt-2 hover:border-primary-brand-color'/>
                            <span className='absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs cursor-pointer peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs'>Telefon Numarası</span>
                        </label>
                    </div>

                    <button className='bg-getirYellow w-full text-sm rounded text-primary-brand-color py-3 font-semibold hover:bg-primary-brand-color hover:text-getirYellow transition-all'>Telefon numarası ile devam et</button>
                </div>
            </div>

        </div>
    )
}

export default HeroSection