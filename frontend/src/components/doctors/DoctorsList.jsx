import React, { useState, useEffect } from 'react';
import DoctorsCard from './DoctorsCard';



const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);



  
  useEffect(() => {
    // Fetch doctors from API (replace with your actual API endpoint)
    fetch('/api/doctors')
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.error('Error fetching doctors:', error));
  }, []);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      {doctors.length > 0 ? (
        doctors.map((doctor) => (
          <DoctorsCard key={doctor.id} doctor={doctor} />
        ))
      ) : (
        <p>Loading doctors...</p>
      )}
    </div>
  );
};

export default DoctorsList;
