import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>I have some hoobies too</p>
        <h2 className={`${styles.sectionHeadText}`}>Hobbies.</h2>
      </motion.div>
      <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)}>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          <li className="text-white-100  pl-1 tracking-wider">
            Reading the Bhagavad Gita for emotional stability and focus.
          </li>
          <li className="text-white-100  pl-1 tracking-wider">
            Keeping updated on new technologies, especially in AI.
          </li>
          <li className="text-white-100  pl-1 tracking-wider">
            Exploring Ayurveda for holistic well-being advocacy.
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
