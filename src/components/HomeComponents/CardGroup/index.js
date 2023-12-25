import React, { useState } from 'react'
import Logo from "../../../assets/royal-logo.svg"
import { Card } from '../../Card'
export const CardGroup = () => {
    const[cardlist] = useState([
        {text:"NatWest International",Logo:Logo,Cardcolor:"white"},
        {text:"NatWest International",Logo:Logo,Cardcolor:"white"},
        {text:"NatWest International",Logo:Logo,Cardcolor:"white"},
        {text:"NatWest International",Logo:Logo,Cardcolor:"white"},
        {text:"NatWest International",Logo:Logo,Cardcolor:"white"},
        {text:"NatWest International",Logo:Logo,Cardcolor:"white"}
    ])
  return (
    <div className='w-full h-auto bg-purple-500 pt-[50px] pb-[30px] '>
        <p className='w-full !pl-8 md:!pl-16 !text-[20px] md:!text-[24px]  max-w-[560px] flex-wrap break-words text-[white]'>
        Leading visual experience design for the NatWest Group apps, used 4.2 billion times annually. 
        </p>
        <div className='flex !justify-center lg:!justify-end !pr-[0px] lg:!pr-[60px] flex-wrap gap-[25px] mt-[10rem]'>
            {cardlist.map((item,index)=>{
                return(
                    <Card key={index} item={item}/>
                )
            })}
           
        </div>
        <i className='pi pi-arrow-right text-[4rem] mt-[10rem] text-[white] !pl-8 md:!pl-16'></i>
    </div>
  )
}
