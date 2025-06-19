import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from './SingleSkill';

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "NodeJs",
    icon: FaNodeJs,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "CPP",
    icon: TbBrandCpp,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
];

const AllSkillsSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12my-12'>
        {skills.map((item, index)=>{
            return (
                <div key={index} className='flex flex-col items-center'>
                    <item.icon className='text-7xl text-orange'/>
                    <p className='text-center mt-4 text-white'>{item.skill}</p>
                </div>
            )
        })}
    </div>
  )
}

export default AllSkillsSM