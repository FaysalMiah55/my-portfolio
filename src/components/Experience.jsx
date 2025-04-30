import React from 'react';

const Experience = () => {
  const experienceDetails = [
    {
      // logo: "logo-arrow",
      designation: 'Lead Machine Learning Engineer',
      company: 'Hassan Union, Bangladesh',
      year: ' [Sept 2023 - present]',
      desc: "I am currently working as a Lead Machine Learning Engineer at Hassan Union, Bangladesh. My role involves leading a team of engineers in developing and deploying machine learning models for various applications. I am responsible for overseeing the entire machine learning pipeline, from data collection and preprocessing to model training and evaluation. I also collaborate with cross-functional teams to ensure that our models meet the needs of our clients and stakeholders.",
    },
    {
      // logo: "logo-play",
      designation: 'Trainee Machine Learning Engineer',
      company: 'Nogor Solution Limited, Bangladesh',
      year: ' [March 2023 - August 2023]',
      desc: "I worked as a Trainee Machine Learning Engineer at Nogor Solution Limited, Bangladesh. During my internship, I gained hands-on experience in developing machine learning models for various applications. I worked on projects involving data preprocessing, feature engineering, model training, and evaluation. I also collaborated with senior engineers to learn best practices in machine learning and data science.",       
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h3 className="text-4xl text-center font-semibold mb-1">
          My <span className="text-cyan-600">Experience</span>
        </h3>
      <p className="text-lg text-center font-normal ">My job experience details are as follows.</p>
      <hr className="border-gray-300 w-full mb-8" />
      <div>
        {experienceDetails.map((exp, index) => (
          <div key={index} className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col items-start mb-4">
            <ion-icon name={exp.logo} class="text-primary text-xl mr-2" />
            <div className="text-lg font-medium mb-2 text-gray-700">Designation: {exp.designation}</div>
            <div className="flex-1">
              <div className="text-base text-gray-500">Company: {exp.company}</div>
              <div className="text-base text-gray-500">{exp.year}</div>
            </div>
            <p className="text-gray-700">Description: {exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
