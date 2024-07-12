import React, { useRef } from 'react'
import Logo from '../asset/Images/logo.png';
import { BiPaste } from "react-icons/bi";
import { BiQuestionMark } from "react-icons/bi";

const Home = () => {


    const inputRef = useRef(null);

    const handlePaste = () => {

        navigator.clipboard.readText().then(clipText => {
            inputRef.current.value = clipText;
            console.log('Clipboard contents: ', inputRef.current.value);
        }).catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
    };



    return (
        <div className='flex items-center justify-center w-[100%] h-[80vh]'>

            <div className="content-box">

                <div className="grid items-center justify-center justify-items-center">
                    <img src={Logo} alt="Logo" className="w-[240px]" />
                    <h3 className=' font-bold text-xl mt-2'>Facebook Video Downloader</h3>
                    <p className=' text-sm font-semibold text-slate-400 mt-1'>Download Facebook Videos Online</p>
                </div>


                <div className="flex items-center justify-center mt-4">

                    <div className="rounded-md p-5">
                        <div className="flex border-2 border-[#275eea] rounded-md">

                            <input type="text"  ref={inputRef} className="w-[500px]  border-[#275eea] rounded-md  bg-white p-4 text-base  outline-0  " placeholder="Enter Video Link Here..." id="" />
                            <div className="flex w-10 items-center justify-center rounded-tl-md rounded-bl-md border-r border-[#9a9c9fbf] ">
                                <BiPaste className=' text-xl text-slate-600' onClick={handlePaste} />
                            </div>
                            <input type="button" value="Download" className="bg-[#275eea] p-2 w-[120px] text-white font-semibold hover:bg-blue-800 transition-colors" />

                        </div>
                    </div>

                </div>

                <div className=" flex items-center justify-center justify-items-center p-2">
                    <button className="flex items-center justify-center justify-items-center bg-[#181e2d] p-2 w-[auto] text-white font-semibold text-sm hover:bg-[#275eea] transition-colors rounded-sm">    How to use FSAVE.net <BiQuestionMark className=' text-xl font-bold' /> </button>
                </div>

            </div>


        </div>
    )
}

export default Home