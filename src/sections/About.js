import React from "react";
import Section from "../components/Section";

function About() {
  return (
    <Section id="about" title="About" className="p-4">
      <div className="mb-10">
        <div className="py-4">
          <p className="mb-4">
            As an experienced technology professional with a strong background
            in SAP HANA and BW development, I am excited to pivot my career
            towards web development. My technical expertise encompasses
            JavaScript, Node.js, React, PHP, MySQL, MongoDB, and an ongoing
            commitment to mastering Svelt/SvelteKit and Docker. My track record
            includes significant achievements, such as creating an application
            that saved £1 million on a key contract with a cost of £8 million
            and developing a reporting suite that enhanced operational
            efficiency by 30%.
          </p>
          <p className="mb-4">
            In my previous role, I introduced Agile methodologies such as Kanban
            and Scrum to my team, fostering a more efficient and collaborative
            working environment. This experience, combined with my skills in
            requirement gathering, stakeholder management, and effective
            communication, positions me uniquely for a mid-tier role in web
            development. My goal is to leverage these competencies to grow into
            a senior leadership position, ideally within a forward-thinking
            organization in the public utilities sector, a start-up, or a
            charity, where I can contribute to significant projects and help
            achieve organizational objectives.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default About;
