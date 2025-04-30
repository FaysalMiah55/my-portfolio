import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import wheelChair from "../assets/projects/wheelChair.png";
import musicGenre from "../assets/projects/musicGenre.jpg";
import potatoDisease from "../assets/projects/potatoDisease.jpg";
import diseaseCondition from "../assets/projects/diseaseCondition.png";
import frontEnd from "../assets/projects/frontEnd.png"; 
import backEnd from "../assets/projects/backEnd.jpg";
import telegramBot from "../assets/projects/telegramBot.webp";

import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Project = () => {
  const projects = [
    {
      img: telegramBot,
      name: "Telegram Chat Bot",
      code_link: "https://github.com/FaysalMiah55/telegramChatBot",
      // live_link: "",
    },
    {
      img: wheelChair,
      name: "Semi Autonomous Wheelchair",
      code_link: "https://github.com/FaysalMiah55/semi-autonomous-wheelchair-with-real-time-object-detection",
      // live_link: "",
    },
    {
      img: musicGenre,
      name: "Music Genre Classifier",
      code_link: "https://www.kaggle.com/code/faysalmiah1721758/music-genre-classifier?scriptVersionId=209710464",
      //live_link: "",
    },    
    {
      img: potatoDisease,
      name: "Potato Disease Classification",
      code_link: "https://github.com/FaysalMiah55/potato-disease",
     // live_link: "",
    },
    {
      img: diseaseCondition,
      name: "Disease Condition Prediction",
      code_link:"https://github.com/FaysalMiah55/disease-condition-prediction",
      // live_link: "",
    },
    {
      img: frontEnd,
      name: "Frontend Projects",
      code_link: "https://github.com/FaysalMiah55/Frontend-Projects",
      // live_link: "",
    },
    {
      img: backEnd,
      name: "Backend Projects",
      code_link: "https://github.com/FaysalMiah55/Backend-Projects/blob/main/README.md",
      // live_link: "",
    },
  ];
  return (
    <section id="projects" className="py-20 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        {/* <p className="text-gray-400 mt-3 text-lg">My Works</p> */}
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-12/13 w-full h-full ">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg h-80 w-full" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.code_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Sourse Code
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
