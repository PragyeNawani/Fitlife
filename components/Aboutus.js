"use client"
import { Scrollactivecontext } from '@/Context/context'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
const Aboutus = () => {
    const scrollact = useContext(Scrollactivecontext)
    const myRef = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            if (entry.isIntersecting) {}
        })
        observer.observe(myRef.current)
        
    }, [])
  return (
<section id="about" className='w-[100%] min-h-[75%] overflow-hidden'>
<div className='w-[300px] md:w-[600px] xl:w-[1200px] h-[100%] mx-auto pt-[150px] pb-[50px] flex flex-col gap-5 xl:gap-0 xl:flex-row'>
    <div ref={myRef} className="aboutusleftside relative w-[300px] md:w-[600px] md:h-[600px] xl:w-[50%] h-[350px] xl:h-[650px] overflow-hidden mx-auto">
        <img src="about-banner.png" className='h-[300px] md:w-[600px] md:h-[600px] xl:h-[600px] w-[300px] xl:w-[100%]' alt="" />
        <img src="about-circle-one.png" className='aboutcircleone absolute top-[30px] xl:top-[90px] z-[-2] animatespin ' alt="" />
        <img src="about-circle-two.png" className='aboutcircleone absolute top-[30px] xl:top-[90px] z-[-2] animatespin2 ' alt="" />
        <div className='w-full h-1/3 absolute bottom-[50px] bg-[#ff4500] z-[-1] rounded-2xl flex '>
        <div className='self-end w-fit mx-auto fitnessimgbg h-[180px]'>Fitness</div>
        </div>
    </div>
    <div className='aboutusrightside relative w-[300px] md:w-[600px] xl:w-[50%] overflow-hidden xl:pl-[40px] flex flex-col gap-6 h-[500px] xl:h-[650px] mx-auto'>
        <div className='bg-opacity-20 bg-orange-500 w-fit p-5 rounded-2xl text-lg md:text-3xl text-orange-600 font-semibold mx-auto xl:mx-0'>
            About Us
        </div>
        <div className='text-3xl md:text-5xl xl:text-7xl font-semibold'>
            Welcome To Our Fitness Gym
        </div>
        <div className='text-sm md:text-lg xl:text-xl text-gray-500 flex flex-col gap-4'>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, delectus. Quia, pariatur. Deserunt numquam blanditiis, repellat distinctio cupiditate excepturi? Facilis est quidem nihil unde sit ipsam obcaecati dolorum consectetur illo.</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum commodi exercitationem adipisci harum asperiores laudantium?</div>
        </div>
        <div className='flex gap-2 xl:gap-8 justify-between md:justify-center items-center'>
            <img src="about-coach.jpg" className='xl:h-[70px] xl:w-[70px] md:h-[50px] md:w-[50px] h-[40px] w-[40px] rounded-full' alt="" />
            <div className='flex flex-col gap-2 justify-center'>
                <div className='text-lg md:text-xl xl:text-2xl font-semibold'>Denis Robinson</div>
                <div className='tex-xs md:text-lg xl:text-xl text-gray-700'>Our Coach</div>
            </div>
            <div><button type="button" className="focus:outline-none text-white bg-[#ff4500] hover:bg-orange-800 focus:ring-2 focus:ring-orange-300 font-medium rounded-2xl text-sm md:text-lg xl:text-2xl px-4 xl:px-10 py-2 xl:py-5">Explore More</button></div>
        </div>
    </div>
</div>
</section>
  )
}

export default Aboutus
