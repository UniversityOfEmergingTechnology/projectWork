import React from 'react'

const StartLearning = () => {
  return (
    <div className='flex flex-col lg:flex-row  lg:justify-between gap-8 lg:gap-0 lg:items-center'>
        <p className='text-[30px] text-white font-walsheimCon leading-[46px] font-[700]'>Join more than <span className='text-[#00FF84]'>8 million <br /> learners</span> worldwide</p>
        <button className='flex items-center justify-center bg-[#00FF84] py-[21px] px-[55px] rounded-[8px] font-walsheimCon cursor-pointer text-[16px]'>Start Learning For Free</button>
    </div>
  )
}

export default StartLearning