import React from 'react'

const Home = () => {
  return (
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
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:text-[54px] font-[700] text-headingColor'>30+</h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Years of Experience</p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:text-[54px] font-[700] text-headingColor'>+15</h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Clinic Location</p>
                </div>
                
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:text-[54px] font-[700] text-headingColor'>100%</h2>
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
                <img className='w-full mb-[30px]' src="TanjaMed Connect/frontend/src/assets/images/hero-img02.png" alt="" />
                <img className='w-full' src="TanjaMed Connect/frontend/src/assets/images/hero-img03.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Home