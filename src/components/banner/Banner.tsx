import React from 'react';
import Image from 'next/image';
import './Banner.scss';
import Button from '../button/Button';

const Banner: React.FC = () => {
  return (
    <div className="banner flex flex-col-reverse md:flex-row">				
      <div className="banner_description w-full gap-4 flex flex-col md:w-1/2">
        <h1>
          More than just <br/>
          shorter links
        </h1>
        <h2>
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </h2>
        <Button label="Get Started" alignment="left" width="w-177" />
      </div>
      <div className="banner_image w-full md:w-1/2">
        <Image 
          src="/images/person.svg" 
          alt="Shortly App" 
          width={790} 
          height={519}
		  priority
        />
      </div>
    </div>	
  );
};

export default Banner;
