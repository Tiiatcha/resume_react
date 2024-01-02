import React from "react";
import Project from "./Project";

function Projects() {
  return (
    <div>
      <Project
        date="July 2022"
        title="CEASE Hair Salon"
        url="https://ceasesalon.co.uk"
        type="Brochure Site"
        problem={
          <p className="mb-4">
            Cease Salon in Leicester approached me a number of years ago to
            build them a brochure style website for their business. Like with
            many businesses sinse Covid and the cost of living increases the
            needs of the business changed and as such required a refresh to
            reflect their simplified business model.
          </p>
        }
        solution={
          <p className="mb-4">
            Given their simplified business model and associated changes I took
            the opportunity to rebuild the site as a single page brochure style
            site. With this particular project I was guided by a designer who
            specified, colors and fonts to be used.
          </p>
        }
        tags={["React", "JavaScript"]}
      />
      <Project
        date="2019"
        title="Workload Management Web Application - Cadent"
        role="Lead Developer"
        type="Web App"
        problem={
          <p className="mb-4">
            <ul className="list-disc pl-4">
              <li>
                <span className="font-normal">Challenge</span>: The primary
                challenge was to create an efficient system for managing the
                workload of repeatable tasks, including a report library and the
                scheduling of manual report generation and other tasks by the
                report production team.
              </li>
              <li>
                <span className="font-normal">Context</span>: The need was for
                an application that could improve task estimation times for
                better future planning, automate task assignment based on
                dependencies and staff availability, and integrate a report
                library.
              </li>
            </ul>
          </p>
        }
        solution={
          <p className="mb-4">
            <ul className="list-disc pl-4">
              <li>
                <span className="font-normal">Approach</span>: Developed a
                user-friendly web application focusing on task management and
                scheduling efficiency. Implemented iterative testing phases with
                end-users to ensure usability and effectiveness of new features.
              </li>
              <li>
                <span className="font-normal">Key Features</span>: The app
                included a report library, automated scheduling and task
                assignment capabilities, and enhanced task estimation features.
                peers.
              </li>
              <li>
                <span className="font-normal">
                  User Testing and Quality Assurance
                </span>
                : Conducted thorough testing of new features with end-users,
                gathering feedback to refine and optimize the application.
                Established a systematic process for identifying and addressing
                defects, cycling these back into the development workload for
                continuous enhancement.
              </li>
            </ul>
          </p>
        }
        management={
          <p className="mb-4">
            <ul className="list-disc pl-4">
              <li>
                <span className="font-normal">Team Size</span>: Managed a small
                team of junior web developers.
              </li>
              <li>
                <span className="font-normal">Agile Practices</span>: Continued
                use of Agile concepts such as Kanban, daily scrums, pair
                programming to enhance code reliability, and burn down charts
                for progress tracking. Also introduced the use of an electronic
                Kanban through YouTrack and the concept of user stories.
              </li>
              <li>
                <span className="font-normal">Leadership Role</span>:
                <ul className="list-disc pl-4">
                  <li>
                    <span className="font-normal">
                      Coaching and Skill Development
                    </span>
                    : Actively coached team members in PHP and JavaScript,
                    enhancing their technical skills and project contributions.
                  </li>
                  <li>
                    <span className="font-normal">Task Prioritization</span>:
                    Efficiently prioritized tasks to align with project goals
                    and timelines, ensuring optimal use of resources and timely
                    delivery.
                  </li>
                  <li>
                    <span className="font-normal">Stakeholder Management</span>:
                    Managed expectations of stakeholders effectively,
                    maintaining clear communication and setting realistic
                    timelines and deliverables.
                  </li>
                </ul>
              </li>
            </ul>
          </p>
        }
        impact={
          <p className="mb-4">
            <ul className="list-disc pl-4">
              <li>
                <span className="font-normal">Results</span>: The application
                significantly improved the efficiency of managing repeatable
                tasks, leading to better planning and resource allocation.
              </li>
              <li>
                <span className="font-normal">Quantifiable Achievements</span>
                :Streamlined task estimation and scheduling, resulting in more
                efficient operation of the report production team.
              </li>
            </ul>
          </p>
        }
        contribution={
          <p className="mb-4">
            <ul className="list-disc pl-4">
              <li>
                <span className="font-normal">Key Contributions</span>: Apart
                from leading the development of the application, I played a
                crucial role in mentoring junior developers and managing the
                project workflow.
              </li>
              <li>
                <span className="font-normal">Skills Demonstrated</span>:
                Leadership, coaching, technical expertise in web development
                (PHP and JavaScript), stakeholder management, and project
                management.
              </li>
            </ul>
          </p>
        }
        tags={["HTML", "CSS", "PHP", "JavaScript", "BootStrap"]}
      />
      <Project
        date="2017"
        title="Core KPI - Cadent"
        role="Lead SAP HANA Developer/Web Solutions Architect"
        type="Web Based Reporting Suite"
        problem={
          <p className="mb-4">
            <ul className="list-disc pl-4">
              <li>
                <span className="font-normal">Challenge</span>: The primary
                challenge was addressing the gap in reporting individual
                performance within operations at Cadent, particularly focusing
                on 'Start of Day' and 'Log Job' activities, including the usage
                of Long Job requests.
              </li>
              <li>
                <span className="font-normal">Context</span>: The need was for a
                responsive reporting solution accessible on any device connected
                to the corporate network.
              </li>
            </ul>
          </p>
        }
        solution={
          <p className="mb-4">
            <ul className="list-disc pl-4">
              <li>
                <span className="font-normal">Approach</span>: Employed a blend
                of traditional and Agile methodologies to drive project
                development.
              </li>
              <li>
                <span className="font-normal">Key Features</span>: Developed a
                web-based reporting suite using SAP UI5 based on OpenUI5,
                enabling management at different levels to assess team
                performance and individuals to compare their performance against
                peers.
              </li>
            </ul>
          </p>
        }
        management={
          <p className="mb-4">
            <ul className="list-disc pl-4">
              <li>
                <span className="font-normal">Team Size</span>: Small
                development team.
              </li>
              <li>
                <span className="font-normal">Agile Practices</span>: Introduced
                Agile concepts such as Kanban, daily scrums, pair programming to
                enhance code reliability, and burn down charts for progress
                tracking.
              </li>
              <li>
                <span className="font-normal">Leadership Role</span>: Managed
                team dynamics, coached team members, and led the implementation
                of Agile practices to ensure efficient project delivery.
              </li>
            </ul>
          </p>
        }
        impact={
          <p className="mb-4">
            <ul className="list-disc pl-4">
              <li>
                <span className="font-normal">Results</span>: The project
                significantly improved operational efficiency, with 'Start of
                Day' performance increasing by up to 30%.
              </li>
              <li>
                <span className="font-normal">Quantifiable Achievements</span>:
                Enhanced start of day operations by 30%, demonstrating the
                effectiveness of the reporting suite in improving productivity.
                tracking.
              </li>
            </ul>
          </p>
        }
        contribution={
          <p className="mb-4">
            <ul className="list-disc pl-4">
              <li>
                <span className="font-normal">Key Contributions</span>: Led the
                design and development of the solution, managed team operations,
                and introduced Agile methodologies.
              </li>
              <li>
                <span className="font-normal">Skills Demonstrated</span>:Project
                management, team leadership, Agile methodologies, technical
                proficiency in SAP UI5.
              </li>
            </ul>
          </p>
        }
        tags={["HTML", "CSS", "SAP UI5", "JavaScript"]}
      />
    </div>
  );
}

export default Projects;
