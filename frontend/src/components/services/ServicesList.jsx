import React from 'react';
import ServicesCard from "./ServicesCard";  // Corrected path
import { services } from './../../data/services';

const ServicesList = () => {
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]'>
        {services.map((item) => (
          <ServicesCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
