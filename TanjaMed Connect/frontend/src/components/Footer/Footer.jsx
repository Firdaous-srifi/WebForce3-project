import React from 'react'
import { Link } from 'react-scroll'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillGithub, AiOutlineInstagram, AiFillYoutube} from 'react-icons/ai'


const socialLinks = {
  {
    path:  'https://www.youtube.com/in/',
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5'></AiFillYoutube>,
  },
  {
    path:  'https://www.youtube.com/in/',
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5'></AiFillGithub>,
  },
  {
    path:  'https://www.youtube.com/in/',
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5'></AiOutlineInstagram>,
  },
  {
    path:  'https://www.youtube.com/in/',
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5'></RiLinkedinFill>,
  },
};

const quickLink01 = {
  {
    path:"/home",
    display:"Home",
  },
  {
    path:"/",
    display:"About Us",
  },
  {
    path:"/services",
    display:"Services",
  },
  {
    path:"/",
    display:"Blog",
  },
};

const quickLink02 = {
  {
    path:"/find-a-doctor",
    display:"Find a Doctor",
  },
  {
    path:"/",
    display:"Request  an Appointment",

  },
  {
    path:"/",
    display:"Find a Location",
  },
  {
    path:"/",
    display:"Get a Opinion",
  },
};

const quickLink03 = {
  {
    path:"/",
    display:"Donater",
  },
  {
    path:"/contact",
    display:"Contact Us",
  },
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='pb-16 pt-18'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src="TanjaMed Connect/frontend/src/assets/images/logo.png" alt="" />
            <p className='text-[16px] leading-7 font-[400] text-text mt-4'>Copyright  {year} TanjaMed Connect. All rights reserved.</p>
            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link, index) => (
                <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primary hover:border-none'>
                  {Link.icon}
                </Link>
              ))}
            </div>
          </div>
      
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-heading'>
               Quick Links
            </h2>

            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-text'>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-heading'>
                I want to :
            </h2>

            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-text'>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-heading'>
                Support
            </h2>

            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-text'>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer