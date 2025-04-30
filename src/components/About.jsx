import React from "react";
const About = () => {
  const info = [
    // { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "10" },
    { text: "Companies Work", count: "01" }
  ];

  // const googleDriveLink = "https://github.com/FaysalMiah55/resume/blob/main/FaysalMh1.pdf";


  // const navigateToResume = () => {
  //   window.open(googleDriveLink, "_blank");
  // };

  const githubLink = "https://github.com/FaysalMiah55/resume/blob/main/faysalMiah.pdf";

const navigateToResume = () => {
  window.open(githubLink, "_blank");
};


  return (
    <section id="about" className="py-4 text-white">
      <div className="text-center mt-4">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        {/* <p className="text-gray-400 my-3 text-lg">My introduction</p> */}
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              I am a Computer Science graduate from <span className="font-bold">North South University (2022)</span>  with a strong passion for Artificial Intelligence and emerging technologies. After completing my degree, I worked as a <span className="font-bold">Trainee Machine Learning Engineer at Nogor Solutions Limited</span> , where I gained hands-on experience in practical AI projects.<br/>

              Currently, I am working as a <span className="font-bold">Software Engineer at Hasan Union</span> , a startup I am part of, where we are building innovative software solutions and exploring AI-driven applications.<br/>

              My technical strengths include 
              <span className="font-bold"> Python, Machine Learning, Deep Learning, Natural Language Processing (NLP), Large Language Models (LLMs), AI Agents, and MLOps </span>. I am also skilled in HTML, CSS, and JavaScript, which allows me to integrate AI models into full-stack applications.<br/>

              With several hands-on projects completed, I’m passionate about building intelligent, impactful systems and always eager to learn, collaborate, and contribute to cutting-edge innovations.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <button className="btn-primary" onClick={navigateToResume}>Check Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
