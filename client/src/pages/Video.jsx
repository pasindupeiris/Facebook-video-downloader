import React, { useEffect, useState } from 'react'
import Logo from '../asset/Images/logo.png';
import { BiQuestionMark } from "react-icons/bi";
import { RiHdLine } from "react-icons/ri";
import { RiVideoLine } from "react-icons/ri";
import Back from './Back';




const Video = () => {

    const [videoInfo, setVideoInfo] = useState({
        thumbnail: null,
        title: null,
        duration_ms: null,
        hd: null,
        sd: null
    });

    useEffect(() => {


        setVideoInfo({
            thumbnail: sessionStorage.getItem('thumbnail'),
            title: sessionStorage.getItem('title'),
            duration_ms: sessionStorage.getItem('time'),
            hd: sessionStorage.getItem('hd'),
            sd: sessionStorage.getItem('sd')
        });



    }, []);




    return (

        <div className=" w-[100%] xl:h-[120vh] lg:h-[120vh] md:h-[100vh] sm:h-[100vh] xsm:h-[100vh] grid items-center justify-center justify-items-center">

            
            <div className="grid items-center justify-center justify-items-center sm:mt-5">
                <img src={Logo} alt="Logo" className="w-[240px]" />
                <h3 className=' font-bold text-xl mt-2'>Facebook Video Downloader</h3>
                <p className=' text-sm font-semibold text-slate-400 mt-1'>Download Facebook Videos Online</p>
            </div>
            <Back />
            <div className="w-[100%] mt-0 h-[auto] xl:flex lg:flex sm:grid xsm:grid sm:p-4 justify-center items-center gap-4">

                <div className="box-1 w-[300px] h-[auto] overflow-hidden border-4 border-[#275eea] rounded-md xsm:w-[100%] sm:w-[100%]">
                    <img src={videoInfo.thumbnail} alt="" width={300} className=' object-cover bg-center w-[300px] h-[250px]' />
                </div>

                <div className="box-1 bg-slate-200 p-4 w-[300px] rounded-md grid gap-6 justify-center align-middle items-center xsm:w-[100%] sm:w-[100%]">
                    <p className=' max-w-[250px] overflow-hidden'> <strong>Title :</strong> {videoInfo.title}</p>
                    <p> <strong>Duration : </strong> {(videoInfo.duration_ms / 60000).toFixed(2)} m</p>
                    <a href={videoInfo.hd} role="button" download="proposed_file_name" className="flex items-center justify-center justify-items-center bg-[#181e2d] p-2 w-[auto] text-white font-semibold text-sm hover:bg-[#275eea] transition-colors rounded-sm"> DOWNLOAD 720p <RiHdLine className='mx-2 text-xl font-bold' /> </a>
                    <p> <a href={videoInfo.sd} role="button" download="proposed_file_name" className="flex items-center justify-center justify-items-center bg-[#181e2d] p-2 w-[auto] text-white font-semibold text-sm hover:bg-[#275eea] transition-colors rounded-sm">DOWNLOAD 360p <RiVideoLine className='mx-2 text-xl font-bold' /> </a></p>
                </div>
            </div>

            <div className=" md:mt-4 sm:mt-3 xsm:mt-3 flex items-center justify-center justify-items-center p-2">
                <a href="#new" className="flex items-center justify-center justify-items-center bg-[#181e2d] p-2 w-[auto] text-white font-semibold text-sm hover:bg-[#275eea] transition-colors rounded-sm">    How to use FSAVE.net <BiQuestionMark className=' text-xl font-bold' /> </a>
            </div>

        </div>
    )
}

export default Video