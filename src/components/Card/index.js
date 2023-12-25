import React from 'react'

export const Card = ({item}) => {
  
  return (
    <div className='flex flex-col w-[150px] overflow-hidden'>
                <div className={`w-[150px] h-[150px] rounded-[35px] overflow-hidden flex justify-center items-center`} style={{background:item.Cardcolor}}>
                    <img src={item?.Logo} alt='img' className='w-[100%] h-[100%]'/>
                </div>
                <div className='flex mt-[20px] justify-center'>
                <p className='flex w-full   text-[white] text-center text-[18px]  flex-wrap break-words'>
                  {item?.text }  
                </p>
                </div>
            </div>
  )
}
