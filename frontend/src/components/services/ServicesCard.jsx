import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from "react-icons/bs"

const servicesCard = ({item, index}) => {
  const {name, desc, bgColor, textColor} = item
  return (
    <div className='py-[30px] px-3 lg:px-5'>
        <h2 className='text-[26px] leading-9 text-heading font-[700]'>{name}</h2>
        <p className='text-[16px] leading-7 font-[400] text-text'>{desc}</p>
    <div className='flex items-center justify-between mt-[30px]'>
    <Link
    to="/doctors"
    className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px mx-auto flex items-center justify-center group hover:bg-primary hover:border-none]' 
    >
        <BsArrowRight className="group-hover:text-white w-6 h-5"></BsArrowRight>
    </Link>
    <span className='w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]'
    style={{
        background: `${bgColor}`,
        color: `${textColor}`,
        borderRadius: "6px 0 0 6px",
    }}>
        {index + 1}

    </span>
    </div>

    </div>

  )
}

export default servicesCard