import React from 'react';
import Image from 'next/image';
import './AdvancedStatistics.scss';

const AdvancedStatistics: React.FC = () => {
  return (
    <section className="seccion_advanced">
      <h3>
        Advanced Statistics
      </h3>
      <div className="subtitle">
        Track how your links are performing across the web with our <br/> advanced statistics dashboard.
      </div>

      <ul className="list_statistics md:flex justify-between">
        <li className="bg-white p-5 rounded-lg">
          <div className="ico">
            <Image 
              src="/images/icons/ico-brand.svg" 
              alt="Brand Recognition" 
              width={80} 
              height={80} 
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="title font-bold">
            Brand Recognition
          </div>
          <p>
            Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instill confidence in your content.
          </p>
        </li>
        
        <li className="bg-white p-5 rounded-lg mt-[23px]">
          <div className="ico">
            <Image 
              src="/images/icons/ico-detailed.svg" 
              alt="Detailed Records" 
              width={80} 
              height={80} 
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="title font-bold">
            Detailed Records
          </div>
          <p>
            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
          </p>
        </li>
        
        <li className="bg-white p-5 rounded-lg mt-[46px]">
          <div className="ico">
            <Image 
              src="/images/icons/ico-fully.svg" 
              alt="Fully Customizable" 
              width={80} 
              height={80} 
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="title font-bold">
            Fully Customizable
          </div>
          <p>
            Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default AdvancedStatistics;
