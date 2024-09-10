"use client"
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Scrollactivecontext } from '@/Context/context'
import Link from 'next/link'
const Navbar = () => {
    const scrollact = useContext(Scrollactivecontext)
    const [navshow, setNavshow] = useState(false)
    return (
        <nav className={`h-0 top-0 left-0 w-[100%] z-50 bg-white ${scrollact?"fixed navscroll":"sticky xl:bg-transparent"}`}>
            <div className='w-[100%] xl:w-[70%] 2xl:w-[65%] xl:mx-auto min-h-2 py-4 flex xl:flex-row justify-between xl:h-fit bg-white xl:bg-transparent items-center'>
                <div className={`text-[#ff4500] ${scrollact?"xl:text-black":"xl:text-white"} my-[30px]  font-bold text-5xl xl:text-4xl flex  items-center gap-2 xl:pb-0`}>
                    <img src="https://cdn-icons-png.flaticon.com/512/38/38464.png" alt="" className={`xl:w-[30px] w-[60px] h-[60px] xl:h-[30px]   ${scrollact?"xl:invert-[0]":"xl:invert-[1]"} rotate-90`} />
                    FitLife
                </div>
                <div onClick={() => { setNavshow(!navshow) }} className='w-[40px] h-[60px] mx-[20px] flex items-center justify-center xl:hidden'><svg xmlns="http://www.w3.org/2000/svg" fill='#ff4500' viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg></div>
                <div className='hidden xl:inline-block'>
                    <div className='flex xl:flex-row xl:items-center gap-10'>
                        <ul className={`flex gap-10 text-3xl xl:text-xl ${scrollact?"text-black":"text-white"} xl:flex-row flex-col text-center xl:text-left`}>
                            <Link href="#home"><li className='text-red-600'>Home</li></Link>
                            <Link href="#about"><li>About Us</li></Link>
                            <Link href="#classes"><li>Classes</li></Link>
                            <Link href="#blog"><li>Blog</li></Link>
                            <Link href="#contact"><li>Contact Us</li></Link>
                        </ul>
                        <button className={`text-2xl  ${scrollact?"text-white bg-orange-600":"text-orange-600 bg-white"} py-4 px-10 rounded-xl outline-none border-none w-fit mx-auto xl:mx-0`}>Join Now</button>
                    </div>
                </div>
            </div>
            <div className={`h-[100vh] w-[100%] absolute top-0 left-0 bg-[#ff4500] naventry ${navshow?"":"hidden"}`}>
                <div className='flex flex-col mt-[200px] xl:flex-row xl:items-center gap-10'>
                    <ul className='flex gap-10 text-3xl xl:text-xl text-white xl:flex-row flex-col text-center xl:text-left font-bold w-[200px] mx-auto'>
                    <Link href="#home"><li onClick={() => { setTimeout(() => {
                        setNavshow(false)
                    }, 200); }}>Home</li></Link>
                    <Link href="#about"><li onClick={() => { setTimeout(() => {
                        setNavshow(false)
                    }, 200); }}>About Us</li></Link>
                    <Link href="#classes"><li onClick={() => { setTimeout(() => {
                        setNavshow(false)
                    }, 200); }}>Classes</li></Link>
                    <Link href="#blog"><li onClick={() => { setTimeout(() => {
                        setNavshow(false)
                    }, 200); }}>Blog</li></Link>
                    <Link href="#contact"><li onClick={() => { setTimeout(() => {
                        setNavshow(false)
                    }, 200); }}>Contact Us</li></Link>
                    </ul>
                    <button className='text-2xl text-orange-600 bg-white  py-4 px-10 rounded-xl outline-none border-none w-fit mx-auto xl:mx-0 hover:font-bold'>Join Now</button>
                </div>
                <div className=' absolute bottom-[150px] w-[100%]'>
                <div onClick={() => { setNavshow(false) }} className='w-[60px] h-[60px] mx-auto'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='white'><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
