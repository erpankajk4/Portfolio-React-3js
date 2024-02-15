import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import edImag from "../assets/education.png"
const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={education.passout}
      iconStyle={{ background: "#383E56" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={edImag}
            alt={education.collage}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{education.collage}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {education.course}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
          <li
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {education.marks}
          </li>
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
        Here are a few highlights from my academic journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
        Academics.
        </h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)}
       className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((ed, index) => (
            <EducationCard
              key={`education-${index}`}
              education={ed}
            />
          ))}
        </VerticalTimeline>
        </motion.div>
    </>
  );
};

export default SectionWrapper(Education, "academics");
