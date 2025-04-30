import React, { useRef } from "react";
import profile from "../assets/images/profile.jpg";
import Type from "./Type";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaKaggle } from "react-icons/fa";

const socialMediaIcons = [
  { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/faysal-miah-9376651a5/' },
  { icon: <FaGithub />, link: 'https://github.com/FaysalMiah55' },
  { icon: <FaKaggle />, link: 'https://www.kaggle.com/faysalmiah1721758' },
];


// const socialMediaLinks = [
//   'https://www.linkedin.com/in/faysal-miah-9376651a5/',
//   'https://github.com/FaysalMiah55',
//   'https://www.kaggle.com/faysalmiah1721758',

//   // old
//   // "https://www.instagram.com/_aaaryaan__/",
//   // "https://github.com/aryyan0701",
//   // "https://www.linkedin.com/in/aryan-kadam-568083204/",
//   // "https://twitter.com/aaryyan_",
// ];



const Hero = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // const social_media = [
  //   "logo-linkedin",
  //   "logo-github",
  //   "logo-kaggle",
  //   // "logo-twitter",
  // ];
  
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={profile} alt="" className="md:w-2/3 h-auto object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span className="text-cyan-600 md:text-6xl text-5xl">Faysal Miah</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
                <Type/>
              </h4>
          <button className="btn-primary mt-8" onClick={scrollToContact}>Connect with Me</button>
          {/* <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon, index) => (
              <a
                key={icon}
                href={socialMediaLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </a>
            ))}
          </div> */}
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {socialMediaIcons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div ref={contactRef}></div>
    </section>
  );
};

export default Hero;
