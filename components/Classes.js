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
        <section id="classes" className='min-h-[90%] w-[100%] overflow-hidden classessect pt-[150px] xl:pt-[350px] xl:pb-0 pb-[50px]'>
            <div className='classesholder w-[300px] xl:w-[1200px] min-h-[1250px] xl:min-h-[900px] flex flex-col gap-10 items-center mx-auto'>
                <div className='text-orange-600 text-2xl xl:text-4xl bg-red-700 bg-opacity-25 w-fit px-5 py-2 rounded-xl font-semibold'>Our Classes</div>
                <div className='text-white font-bold text-3xl xl:text-5xl text-center xl:text-left'>Fitness Classes For Every Goal</div>
                <div className='classesitem flex gap-[10px] w-[380px] xl:gap-[20px] xl:h-fit h-[1050px] flex-wrap xl:flex-nowrap flex-col xl:flex-row xl:w-[100%] overflow-hidden'>
                    {classesdata.map((val, index) => (
                        <div key={index} className='rounded-xl bg-white w-[380px] h-[500px] classitems slidei'>
                            <div><img src={`${val.img}`} className='w-[380px] h-[230px] object-cover rounded-t-xl' alt="" /></div>
                            <div className='flex items-center w-[380px] '>
                                <div className='pt-8 px-2 '><img src={`${val.icon}`} className='border-r-[1px] border-r-gray-300 px-5' alt="" /></div>
                                <div className='pt-8 px-5 text-2xl font-semibold'>{val.name}</div>
                            </div>
                            <div className='text-gray-600 text-lg py-4 px-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa ipsam esse. Nihil, sed sapiente.</div>
                            <div className='w-[85%] mx-auto'>
                                <div className='flex justify-between'>
                                    <div>Class Full</div>
                                    <div>{val.occupied}%</div>
                                </div>
                                <div className='h-[10px] rounded-2xl w-[100%] bg-orange-500 bg-opacity-40'>
                                    <div className={`h-full w-[${val.occupied}%] bg-red-500 rounded-2xl`}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-[100%] xl:w-fit'>
                    <div onClick={() => {changeslide()}} className='h-[15px] w-[200px] bg-white bg-opacity-70 rounded-xl overflow-hidden mx-auto'>
                        <div  className='h-[100%] w-3/4 bg-red-500 rounded-xl classindicator transi'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Classes
