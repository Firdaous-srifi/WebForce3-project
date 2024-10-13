import React from 'react'
import DoctorsCard from './DoctorsCard'

const DoctorsList = () => {
  return (
    <div className='gird grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {doctors.map(doctor=> (
            <DoctorsCard key={doctor.id} doctor={doctor}></DoctorsCard>
        ))}
    </div>
  )
}

export default DoctorsList