import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper'
import {HiStar} from 'react-icons/hi'

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
        <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}}
        breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            760: {
                slidesPerView: 2,
                spaceBetween:20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween:30,
            }
        }}>
        <SwiperSlide>
            <div className='py-[30px] px-5 rounded-3'>
                <div className='flex items-center gap-[13px]'>
                    <img src="/images/patient-avatar.png" alt="" />
                    <div>
                        <h4  className='text-[18px] font-semibold leading-[30px] text-heading'>
                            Muhibur Rahman
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellow w-[18px] h-5'></HiStar>
                            <HiStar className='text-yellow w-[18px] h-5'></HiStar>
                            <HiStar className='text-yellow w-[18px] h-5'></HiStar>
                            <HiStar className='text-yellow w-[18px] h-5'></HiStar>
                            <HiStar className='text-yellow w-[18px] h-5'></HiStar>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-text font-[400]'>"I have taken medical services from them. They treat so well and they are  very professional. I am very satisfied with their services."</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='py-[30px] px-5 rounded-3'>
                <div className='flex items-center gap-[13px]'>
                    <img src="/images/patient-avatar.png" alt="" />
                    <div>
                        <h4  className='text-[18px] font-semibold leading-[30px] text-heading'>
                            Muhibur Rahman
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellow w-[18px] h-5'></HiStar>
                            <HiStar className='text-yellow w-[18px] h-5'></HiStar>
                            <HiStar className='text-yellow w-[18px] h-5'></HiStar>
                            <HiStar className='text-yellow w-[18px] h-5'></HiStar>
                            <HiStar className='text-yellow w-[18px] h-5'></HiStar>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-text font-[400]'>"I have taken medical services from them. They treat so well and they are  very professional. I am very satisfied with their services."</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='py-[30px] px-5 rounded-3'>
                <div className='flex items-center gap-[13px]'>
                    <img src="/images/patient-avatar.png" alt="" />
                    <div>
                        <h4  className='text-[18px] font-semibold leading-[30px] text-heading'>
                            Muhibur Rahman
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellow w-[18px] h-5'></HiStar>
                            <HiStar className='text-yellow w-[18px] h-5'></HiStar>
                            <HiStar className='text-yellow w-[18px] h-5'></HiStar>
                            <HiStar className='text-yellow w-[18px] h-5'></HiStar>
                            <HiStar className='text-yellow w-[18px] h-5'></HiStar>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-text font-[400]'>"I have taken medical services from them. They treat so well and they are  very professional. I am very satisfied with their services."</p>
            </div>
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Testimonial