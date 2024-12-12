import React from 'react'
import { Link } from 'react-router-dom' // Use React Router's Link for navigation
import aboutImg from '../../assets/images/about.png';
import aboutCardImg from '../../assets/images/about-card.png';


const About = () => {
  return (
    <section>
        <div className='container'>
            <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
                {/**ABOUT IMG */}
                <div className='relative w-3/4 lg:w-[770px] z-10 order-2 lg:order-1'>
                <img src={aboutImg} alt="About" />

                    <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                        <img src={aboutCardImg} alt="AboutCard" />
                    </div>
                </div>
                
                {/**ABOUT CONTENT */}
                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                    <h2 className='heading'>Proud to be one of the nation's best</h2>
                    <p className='text__para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo laboriosam aliquid facilis quaerat laudantium eum cum, beatae dolorum deserunt ea velit cupiditate autem delectus est, illum in qui! Perferendis, repudiandae.</p>
                    <p className='text__para mt-[30px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo molestias praesentium autem laborum cumque vitae officia expedita, ea doloribus rerum voluptatum commodi quasi recusandae veritatis iste esse. Fugiat, ex provident?</p>
                    <Link to="/about">
                        <button className='btn'>Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
