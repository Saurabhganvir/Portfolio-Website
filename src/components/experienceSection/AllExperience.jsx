import { motion } from "framer-motion"
import { fadeIn } from "../../framerMotion/variants"
import { FaArrowRightLong } from "react-icons/fa6";
import SingleExperiecne from "./SingleExperiecne";

const experiences = [
  {
    job: "Supply Chain Intern",
    company: "Tradewell Damya",
    date: "2021 - 2022",
    responsibilities: [
      "Conducting market research, tracking shipments.",
      "Analysing and optimising logistics cost estimates.",
      "Reaching out to distributersand retalers for potential business certainties",
    ],
  },
  {
    job: "Android Developer",
    company: "CityMall",
    date: "2022 ",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of Android applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Maths Teacher",
    company: "Independent",
    date: "2022 - Present",
    responsibilities: [
      "Explaining and facilitating Mathematics concepts.",
      "Help students with their assignments and grade them weekly.",
      "Provide support for students through their learning journey.",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index)=>{
        return (
          <>
            <SingleExperiecne  key={index} experience={experience}/>
            {index < 2? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{once:false, amount:0.7}}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ): "" }
          </>
        )
      })}
    </div>
  )
}

export default AllExperience