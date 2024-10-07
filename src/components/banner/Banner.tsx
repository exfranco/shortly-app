import React from 'react';
import './Banner.scss';

const Banner: React.FC = () => {
  return (
    <div className="banner flex flex-col-reverse md:flex-row">				
					<div className="banner_description w-full md:w-1/2">
						<h1>
							More than just <br/>
							shorter links
						</h1>
						<h2>
							Build your brand’s recognition and get detailed insights on how your links are performing.
						</h2>

						<a className="btn_get_started cursor-pointer p-2 bg-teal-400 text-white rounded-full text-base">
							Get Started
						</a>
					</div>
					<div className="banner_image w-full md:w-1/2">
						<img src="/images/person.png"/>
					</div>
				</div>	
  );
};

export default Banner;