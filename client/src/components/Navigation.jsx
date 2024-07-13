import React from 'react'
import Logo from '../asset/Images/rmlogo.png'
import { BiCommentDetail } from "react-icons/bi";


const Navigation = () => {

  return (

    <div className='w-[100%] h-[12vh] bg-[#275eea]'>

      <nav className='w-[100%] h-[100%] flex items-center justify-between xl:px-14 md:px-14 sm:px-12 xsm:px-4'>

        <div className=" ">
          <img src={Logo} alt="" width={150} />
        </div>

        <div className="menu p-1">

          <ul className=' xl:flex md:flex lg:flex sm:flex xsm:grid items-center justify-around w-[100%] text-white font-semibold gap-5 bg-[#275eea] xsm:absolute xsm:top-[5.9rem] xsm:gap-14 xsm:p-4 xsm:left-0'>
            <li className=' xsm:p-2 flex items-center justify-center'><a href="/">About Us</a> </li>
            <li className=' xsm:p-2 flex items-center justify-center'>Contact Us <BiCommentDetail className=' mx-2 text-xl' /></li>
          </ul>

        </div>

      </nav>

    </div>
  )
}

export default Navigation;