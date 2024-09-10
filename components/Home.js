"use client"
import React from 'react'
const Home = () => {
    return (
        <section id="home" className='h-[100vh] xl:h-[100vh] homesect w-[100%] homebg overflow-hidden pb-[10px] xl:pb-[0]'>
            <div className="xl:homecontainer flex overflow-hidden w-[100%] h-[100%]">
                <div className="flex h-[100%] w-[300px] md:w-[500px] xl:w-[1200px] mx-auto gap-16 xl:flex-row flex-col pt-[180px] xl:pt-0">
                    <div className="homeleftside w-[300px] xl:w-[700px] h-[400px] md:h-[500px] md:w-[500px] md:mx-auto xl:mx-0 xl:h-[600px] flex flex-col gap-5 self-end">
                        <div className="head bg-gray-800 p-2 rounded-xl flex h-fit w-fit mx-auto xl:mx-0">
                            <div className='bg-orange-600 p-2 rounded-lg text-lg md:text-xl xl:text-2xl text-white'>
                                The Best
                            </div>
                            <div className='text-lg md:text-xl xl:text-2xl text-white p-2'>
                                Fitness Club
                            </div>
                        </div>
                        <div className='secondheading h-fit'>
                            <div className='text-4xl md:text-5xl xl:text-6xl font-bold text-white pb-2'>
                                Work Hard To Get A Better Life
                            </div>
                            <div className='text-gray-500 text-lg md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi totam voluptatem debitis laborum, possimus dolores illo pariatur ab incidunt minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, accusamus!</div>
                        </div>
                        <div className='buttonholderhome xl:mx-0 mx-auto'>
                            <button type="button" className="focus:outline-none text-white bg-orange-600 hover:bg-orange-800 focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-2xl px-10 py-4">Get Started</button>
                        </div>
                    </div>
                    <div className='homerightside h-[100%] w-[300px] md:w-[500px] xl:w-[800px] flex flex-col justify-end relative mx-auto xl:mx-0'>
                        <img src="herobanner.png" className='w-[300px] h-[400px] md:w-[400px] md:h-[500px] xl:w-[600px] xl:h-[700px] z-[3] self-center' alt="" />
                        <img src="hero-circle-one.png" className='herocircleone absolute bottom-20 animatespin' alt="" />
                        <img src="hero-circle-two.png" className='herocircleone absolute bottom-20 animatespin2' alt="" />
                        <div className='flex flex-col gap-4 absolute z-[5] text-white bg-gray-900 p-6 rounded-2xl heartratecard scale-50 md:scale-75 xl:scale-100'>
                            <div className='h-[30px] w-[40px]'><svg xmlns="http://www.w3.org/2000/svg" fill='#FF4500' viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg></div>
                            <div className='text-gray-500 text-xl'>Heart Rate</div>
                            <div className='text-gray-200 text-2xl font-bold'>100 bpm</div>
                        </div>
                        <div className='flex items-center gap-4 bg-gray-700 p-6 absolute z-[5] rounded-2xl caloriescard scale-50 md:scale-75 xl:scale-100'>
                            <div className='h-[40px] w-[40px]'><svg xmlns="http://www.w3.org/2000/svg" fill='#FF4500' viewBox="0 0 448 512"><path d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z" /></svg></div>
                            <div>
                                <div className='text-gray-500 text-xl'>Calories Burned</div>
                                <div className='text-gray-200 text-2xl font-bold'>568</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`fixed bottom-[30px] right-[30px] bg-[#ff4500] px-[10px] border-2 border-black pb-[15px] pt-[6px] rounded-full ${scrollactive ? "block topbtn" : "hidden"}`}>
                    <div className="w-[20px] h-[20px]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" /></svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
