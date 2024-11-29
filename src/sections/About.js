import React from "react";
import Section from "../components/Section";

function About() {
  return (
    <Section id="about" title="About" className="p-4">
      <div className="mb-10">
        <div className="py-4">
          <p className="mb-4">
            As a seasoned technology professional with a proven track record in
            SAP HANA and BW development, I am now focusing my expertise on web
            development. My technical skill set spans JavaScript, Node.js,
            React, PHP, MySQL, MongoDB, and a continuing commitment to mastering
            Svelte/SvelteKit and Docker. Notable achievements include developing
            an application that saved over £1 million on an £8 million contract
            and designing a reporting suite that improved operational efficiency
            by up to 30%.
          </p>
          <p className="mb-4">
            In my previous role as a lead developer, I was instrumental in
            introducing Agile methodologies such as Kanban and Scrum, creating a
            more collaborative and efficient team environment. Since founding my
            own web development business, Ncodeing, I’ve had the opportunity to
            work on diverse client projects, ranging from website builds to
            infrastructure-focused initiatives. This entrepreneurial venture has
            sharpened my skills in DevOps, client relations, and project
            management while allowing me to share knowledge through blog posts,
            tutorials, and video content.
          </p>
          <p className="mb-4">
            With strong abilities in requirement gathering, stakeholder
            management, and effective communication, I am seeking a mid-tier
            role in web development that allows me to apply and expand my
            expertise. My ultimate goal is to grow into a senior leadership
            position within a forward-thinking organization, whether in the
            public utilities sector, a start-up, or a charity, where I can
            contribute to meaningful projects and drive organizational success.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default About;
