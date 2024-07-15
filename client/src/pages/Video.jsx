import React from 'react'
import Img from '../asset/Images/dn.png'
import Logo from '../asset/Images/logo.png';
import { BiQuestionMark } from "react-icons/bi";
import { RiHdLine } from "react-icons/ri";
import { RiVideoLine } from "react-icons/ri";



const Video = () => {
    return (

        <div className=" w-[100%] xl:h-[90vh] lg:h-[90vh] md:h-[100vh] sm:h-[100vh] xsm:h-[100vh] grid items-center justify-center justify-items-center">

            <div className="grid items-center justify-center justify-items-center sm:mt-5">
                <img src={Logo} alt="Logo" className="w-[240px]" />
                <h3 className=' font-bold text-xl mt-2'>Facebook Video Downloader</h3>
                <p className=' text-sm font-semibold text-slate-400 mt-1'>Download Facebook Videos Online</p>
            </div>

            <div className="w-[100%] mt-0 h-[auto] xl:flex lg:flex sm:grid xsm:grid sm:p-4 justify-center items-center gap-4">

                <div className="box-1 p-4 w-[300px] border-4 border-[#275eea] rounded-md xsm:w-[100%] sm:w-[100%]">
                    <img src={Img} alt="" width={300} />
                </div>

                <div className="box-1 bg-slate-200 p-4 w-[300px] rounded-md grid gap-6 justify-center align-middle items-center xsm:w-[100%] sm:w-[100%]">
                    <p> <strong>Title :</strong> New video Fb</p>
                    <p> <strong>Duration :</strong> New video Fb</p>
                    <a href="#new" className="flex items-center justify-center justify-items-center bg-[#181e2d] p-2 w-[auto] text-white font-semibold text-sm hover:bg-[#275eea] transition-colors rounded-sm"> DOWNLOAD 720p <RiHdLine className='mx-2 text-xl font-bold' /> </a>
                    <p> <a href="#new" className="flex items-center justify-center justify-items-center bg-[#181e2d] p-2 w-[auto] text-white font-semibold text-sm hover:bg-[#275eea] transition-colors rounded-sm">DOWNLOAD 360p <RiVideoLine className='mx-2 text-xl font-bold' /> </a></p>
                </div>
            </div>

            <div className=" md:mt-4 sm:mt-3 xsm:mt-3 flex items-center justify-center justify-items-center p-2">
                <a href="#new" className="flex items-center justify-center justify-items-center bg-[#181e2d] p-2 w-[auto] text-white font-semibold text-sm hover:bg-[#275eea] transition-colors rounded-sm">    How to use FSAVE.net <BiQuestionMark className=' text-xl font-bold' /> </a>
            </div>

        </div>
    )
}

export default Video