"use client"
import Homesect from "@/components/Home";
import Navbar from "@/components/Navbar";
import Aboutus from "@/components/Aboutus";
import Videoshowcase from "@/components/Videoshowcase";
import Classes from "@/components/Classes";
import News from "@/components/News";
import Contactus from "@/components/Contactus";
import Footer from "@/components/Footer";
import { Scrollactivecontext } from '@/Context/context'
import { useState } from "react";
import { useRef } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import Link from "next/link";

export default function Home() {
    const [scrollactive, setscrollactive] = useState(false)
    const myRef = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            console.log(entry)
            if (entry.isIntersecting) {setscrollactive(false)}
            else{setscrollactive(true)}
        })
        observer.observe(myRef.current)
        
    }, [])
  return (
    <>
      <Scrollactivecontext.Provider value={scrollactive}>
        <Navbar />
        <section id="home" className='min-h-screen homesect w-full homebg overflow-hidden pb-2.5 xl:pb-0'>
          <div ref={myRef} className="absolute top-[200px] left-0"></div>
            <div className="xl:homecontainer flex overflow-hidden w-full h-full">
                <div className="flex h-full w-full max-w-[300px] md:max-w-[500px] xl:max-w-[1200px] mx-auto gap-8 md:gap-12 xl:gap-16 xl:flex-row flex-col pt-32 md:pt-40 xl:pt-0 px-4 md:px-0">
                    <div className="homeleftside w-full max-w-[300px] xl:max-w-[700px] h-auto md:h-auto md:max-w-[500px] md:mx-auto xl:mx-0 xl:h-[600px] flex flex-col gap-4 md:gap-5 self-end">
                        <div className="head bg-gray-800 p-2 rounded-xl flex h-fit w-fit mx-auto xl:mx-0">
                            <div className='bg-orange-600 p-2 rounded-lg text-base md:text-lg xl:text-2xl text-white'>
                                The Best
                            </div>
                            <div className='text-base md:text-lg xl:text-2xl text-white p-2'>
                                Fitness Club
                            </div>
                        </div>
                        <div className='secondheading h-fit'>
                            <div className='text-3xl md:text-4xl xl:text-6xl font-bold text-white pb-2'>
                                Work Hard To Get A Better Life
                            </div>
                            <div className='text-gray-500 text-sm md:text-base xl:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi totam voluptatem debitis laborum, possimus dolores illo pariatur ab incidunt minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, accusamus!</div>
                        </div>
                        <div className='buttonholderhome xl:mx-0 mx-auto'>
                            <button type="button" className="focus:outline-none text-white bg-orange-600 hover:bg-orange-800 focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-lg md:text-xl xl:text-2xl px-6 md:px-8 xl:px-10 py-3 md:py-3.5 xl:py-4">Get Started</button>
                        </div>
                    </div>
                    <div className='homerightside h-full w-full max-w-[300px] md:max-w-[500px] xl:max-w-[800px] flex flex-col justify-end relative mx-auto xl:mx-0'>
                        <img src="herobanner.png" className='w-full max-w-[280px] h-[350px] md:max-w-[380px] md:h-[480px] xl:max-w-[600px] xl:h-[700px] z-[3] self-center' alt="" />
                        <img src="hero-circle-one.png" className='herocircleone absolute bottom-12 md:bottom-16 xl:bottom-20 animatespin w-[280px] md:w-[380px] xl:w-auto' alt="" />
                        <img src="hero-circle-two.png" className='herocircleone absolute bottom-12 md:bottom-16 xl:bottom-20 animatespin2 w-[280px] md:w-[380px] xl:w-auto' alt="" />
                        <div className='flex flex-col gap-3 md:gap-4 absolute z-[5] text-white bg-gray-900 p-4 md:p-5 xl:p-6 rounded-2xl heartratecard scale-[0.7] md:scale-75 xl:scale-100 right-0 top-12'>
                            <div className='h-[25px] w-[35px] md:h-[28px] md:w-[38px] xl:h-[30px] xl:w-[40px]'><svg xmlns="http://www.w3.org/2000/svg" fill='#FF4500' viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg></div>
                            <div className='text-gray-500 text-base md:text-lg xl:text-xl'>Heart Rate</div>
                            <div className='text-gray-200 text-xl md:text-xl xl:text-2xl font-bold'>100 bpm</div>
                        </div>
                        <div className='flex items-center gap-3 md:gap-4 bg-gray-700 p-4 md:p-5 xl:p-6 absolute z-[5] rounded-2xl caloriescard scale-[0.7] md:scale-75 xl:scale-100 left-0 bottom-24'>
                            <div className='h-[35px] w-[35px] md:h-[38px] md:w-[38px] xl:h-[40px] xl:w-[40px]'><svg xmlns="http://www.w3.org/2000/svg" fill='#FF4500' viewBox="0 0 448 512"><path d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z" /></svg></div>
                            <div>
                                <div className='text-gray-500 text-base md:text-lg xl:text-xl'>Calories Burned</div>
                                <div className='text-gray-200 text-xl md:text-xl xl:text-2xl font-bold'>568</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="#home">
                <div className={`fixed bottom-[30px] right-[30px] bg-[#ff4500] px-[10px] border-2 border-black pb-[15px] pt-[6px] rounded-full z-50 ${scrollactive ? "block topbtn" : "hidden"}`}>
                    <div className="w-[20px] h-[20px]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" /></svg>
                    </div>
                </div>
                </Link>
            </div>
        </section>
        <Aboutus/>
        <Videoshowcase />
        <Classes />
        <News />
        <Contactus />
        <Footer />
      </Scrollactivecontext.Provider>
    </>
  );
}