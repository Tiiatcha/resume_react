import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../components/Cards/Experience";
import Tag from "../components/Tag";
import Section from "../components/Section";
const tagAnimateVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
    },
  }),
};
// const MotionLink = motion.custom(Tag);
const expTags = {
  one: [
    "HTML",
    "CSS",
    "JavaScript",
    "NodeJs",
    "React",
    "PHP",
    "MySQL",
    "BootStrap",
    "TailWind",
    "NPM",
    "GIT",
  ],
  two: ["SAP HANA", "HTML", "CSS", "JavaScript", "PHP", "MySQL", "BootStrap"],
};

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ExperienceCard
        from="2017"
        to="Aug 2023"
        company="Cadent Gas"
        title="Lead Developer"
      >
        <div>
          <p className="mb-4">
            In my role as Lead SAP HANA Developer, I successfully managed a
            small team focused on designing, developing, and delivering MI
            reporting solutions. Additionally, I spearheaded the creation of
            custom web applications and microservices for tasks beyond our
            existing technology scope.
          </p>
          <p className="mb-4">
            <h2 className="text-lg">Key Tasks and responsibilities</h2>
            <p className="mb-4">
              <ul className="pl-4 list-disc list-outside">
                <li>
                  Lead a small team of developers in the creation of a work
                  management system.
                </li>
                <li>
                  Driving initiatives like the Back Office Transformation
                  Program and the Regulatory Reporting Automation Project.
                </li>
                <li>
                  Ensuring timely and specification-compliant delivery by my
                  team, coupled with thorough documentation to maintain high
                  standards.
                </li>
                <li>
                  Providing coaching to enhance team skills, ensuring they have
                  the necessary tools to fulfill business needs.
                </li>
                <li>
                  Designing and developing flexible, reusable HANA and BW models
                  to streamline business reporting processes.
                </li>
                <li>
                  Promoting technical best practices within the team, including
                  the development of reusable models and standardized
                  documentation.
                </li>
              </ul>
            </p>
          </p>
          <div className="mt-2 flex flex-wrap">
            {expTags.one.map((tag, i) => {
              console.log(i);
              return (
                <motion.div
                  key={i}
                  variants={tagAnimateVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={i}
                >
                  <Tag tag={tag} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </ExperienceCard>
      <ExperienceCard
        from="2011"
        to="Aug 2017"
        company="National Grid"
        title="Senior MI Developer"
      >
        <div>
          <p>
            In my role as a Junior MI Developer at National Grid, I was
            instrumental in designing, developing, and delivering MI reports. My
            collaboration with Process and Functional teams ensured that our
            outputs aligned with the required specifications, cost, time, and
            quality standards while adhering to governance protocols.
          </p>
          <div className="mt-2 flex flex-wrap">
            {expTags.two.map((tag, i) => {
              console.log(i);
              return (
                <motion.div
                  key={i}
                  variants={tagAnimateVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={i}
                >
                  <Tag tag={tag} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </ExperienceCard>
    </Section>
  );
}

export default Experience;
