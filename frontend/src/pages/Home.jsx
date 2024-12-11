import React from 'react';
import { Link } from 'react-router-dom';
import About from '../components/About/About';
import ServicesList from '../components/services/ServicesList';
import DoctorsList from '../components/Doctors/DoctorsList';
import FaqList from '../components/Faq/FaqList';

// Import images at the top
import heroimg1 from '../assets/images/hero-img01.png';
import heroimg3 from '../assets/images/hero-img03.png'; // Corrected path for images
import heroimg2 from '../assets/images/hero-img02.png';
import featureImg from '../assets/images/feature-img.png';
import faqImg from '../assets/images/faq-img.png';
import videoIcon from '../assets/images/video-icon.png';
import avatarIcon from '../assets/images/avatar-icon.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';

const Home = () => {
  return (
    <>
      {/* HERO SECTION start */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* HERO CONTENT */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life.
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores vitae temporibus expedita est dicta sequi aut a vero, alias, eligendi voluptatem assumenda error, aliquam sit provident molestias adipisci at pariatur?
                </p>
                <button className="btn">Request an Appointment</button>
              </div>
              {/* HERO COUNTER */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[54px] font-[700] text-headingColor">30+</h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px]  lg:text-[54px] font-[700] text-headingColor">+15</h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px]  lg:text-[54px] font-[700] text-headingColor">100%</h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* HERO IMAGES */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroimg1} alt="hero image" />
              </div>
              <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroimg2} alt="hero image 2" />
                <img className="w-full" src={heroimg3} alt="hero image 3" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* HERO SECTION end */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">Providing the best medical services</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers unmatched, expert health care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {/* Service Item 1 */}
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="icon 1" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Doctor</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-Class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.
                </p>
                <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  {/* Add an icon here if needed */}
                </Link>
              </div>
            </div>

            {/* Service Item 2 */}
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="icon 2" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Location</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-Class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.
                </p>
                <Link to="/locations" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  {/* Add an icon here if needed */}
                </Link>
              </div>
            </div>

            {/* Service Item 3 */}
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="icon 3" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Book Appointment</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-Class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.
                </p>
                <Link to="/appointments" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  {/* Add an icon here if needed */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* Services Section */}
      <ServicesList />

      <section>
        <div className="container">
          <div className="xl:w[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__para text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nemo harum aspernatur unde fuga iusto voluptatibus iste pariatur perspiciatis iure enim, sint ipsa fugiat neque, sequi voluptates voluptate aut?
            </p>
          </div>
        </div>
      </section>

      {/* Feature Section start */}
      <div className="xl:w-[670px]">
        <h2 className="heading">
          Get virtual treatment <br />
          anytime
        </h2>
        <ul className="pl-4">
          <li className="text__para">1. Schedule the appointment directly</li>
          <li className="text__para">2. Search for your physician now</li>
          <li className="text__para">3. View our physicians who are accepting new patients</li>
        </ul>
        <Link to="/">
          <button className="btn">Learn more</button>
        </Link>
      </div>

      {/* Feature Image */}
      <div className="relative z-10 cl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
        <img src={featureImg} alt="Feature image" />
        <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[6px] lg:gap-3">
              <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-heading font-[600]">Tue,24</p>
              <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-heading font-[600]">10:00AM</p>
            </div>
            <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
              <img src={videoIcon} alt="Video icon" />
            </span>
          </div>
          <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlue font-[500] mt-2 lg:mt-4 rounded-full">Consultation</div>
          <div className="flex items-center gap-[6px lg:gap-[10px] mt-2 lg:mt-[18px]">
            <img src={avatarIcon} alt="Avatar icon" />
            <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-heading">Doctor Name</h4>
          </div>
        </div>
      </div>
      {/* Feature Section end */}

      {/* Our Great Doctors start */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text__para text-center">
              We have the most experienced doctors across different specialties providing quality and efficient treatment. Find the right doctor for your needs here.
            </p>
          </div>
        </div>
        <DoctorsList />
      </section>
      {/* Our Great Doctors end */}

      {/* Faq Section */}
      <section className="bg-primaryColor py-[50px] lg:py-[100px] mt-[50px]">
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center text-white">
              Common Questions & Answers
            </h2>
            <p className="text__para text-center text-white mt-[20px]">
              Get answers to the most common questions related to medical services, appointments, treatments, and more.
            </p>
          </div>

          <div className="lg:flex justify-center gap-[90px]">
            <div className="mt-[50px] md:w-[500px]">
              <FaqList />
            </div>
            <div className="hidden lg:block">
              <img className="w-[350px]" src={faqImg} alt="FAQ image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
