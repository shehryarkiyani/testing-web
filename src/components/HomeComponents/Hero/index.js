import React from 'react'
import { Header } from '../../Header'
import VideoBg from "../../../assets/videoBg.mp4"
export const Hero = () => {
  return (
    <div className='relative  justify-end w-full h-[800px]'>
    <Header/>    
    <video src={VideoBg} className='w-full h-full object-cover' autoPlay loop muted/>
    <div className='flex flex-col  absolute bottom-16 !left-8 md:!left-16 text-[white]'>
        <h1 className='!text-[40px] md:!text-[80px] font-[700]'>Hello</h1>
        <p className='!text-[20px] md:!text-[30px] w-full  max-w-[650px] flex-wrap break-words'>I'm Adam, a creative leader, thinker, and maker from London; helping the world's best brands innovate - every day</p>
        <span className='flex cursor-pointer z-10 items-center text-[24px] font-[700] mt-[30px] gap-[20px]'>
            <i className='pi pi-arrow-down text-[2rem] text-[white] font-bold'></i>
            Explore Work</span>
    </div>
    </div>
  )
}
