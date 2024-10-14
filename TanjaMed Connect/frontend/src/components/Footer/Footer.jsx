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
    display"Home",
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
    display"Find a Doctor",
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
  const year = new Date
  return (
    <div>Footer</div>
  )
}

export default Footer