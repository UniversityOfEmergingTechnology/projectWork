import React from 'react'
import one from '../../assets/learnCourses/one.svg'
import two from '../../assets/learnCourses/two.svg'
import three from '../../assets/learnCourses/three.svg'

const learnCousesData = [
    {
        img : one,
        title : '01. Learn',
        desc : "Gain the knowledge and skills necessary to learn, graduate, and excel in your chosen field."
    },
    {
        img : two,
        title : '02. Graduate',
        desc : " Enhance your professional skills and gain a competitive edge in the job market."
    },
    {
        img : three,
        title : '03. Work',
        desc : "Our courses are designed to equip you with industry-relevant knowledge and practical expertise."
    },
]

const LearnCourses = () => {
  return (
    <div className='w-[90%] mx-auto flex flex-col py-[80px] px-[50px]'>
        <h3 className='text-center text-[30px] font-walsheimCon leading-normal text-white'>Why Learn with our Courses?</h3>
        <p className='text-center text-[15px] text-white leading-[26px] font-walsheimReg'> Learn, Graduate, Work.</p>

        <div className='flex flex-col gap-4 items-center xl:justify-between lg:flex-row  mt-10'>
            {
                learnCousesData.map((course , index) => (
                    <div key={index} className='h-[350px] rounded-[8px] space-y-8 bg-white flex flex-col items-center justify-center w-[300px]  lg:w-[350px] duration-300 hover:scale-125  hover:border-[#0a2418] hover:border-[2px]'>
                        <img src={course.img} alt="" />
                        <h3 className='font-normal text-[24px] font-walsheimCon'>{course.title}</h3>
                        <p className='text-[#4F547B] text-center leading-[26px] font-walsheimReg text-[15px]' >{course.desc}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default LearnCourses