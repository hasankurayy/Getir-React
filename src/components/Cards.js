import React from 'react'

function Cards() {
  return (
    <div className='w-[95%] mx-auto grid grid-cols-3 py-8 '>
        <div className='flex flex-col text-center items-center bg-white py-8 px-4 mr-4 rounded-md'>
            <img src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" alt="" />
            <h2 className='text-lg text-primary-brand-color font-semibold pt-7 pb-2'>Her siparişinize bir kampanya</h2>
            <p className='opacity-50'>Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.</p>
        </div>
        <div className='flex flex-col text-center items-center bg-white py-8 px-4 mr-4 rounded-md'>
            <img src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg" alt="" />
            <h2 className='text-lg text-primary-brand-color font-semibold pt-7 pb-2'>Dakikalar içinde kapınızda</h2>
            <p className='opacity-50'>Getir’le siparişiniz dakikalar içinde kapınıza gelir.</p>
        </div>
        <div className='flex flex-col text-center items-center bg-white py-8 px-4 rounded-md'>
            <img src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg" alt="" />
            <h2 className='text-lg text-primary-brand-color font-semibold pt-7 pb-2'>Binlerce çeşit mutluluk</h2>
            <p className='opacity-50'>Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.</p>
        </div>
    </div>
  )
}

export default Cards