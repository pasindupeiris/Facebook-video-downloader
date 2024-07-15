import React, { useRef, useState } from 'react'
import Logo from '../asset/Images/logo.png';
import { BiPaste } from "react-icons/bi";
import { BiQuestionMark } from "react-icons/bi";
import axios from 'axios';


const Home = () => {


    const inputRef = useRef(null);

    const handlePaste = () => {

        navigator.clipboard.readText().then(clipText => {
            inputRef.current.value = clipText;
            console.log('Clipboard contents: ', inputRef.current.value);
        }).catch(err => {
            console.log('Failed to read clipboard contents: ');
        });
    };

    const [value, setValue] = useState({
        urllink : null
    })

    const hadleChange = (e) => {

        const {name, value} = e.target;

       setValue((preValue) => ({
        ...preValue,
        [name] : value,
       }))


    }

    const [videoInfo, setVideoInfo] = useState(null);

    const handleSubmit = (e) => {  

        e.preventDefault();

        const url = value.urllink; // Assuming 'value.urllink' is the URL you want to pass

        axios.get('http://localhost:5000/getFbVideoInfo', {
            params: {
                url: url // Pass the 'url' as a parameter
            }
        })
        .then(response => {
            setVideoInfo(response.data);
            alert('Video Downloaded Successfully');
        })
        .catch(error => {
            console.error('Error downloading video:', error);
        });
        
        
    }



    return (
        <div className='p-2 flex items-center justify-center w-[100%] xl:h-[90vh] lg:h-[90vh] md:h-[80vh] sm:h-[80vh] xsm:h-[65vh] sm:mx-2 '>

            <div className="content-box xsm:w-[100%]">

                <div className="grid items-center justify-center justify-items-center">
                    <img src={Logo} alt="Logo" className="w-[240px]" />
                    <h3 className=' font-bold text-xl mt-2'>Facebook Video Downloader</h3>
                    <p className=' text-sm font-semibold text-slate-400 mt-1'>Download Facebook Videos Online</p>
                </div>


                <div className="flex items-center justify-center mt-4">

                    <div className="rounded-md xl:p-5 md:p-2 xsm:p-1 sm:p-2 ">

                        <form className="flex border-2 border-[#275eea] rounded-md " onSubmit={handleSubmit}>

                            <input type="text"  ref={inputRef} className="xl:w-[500px] md:w-[100%] xsm:w-[100%] sm:w-[100%]  border-[#275eea] rounded-md  bg-white p-4 text-base  outline-0  " placeholder="Enter Video Link Here..." id="" name="urllink" value={value.urllink}
                            onChange={hadleChange} />
                            
                            <div className="flex w-10 items-center justify-center rounded-tl-md rounded-bl-md border-r border-[#9a9c9fbf] ">
                                <BiPaste className=' text-xl text-slate-600' onClick={handlePaste} />
                            </div>
                            <input type="submit" value="Download" className="bg-[#275eea] p-2 w-[120px] text-white font-semibold hover:bg-blue-800 transition-colors" />

                        </form>
                    </div>

                </div>

                <div className=" md:mt-4 sm:mt-3 xsm:mt-3 flex items-center justify-center justify-items-center p-2">
                    <a href="#new" className="flex items-center justify-center justify-items-center bg-[#181e2d] p-2 w-[auto] text-white font-semibold text-sm hover:bg-[#275eea] transition-colors rounded-sm">    How to use FSAVE.net <BiQuestionMark className=' text-xl font-bold' /> </a>
                </div>

            </div>


        </div>
    )
}

export default Home