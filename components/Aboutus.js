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
<section id="about" className='w-full min-h-[75%] overflow-hidden'>
<div className='w-full max-w-[300px] md:max-w-[600px] xl:max-w-[1200px] h-full mx-auto pt-24 md:pt-32 xl:pt-[150px] pb-12 md:pb-16 xl:pb-[50px] flex flex-col gap-8 md:gap-10 xl:gap-0 xl:flex-row px-4 md:px-0'>
    <div ref={myRef} className="aboutusleftside relative w-full max-w-[300px] md:max-w-[600px] md:h-[500px] xl:w-[50%] h-[350px] xl:h-[650px] overflow-hidden mx-auto">
        <img src="about-banner.png" className='h-[300px] w-full md:h-[500px] xl:h-[600px] object-contain' alt="" />
        <img src="about-circle-one.png" className='aboutcircleone absolute top-[30px] md:top-[50px] xl:top-[90px] z-[-2] animatespin w-[280px] md:w-[480px] xl:w-auto' alt="" />
        <img src="about-circle-two.png" className='aboutcircleone absolute top-[30px] md:top-[50px] xl:top-[90px] z-[-2] animatespin2 w-[280px] md:w-[480px] xl:w-auto' alt="" />
        <div className='w-full h-1/3 absolute bottom-[30px] md:bottom-[40px] xl:bottom-[50px] bg-[#ff4500] z-[-1] rounded-2xl flex'>
        <div className='self-end w-fit mx-auto fitnessimgbg h-[100px] md:h-[140px] xl:h-[180px]'>Fitness</div>
        </div>
    </div>
    <div className='aboutusrightside relative w-full max-w-[300px] md:max-w-[600px] xl:w-[50%] overflow-hidden xl:pl-[40px] flex flex-col gap-4 md:gap-5 xl:gap-6 h-auto xl:h-[650px] mx-auto'>
        <div className='bg-opacity-20 bg-orange-500 w-fit p-3 md:p-4 xl:p-5 rounded-2xl text-lg md:text-2xl xl:text-3xl text-orange-600 font-semibold mx-auto xl:mx-0'>
            About Us
        </div>
        <div className='text-2xl md:text-4xl xl:text-7xl font-semibold text-center xl:text-left'>
            Welcome To Our Fitness Gym
        </div>
        <div className='text-sm md:text-base xl:text-xl text-gray-500 flex flex-col gap-3 md:gap-4 text-center xl:text-left'>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, delectus. Quia, pariatur. Deserunt numquam blanditiis, repellat distinctio cupiditate excepturi? Facilis est quidem nihil unde sit ipsam obcaecati dolorum consectetur illo.</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum commodi exercitationem adipisci harum asperiores laudantium?</div>
        </div>
        <div className='flex gap-3 md:gap-4 xl:gap-8 justify-center xl:justify-start items-center flex-wrap md:flex-nowrap'>
            <img src="about-coach.jpg" className='h-[40px] w-[40px] md:h-[50px] md:w-[50px] xl:h-[70px] xl:w-[70px] rounded-full flex-shrink-0' alt="" />
            <div className='flex flex-col gap-1 md:gap-2 justify-center text-center xl:text-left'>
                <div className='text-lg md:text-xl xl:text-2xl font-semibold'>Denis Robinson</div>
                <div className='text-xs md:text-base xl:text-xl text-gray-700'>Our Coach</div>
            </div>
            <div><button type="button" className="focus:outline-none text-white bg-[#ff4500] hover:bg-orange-800 focus:ring-2 focus:ring-orange-300 font-medium rounded-2xl text-sm md:text-base xl:text-2xl px-4 md:px-6 xl:px-10 py-2 md:py-3 xl:py-5">Explore More</button></div>
        </div>
    </div>
</div>
</section>
  )
}

export default Aboutus