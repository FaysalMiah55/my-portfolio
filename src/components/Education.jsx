import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      logo: "logo-arrow",
      degree: 'Bachelor of Computer Science and Engineering',
      institution: 'North South University, Bangladesh',
      // grades: 'CGPA: 7.58',
      year: ' [2022]',
      desc: "I completed my Bachelor's degree in Computer Science and Engineering with a major in Artificial Intelligence from North South University, Bangladesh, in 2022. My academic journey focused on machine learning, deep learning, and natural language processing, which laid a strong foundation for solving real-world AI problems through both theoretical understanding and practical implementation.",
    },
    {
      logo: "logo-play",
      degree: 'HSC(Higher Secondary Certificate)',
      institution: 'Narsingdi Govt. College, Narsingdi, Dhaka, Bangladesh',
      // grades: 'Grade: 70.1% ',
      year: ' [2015]',
      desc: "I completed my HSC at Narsingdi Govt. College, Narsingdi, Dhaka, Bangladesh, where I studied Science with a focus on Physics, Chemistry, and Mathematics.",       
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h3 className="text-4xl text-center font-semibold mb-1">
          My <span className="text-cyan-600">Education</span>
        </h3>
      <p className="text-lg text-center font-normal ">My educational details are as follows.</p>
      <hr className="border-gray-300 w-full mb-8" />
      <div>
        {educationDetails.map((edu, index) => (
          <div key={index} className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col items-start mb-4">
            <ion-icon name={edu.logo} class="text-primary text-xl mr-2" />
            <div className="text-lg font-medium mb-2 text-gray-700">Degree: {edu.degree}</div>
            <div className="flex-1">
              <div className="text-base text-gray-500">Institution: {edu.institution}</div>
              {/* <div className="text-base text-gray-500">{edu.grades}</div> */}
              <div className="text-base text-gray-500">Passing Year: {edu.year}</div>
            </div>
            <p className="text-gray-700">Description: {edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
