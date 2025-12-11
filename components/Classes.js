"use client"
import React from 'react'
import classesdata from '@/classesdata'

const Classes = () => {
    const changeslide = () => { 
        let find = document.querySelector(".classindicator")
        if (find) find.classList.toggle("transx")
        let classes = document.querySelectorAll(".classitems")
        let classs = Array.from(classes)
        classs.forEach((item)=>{
            item.classList.toggle("slidex")
        })
     }
    return (
        <section id="classes" className='min-h-[90%] w-full overflow-hidden classessect pt-24 md:pt-32 xl:pt-[350px] pb-12 md:pb-16 xl:pb-0'>
            <div className='classesholder w-full max-w-[320px] md:max-w-[400px] xl:max-w-[1200px] min-h-auto xl:min-h-[900px] flex flex-col gap-8 md:gap-10 items-center mx-auto px-4 md:px-0'>
                <div className='text-orange-600 text-xl md:text-3xl xl:text-4xl bg-red-700 bg-opacity-25 w-fit px-4 md:px-5 py-2 rounded-xl font-semibold'>Our Classes</div>
                <div className='text-white font-bold text-2xl md:text-4xl xl:text-5xl text-center xl:text-left px-2'>Fitness Classes For Every Goal</div>
                <div className='classesitem flex gap-2.5 md:gap-4 xl:gap-[20px] xl:h-fit h-auto flex-wrap xl:flex-nowrap flex-col xl:flex-row w-full max-w-[400px] xl:max-w-full overflow-hidden'>
                    {classesdata.map((val, index) => (
                        <div key={index} className='rounded-xl bg-white w-full max-w-[380px] md:max-w-[400px] h-auto md:h-[520px] xl:h-[500px] classitems slidei mx-auto xl:mx-0 flex-shrink-0'>
                            <div><img src={`${val.img}`} className='w-full h-[200px] md:h-[220px] xl:h-[230px] object-cover rounded-t-xl' alt="" /></div>
                            <div className='flex items-center w-full'>
                                <div className='pt-6 md:pt-7 xl:pt-8 px-2'><img src={`${val.icon}`} className='border-r-[1px] border-r-gray-300 px-3 md:px-4 xl:px-5 h-[40px] md:h-[45px] xl:h-[50px]' alt="" /></div>
                                <div className='pt-6 md:pt-7 xl:pt-8 px-3 md:px-4 xl:px-5 text-xl md:text-xl xl:text-2xl font-semibold'>{val.name}</div>
                            </div>
                            <div className='text-gray-600 text-base md:text-lg py-3 md:py-4 px-5 md:px-6 xl:px-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa ipsam esse. Nihil, sed sapiente.</div>
                            <div className='w-[85%] mx-auto pb-4 md:pb-5'>
                                <div className='flex justify-between text-sm md:text-base'>
                                    <div>Class Full</div>
                                    <div>{val.occupied}%</div>
                                </div>
                                <div className='h-[8px] md:h-[10px] rounded-2xl w-full bg-orange-500 bg-opacity-40 mt-2'>
                                    <div className={`h-full bg-red-500 rounded-2xl`} style={{width: `${val.occupied}%`}}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-full xl:w-fit'>
                    <div onClick={() => {changeslide()}} className='h-[12px] md:h-[15px] w-[150px] md:w-[200px] bg-white bg-opacity-70 rounded-xl overflow-hidden mx-auto cursor-pointer'>
                        <div className='h-full w-3/4 bg-red-500 rounded-xl classindicator transi'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Classes