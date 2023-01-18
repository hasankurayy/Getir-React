import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"
import { MdLanguage } from "react-icons/md"

function Footer() {
    return (
        <div className='py-8 bg-white'>
            <div className='flex w-[95%] mx-auto text-sm pb-8  border-b mb-8' >
                <div className='flex-grow flex flex-col gap-y-5 items-start'>
                    <div className='text-lg text-primary-brand-color'>Getiri İndirin</div>
                    <img className='cursor-pointer' src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                    <img className='cursor-pointer' src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                    <img className='cursor-pointer' src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
                </div>

                <div className='flex-grow flex flex-col gap-y-5'>
                    <div className='text-lg text-primary-brand-color'>Getir'i keşfedin</div>
                    <div>Hakkımızda</div>
                    <div>Kariyer</div>
                    <div>Teknoloji Kariyerleri</div>
                    <div>İletişim</div>
                    <div>Sosyal Sorumluluk Projeleri</div>
                </div>

                <div className='flex-grow flex flex-col gap-y-5'>
                    <div className='text-lg text-primary-brand-color'>Yardıma mı ihtiyacınız var?</div>
                    <div>Sıkça Sorulan Sorular</div>
                    <div>Kişisel Verilerin Korunması</div>
                    <div>Gizlilik Politikası</div>
                    <div>Kullanım Koşulları</div>
                    <div>Çerez Politikası</div>
                </div>

                <div className='flex-grow flex flex-col gap-y-5 '>
                    <div className='text-lg text-primary-brand-color'>İş Ortağımız Olun</div>
                    <div>Bayimiz Olun</div>
                    <div>Deponuzu Kiralayın</div>
                    <div>GetirYemek Restoranı Olun</div>
                    <div>GetirÇarşı İşletmesi Olun</div>
                    <div>Zincir Restoranlar</div>
                </div>
            </div>

            <div className='flex justify-between w-[95%] mx-auto text-sm'>
                <div>© 2023 Getir <span className='text-primary-brand-color ml-3 cursor-pointer'>Bilgi Toplumu Hizmetleri</span></div>
                <div className='flex items-center text-xl gap-x-2 text-gray-storm'>
                    <div className='px-1 py-1 rounded hover:bg-gray-300 cursor-pointer transition-all hover:text-primary-brand-color'>
                        <BsFacebook />
                    </div>
                    <div className='px-1 py-1 rounded hover:bg-gray-300 cursor-pointer transition-all hover:text-primary-brand-color'>
                        <BsTwitter />
                    </div>
                    <div className='px-1 py-1 rounded hover:bg-gray-300 cursor-pointer transition-all hover:text-primary-brand-color'>
                        <BsInstagram />
                    </div>
                    <div className='flex items-center ml-4 px-1 py-1 text-gray-storm hover:bg-gray-300 hover:text-primary-brand-color transition-all rounded cursor-pointer group'>
                        <MdLanguage />
                        <span className='text-sm ml-1 group-hover:text-primary-brand-color'>Türkçe (TR)</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer