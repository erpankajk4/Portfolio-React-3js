import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import img1 from "../assets/about.gif";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)} // (direction, type, delay, duration)
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex gap-10">
        <motion.p
          variants={fadeIn("right", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Experienced professional with 4 years in Healthcare business & Health
          consulting, along with 3 months as a web developer. Proficient in
          Customer Service, Networking, Relationship Building, and
          Problem-Solving. Actively advancing as a MERN stack Full Stack Web
          Developer, merging analytical skills and business acumen with evolving
          tech proficiency. Aiming for a fluid shift into the IT sector to
          leverage skills in driving innovation and impactful change.' is it
          good introduction
        </motion.p>
        <motion.div
          variants={fadeIn("left", "", 0.1, 1)}
          className="hidden sm:block"
        >
          <img
            src={img1}
            alt="web-development"
            className="w-60 h-60 object-contain"
          />
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
