import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
    <>
    <header className='header flex items-center justify-between'>
      <div className="header__logo">
      <Image 
      src='/logo-hn-no-bg.png' 
      alt='hung nguyet logo'
      width={200}
      height={200}
       />
      </div>

      <ul className="header__menu flex">
        <li>Trang chủ</li>
        <li className='pl-3'>Sản phẩm </li>
        <li className='pl-3'>Tin tức</li> 
        <li className='pl-3'>Liên hệ</li>
      </ul>
    </header>
    </>
  )
}
