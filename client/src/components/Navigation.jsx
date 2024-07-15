import React, { useState } from 'react'
import Logo from '../asset/Images/rmlogo.png'
import { BiCommentDetail } from "react-icons/bi";
import { TbMenuDeep } from "react-icons/tb";

const Navigation = () => {


  const [isOpen ,  setopen] = useState('xl:flex md:flex lg:flex sm:flex xsm:grid items-center justify-around w-[100%] text-white font-semibold gap-5 bg-[#275eea] xsm:absolute xsm:top-[80%] xsm:gap-14 xsm:p-4 xsm:left-0 xsm:hidden xsm:text-left');
  
  const hadleOpen = () => {
    isOpen === 'xl:flex md:flex lg:flex sm:flex xsm:grid items-center justify-around w-[100%] text-white font-semibold gap-5 bg-[#275eea] xsm:absolute xsm:top-[80%] xsm:gap-14 xsm:p-4 xsm:left-0 xsm:hidden xsm:text-left'? setopen('xl:flex md:flex lg:flex sm:flex xsm:grid items-center justify-around w-[100%] text-white font-semibold gap-5 bg-[#275eea] xsm:absolute xsm:top-[80%] xsm:gap-14 xsm:p-4 xsm:left-0 xsm:text-left') : setopen('xl:flex md:flex lg:flex sm:flex xsm:grid items-center justify-around w-[100%] text-white font-semibold gap-5 bg-[#275eea] xsm:absolute xsm:top-[80%] xsm:gap-14 xsm:p-4 xsm:left-0 xsm:hidden xsm:text-left');
  }


  return (

    <div className='w-[100%] h-[12vh] bg-[#275eea]'>

      <nav className='w-[100%] relative h-[100%] flex items-center justify-between xl:px-14 md:px-14 sm:px-4 xsm:px-4'>

        <div className="xsm:w-[100%] bg-[#181e2d] lg:rounded-md xl:rounded-md sm:rounded-md md:rounded-md px-2 xsm:rounded-l-lg ">
          <img src={Logo} alt="" width={150} />
        </div>

        <div className="xl:hidden lg:hidden md:hidden sm:hidden xsm:bg-[#181e2d] p-[10.5px]  xsm:rounded-r-lg">
          <button onClick={hadleOpen} ><TbMenuDeep className=' text-3xl text-white'/></button>
        </div>

        <div className="menu p-1">

          <ul className={isOpen}>
            <li className=' xsm:p-2 flex items-center justify-center  bg-[#181e2d] p-2 w-[auto] text-white font-semibold text-sm hover:bg-[#275eea] transition-colors rounded-md'><a href="/">About Us</a> </li>
            <li className=' xsm:p-2 flex items-center justify-center bg-[#181e2d] p-2 w-[auto] text-white font-semibold text-sm hover:bg-[#275eea] transition-colors rounded-md'>Contact Us <BiCommentDetail className=' mx-2 text-xl' /></li>
          </ul>

        </div>

      </nav>

    </div>
  )
}

export default Navigation;