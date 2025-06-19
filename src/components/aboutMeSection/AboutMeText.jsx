import React from 'react'
import { Link } from 'react-scroll'

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center max-w-[650px]">
        <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
        <p className='text-white font-special'>
          I'm a software developer with an aerospace engineering background from IIT Kharagpur, class of 2022. I am passionate about modern technologies and its impact on everday lives of people.I have explored android development previously and I am currently focused on building web applications using MERN stack technologies.What sets me apart is my analytical engineering mindset, combined with a creative approach to developing solutions. Outside of coding, I volunteer with NGOs teaching underprivileged children, which keeps me grounded and reminds me of technology's potential to create a positive change. 
        </p>
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange text-white transition-all duration-500 cursor-pointer md:self-start sm:self-center" >
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to='projects'
            className='cursor-pointer text-white hover:text-cyan transition-all duration-500'
          >
            My Projects
          </Link>
        </button>
    </div>
  )
}

export default AboutMeText