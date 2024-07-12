import React from 'react'
import Logo from '../asset/Images/rmlogo.png'
import { BiCommentDetail } from "react-icons/bi";


const Navigation = () => {

  return (

    <div className='w-[100%] h-[12vh] bg-[#275eea]'>

      <nav className='w-[100%] h-[100%] flex items-center justify-between xl:px-14 md:px-14 sm:px-12'>

        <div className=" ">
          <h1 className=' text-white text-2xl uppercase font-bold '><img src={Logo} alt="" width={150} /></h1>
        </div>

        <div className="menu p-1">

          <ul className=' flex items-center justify-around w-[100%] text-white font-semibold gap-5'>
          
            <li className='flex items-center justify-center'>Contact Us <BiCommentDetail className=' mx-2 text-xl' /></li>
          </ul>


          
        </div>

      </nav>




    </div>
  )
}

export default Navigation;