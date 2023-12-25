import React,{useState,useEffect} from 'react'

export const Header = () => {
const[ScrollPosition,setScrollPosition] = useState(0)
const [menuopen,setmenuopen] = useState(false)
const handleScroll=()=>{
    const position = window.pageYOffset;
    setScrollPosition(position);
}
useEffect(()=>{
 window.addEventListener("scroll", handleScroll, { passive: true });
 return () => {
    window.removeEventListener("scroll", handleScroll);
  };
},[])
  return (
    <div className={`fixed z-20  py-[25px] px-[20px] pr-[40px] transition-all duration-150 w-full ${(ScrollPosition>0 || menuopen) && 'bg-black'}`}>
        <div className='flex justify-between items-center'>
        <div className='flex gap-[30px] items-center'>
            <h1 className='!text-[20px] lg:!text-[30px] xl:!text-[50px] text-[white]'>ADAM MARSH</h1>
          
            <div className='!hidden md:!flex items-center gap-[50px] cursor-pointer'>
            <a  className='!text-[16px] xl:!text-[24px] underline underline-offset-8 text-[white]'>Projects</a>
            <a  className='!text-[16px] xl:!text-[24px] text-[white]'>About</a>
            <a  className='!text-[16px] xl:!text-[24px] text-[white]'>Get in touch</a>
            </div>
           
        </div>
     {!menuopen?
    <i className='block md:!hidden lg:!hidden pi pi-align-justify text-[1rem] text-[white]' onClick={()=>setmenuopen((prev)=>!prev)}></i>
    :<i className='block md:!hidden lg:!hidden pi pi-times text-[1rem] text-[white]' onClick={()=>setmenuopen((prev)=>!prev)}></i> 
    }   
       <button className='!hidden md:!block md:!px-[20px] lg:!px-[20px] lg:!text-[16px] xl:!px-[40px] py-[16px] xl:!text-[24px] bg-transparent cursor-pointer hover:!bg-[#393939] hover:border-[#393939]  text-[white] border-[1px] border-solid border-white'>
        Ideas + Experiments
       </button>
        </div>
        {menuopen && <div className='!flex md:!hidden flex-col gap-[30px] mt-[40px] cursor-pointer'>
            <a  className='!text-[16px] xl:!text-[24px] underline underline-offset-8 text-[white]'>Projects</a>
            <a className='!text-[16px] xl:!text-[24px] text-[white]'>About</a>
            <a className='!text-[16px] xl:!text-[24px] text-[white]'>Get in touch</a>
            <a  className='!text-[16px] xl:!text-[24px] text-[white]'>Ideas + Experiments</a>
            </div>}
    </div>
  )
}
