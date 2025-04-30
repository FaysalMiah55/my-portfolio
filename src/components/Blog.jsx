import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import article1 from "../assets/blog/p1.webp";
import article2 from "../assets/blog/p2.webp";
import article3 from "../assets/blog/p3.webp";
import article4 from "../assets/blog/p4.webp";
import article5 from "../assets/blog/p5.webp"; 
import article6 from "../assets/blog/p6.webp";
import article7 from "../assets/blog/p7.webp";
import article8 from "../assets/blog/p8.webp";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Blog = () => {
  const projects = [
    {
      img: article6,
      name: "Transformer Models",
      article_link: "https://medium.com/@faysalMiah/part-1-transformer-models-1b6b3e675cb3",
    },
    {
      img: article7,
      name: "Introduction to Generative AI",
      article_link: "https://medium.com/@faysalMiah/1-introduction-to-generative-ai-48a7505f3486",
    },
    {
      img: article8,
      name: " Data Preprocessing & cleaning",
      article_link: "https://medium.com/@faysalMiah/2-1-data-preprocessing-cleaning-bab26ecb6119",
    },
    {
      img: article1,
      name: "5 PyTorch Functions You Need to Know.",
      article_link: "https://medium.com/@faysalMiah/5-pytorch-functions-you-need-to-know-2259738a3ac3",
    },
    {
      img: article2,
      name: "Simple Linear Regression",
      article_link: "https://medium.com/@faysalMiah/simple-linear-regression-ca4cf01e0e2d",
      //live_link: "",
    },    
    {
      img: article3,
      name: "Multiple Linear Regression",
      article_link: "https://medium.com/@faysalMiah/multiple-linear-regression-9c835d6d8b5b",
    },
    {
      img: article4,
      name: "Polynomial Linear Regression",
      article_link:"https://medium.com/@faysalMiah/polynomial-linear-regression-ee4cb9db34a5",
    },
    {
      img: article5,
      name: "Working with Audio Data",
      article_link: "https://medium.com/@faysalMiah/working-with-audio-data-6833fb195f9",
    },
    
  ];
  return (
    <section id="projects" className="py-20 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Blog</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Here I write articles about technology</p>
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
                      href={project_info.article_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Read More
                    </a>
                    {/* <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live
                    </a> */}
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

export default Blog;
