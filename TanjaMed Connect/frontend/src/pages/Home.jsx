import React from 'react'
import { Link } from 'react-router-dom'
import About from '../components/About/About'
import { BsArrowRight } from 'react-router-dom'
import ServicesList from '../components/services/ServicesList'
import DoctorsList from '../components/doctors/DoctorsList'


const Home = () => {
  return (
    <>
    {/*HERO SECTION */}
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/*HERO CONTENT */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                  We help patients live a healthy, longer life.
                </h1>
                <p className='text__para'>Lllorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores vitae temporibus expedita est dicta sequi aut a vero, alias, eligendi voluptatem assumenda error, aliquam sit provident molestias adipisci at pariatur?</p>
                <button className='btn'>Request an Appointment</button>
              </div>
              {/*HERO COUNTER */}
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[54px] font-[700] text-headingColor'>30+</h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Years of Experience</p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px]  lg:text-[54px] font-[700] text-headingColor'>+15</h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Clinic Location</p>
                </div>
                
                <div>
                  <h2 className='text-[36px] leading-[56px]  lg:text-[54px] font-[700] text-headingColor'>100%</h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/**HERO CONTENT */}
            <div className='flex gap-[30px] justify-end'>
              <div>
                <img className='w-full' src="" alt="TanjaMed Connect/frontend/src/assets/images/hero-img01.png" />
              </div>
              <div className='mt-[30px]'>
                <img className='w-full mb-[30px]' src={hero-img02} alt="" />
                <img className='w-full' src="TanjaMed Connect/frontend/src/assets/images/hero-img03.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/**HERO SECTION */}
      <section>
        <div className='container'>
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Providing the best medical services</h2>
            <p className='text__para text-center'>World-class care for everyone. Our health system offers unmatched, expert health care</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src="icon01.png" alt="" />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Doctor</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>World-Class care for everyone. Our health system offers unmatched, expert helath care. From the lab to the clinic</p>
                <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5"></BsArrowRight>
                
                </Link>
              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src="icon02.png" alt="" />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Location</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>World-Class care for everyone. Our health system offers unmatched, expert helath care. From the lab to the clinic</p>
                <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5"></BsArrowRight>
                </Link>
              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src="icon03.png" alt="" />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book Appointment</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>World-Class care for everyone. Our health system offers unmatched, expert helath care. From the lab to the clinic</p>
                <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5"></BsArrowRight>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <About></About>
      {/*services section start */}
      <ServicesList></ServicesList>
      <section>
        <div className='container'>
          <div className='xl:w[470px] mx-auto'>
            <h2 className='heading text-center'>our medical services</h2>
            <p className='text__para text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nemo harum aspernatur unde fuga iusto voluptatibus iste pariatur perspiciatis iure enim, sint ipsa fugiat neque, sequi voluptates voluptate aut?</p>
          </div>
        </div>
      </section>
      {/*services section end */}
      {/**Feature Section start*/}
      <div className='xl:w-[670px]'>
        <h2 className='heading'>Get virtual treatement <br></br>anytime</h2>
        <ul className='pl-4'>
          <li className='text__para'>1.schedule the appointment directly</li>
          <li className='text__para'>2.Search for your physician now</li>
          <li className='text__para'>3. View our physicians who are accepting new patients</li>
        </ul>
        <Link to="/">
        <button className='btn'>learn more</button>
        </Link>
      </div>
      {/**feature img */}
      <div className='relative z-10 cl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
        <img src="TanjaMed Connect/frontend/src/assets/images/feature-img.png" alt="" />
        <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-[6px] lg:gap-3'>
              <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-heading font-[600]'>Tue,24</p>
              <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-heading font-[600]'>10:00AM</p>
            </div>
            <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
              <img src="TanjaMed Connect/frontend/src/assets/images/video-icon.png" alt="" />
            </span>
          </div>
          <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlue font-[500] mt-2 lg:mt-4 rounded-full'>Consultation</div>
          <div className='flex items-center gap-[6px lg:gap-[10px] mt-2 lg:mt-[18px]'>
            <img src="TanjaMed Connect/frontend/src/assets/images/avatar-icon.png" alt="" />
            <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700} text-heading'></h4>
          </div>
        </div>
      </div>

      {/**Feature Section end*/}

      {/**our great doctors start*/}
      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our great doctors</h2>
            <p className='text__para text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officiis adipisci perspiciatis .</p>
          </div>
          <DoctorsList></DoctorsList>
        </div>
      </section>
      {/**our great doctors end*/}
      
      </>
  )
}

export default Home