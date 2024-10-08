import React from 'react';
import Image from 'next/image';
import './Footer.scss';
import Button from '../button/Button';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="get_started gap-4 flex flex-col items-center justify-center h-screen">
        <div className="title">
          Boost your links today
        </div>
        <Button label="Get Started" width="w-177" />
      </div>

      <div className="footer_detail items-center">
        <div className="container md:flex md:justify-between">    
          <div className="logo text-lg">
            Shortly
          </div>
          
          <ul className="menu flex">
            <li>
              <a href="#" className="tit">Features</a>
              <a href="#">Link Shortening</a>
              <a href="#">Branded Links</a>
              <a href="#">Analytics</a>
            </li>
            <li>
              <a href="#" className="tit">Resources</a>
              <a href="#">Blog</a>
              <a href="#">Developers</a>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#" className="tit">Company</a>
              <a href="#">About</a>
              <a href="#">Our Team</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </li>
          </ul>
          
          <div className="redes flex justify-between">
            <a href="#" target="_blank">
              <Image 
                src="/images/icons/icon-instagram.svg" 
                alt="Instagram Icon" 
                width={24} 
                height={24} 
                style={{ width: '24px', height: 'auto' }}
              />
            </a>
            <a href="#" target="_blank">
              <Image 
                src="/images/icons/icon-pinterest.svg" 
                alt="Pinterest Icon" 
                width={24} 
                height={24} 
                style={{ width: '24px', height: 'auto' }}
              />
            </a>
            <a href="#" target="_blank">
              <Image 
                src="/images/icons/icon-twitter.svg" 
                alt="Twitter Icon" 
                width={24} 
                height={24} 
                style={{ width: '24px', height: 'auto' }}
              />
            </a>
            <a href="#" target="_blank">
              <Image 
                src="/images/icons/icon-facebook.svg" 
                alt="Facebook Icon" 
                width={24} 
                height={24} 
                style={{ width: '24px', height: 'auto' }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
