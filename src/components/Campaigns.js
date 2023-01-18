import React from 'react'

function Campaigns() {
  return (
    <div className='w-[95%] mx-auto mt-9 py-8'>
        <h3 className='text-gray-600 text-sm font-semibold py-5'>Kampanyalar</h3>
        <div className='flex relative h-[312px] bg-purple-kampanya rounded-lg bg-primary-brand-color'>
            <div className='w-1/2 py-16 px-12 text-white'>
                <p className='font-bold text-3xl mb-3'>Getir'i indirin</p>
                <p className='font-semibold mb-8'>İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim</p>
                <div className='flex gap-x-3'>
                    <img className='cursor-pointer' src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                    <img className='cursor-pointer' src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                    <img className='cursor-pointer' src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
                </div>
            </div>
            <div className='w-1/2 absolute bottom-0 right-0'>
                <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Campaigns