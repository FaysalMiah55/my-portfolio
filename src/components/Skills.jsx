import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaBrain, FaPython, FaDatabase } from "react-icons/fa";
import { GiArtificialIntelligence, GiTalk } from "react-icons/gi";
import { SiMlflow, SiMongodb } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "Machine Learning",
      icon: <GiArtificialIntelligence size={50} />,
      level: "Intermediate",
      count: 70,
    },
    {
      name: "Deep Learning",
      icon: <FaBrain size={50} />,
      level: "Intermediate",
      count: 60,
    },
    {
      name: "NLP / LLM / RAG",
      icon: <GiTalk size={50} />,
      level: "Intermediate",
      count: 70,
    },
    {
      name: "MLOps",
      icon: <SiMlflow size={50} />,
      level: "Beginner",
      count: 30,
    },
    {
      name: "Python",
      icon: <FaPython size={50} />,
      level: "Intermediate",
      count: 65,
    },
    {
      name: "SQL(MySQL)",
      icon: <FaDatabase size={50} />,
      level: "Intermediate",
      count: 55,
    },
    {
      name: "NoSQL(MongoDB)",
      icon: <SiMongodb size={50} />,
      level: "Beginner",
      count: 30,
    },
    {
      name: "HTML",
      icon: <FaHtml5 size={50} />,
      level: "Intermediate",
      count: 80,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt size={50} />,
      level: "Intermediate",
      count: 70,
    },
    {
      name: "JavaScript",
      icon: <FaJs size={50} />,
      level: "Beginner",
      count: 40,
    },
  ];

  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>

        <div className="flex items-center justify-center mt-12 gap-8 flex-wrap">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-4 rounded-xl"
            >
              <p className="text-xl mb-2">{skill.name}</p>
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600 text-cyan-600">
                  {skill.icon}
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
