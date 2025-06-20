import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants.js";
import SingleProject from "./SingleProject.jsx";
import ProjectsText from "./ProjectsText.jsx";

const projects = [
  {
    name: "E-commerce App",
    year: "Mar2025",
    align: "right",
    image: "../../images/website-img-1.jpg",
    link: "https://github.com/Saurabhganvir/E-Commerce-App",
  },
  {
    name: "Book Review System",
    year: "April2025",
    align: "left",
    image: "../../images/website-img-2.webp",
    link: "https://github.com/Saurabhganvir/Book-Review-System",
  },
  {
    name: "Music Mania",
    year: "Jan2023",
    align: "right",
    image: "../../images/website-img-3.jpg",
    link: "https://github.com/Saurabhganvir/Spotify-clone-fe",
  },
  {
    name: "House Price Prediction",
    year: "May2021",
    align: "left",
    image: "../../images/website-img-4.jpg",
    link: "https://github.com/Saurabhganvir/House-price-prediction",
  },
];


const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsMain