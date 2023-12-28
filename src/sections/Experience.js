import React from "react";
import ExperienceCard from "./ExperienceCard";
import Tag from "./Tag";

function Experience() {
  return (
    <div>
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
            <Tag tag="HTML" />
            <Tag tag="CSS" />
            <Tag tag="JavaScript" />
            <Tag tag="NodeJs" />
            <Tag tag="React" />
            <Tag tag="PHP" />
            <Tag tag="MySQL" />
            <Tag tag="BootStrap" />
            <Tag tag="TailWind" />
            <Tag tag="NPM" />
            <Tag tag="GIT" />
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
            <Tag tag="SAP HANA" />
            <Tag tag="HTML" />
            <Tag tag="CSS" />
            <Tag tag="JavaScript" />
            <Tag tag="PHP" />
            <Tag tag="MySQL" />
            <Tag tag="BootStrap" />
          </div>
        </div>
      </ExperienceCard>
    </div>
  );
}

export default Experience;
