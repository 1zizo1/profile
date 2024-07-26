import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt, faGraduationCap, faBriefcase, faProjectDiagram, faLanguage } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id="about" className="bg-white p-6 md:p-8 lg:p-12">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-base md:text-lg mb-6">
          I'm a front-end developer with expertise in React and modern web technologies. I build intuitive and attractive web applications.
        </p>

        <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-bold mb-2">Ahmed Mohamed Abd El Aziz Ibrahim</h4>
          <p className="mb-3">
            <FontAwesomeIcon icon={faPhoneAlt} className="inline-block mr-2 text-blue-500" />
            +201116946096, +201067480777
          </p>
          <p className="mb-3">
            <FontAwesomeIcon icon={faEnvelope} className="inline-block mr-2 text-blue-500" />
            ahmedmohmedzizo258@gmail.com, ahmedmohmedzizo25@gmail.com
          </p>
          <p className="mb-3">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="inline-block mr-2 text-blue-500" />
            2 Emam Hassan St, ElMaadi
          </p>

          <p className="mb-3">
            <FontAwesomeIcon icon={faBriefcase} className="inline-block mr-2 text-blue-500" />
            <strong>Objective:</strong><br />
            Seeking a role as a Front-End Developer to advance my skills and contribute to innovative projects.
          </p>

          <p className="mb-3">
            <FontAwesomeIcon icon={faGraduationCap} className="inline-block mr-2 text-blue-500" />
            <strong>Education:</strong><br />
            Bachelor of Computer Science, Modern Academy for Computer Science (July 2023, GPA: 3.0)<br />
            Full-Stack Development at Route Academy (March 2024 - Present)
          </p>

          <p className="mb-3">
            <FontAwesomeIcon icon={faBriefcase} className="inline-block mr-2 text-blue-500" />
            <strong>Skills:</strong><br />
            Proficient in HTML, CSS, JavaScript (React), Tailwind CSS, Node.js, and MySQL.
          </p>

          <p className="mb-3">
            <FontAwesomeIcon icon={faProjectDiagram} className="inline-block mr-2 text-blue-500" />
            <strong>Projects:</strong><br />
            E-commerce site, Booking systems, and various portfolio projects.
          </p>

          <p className="mb-3">
            <FontAwesomeIcon icon={faLanguage} className="inline-block mr-2 text-blue-500" />
            <strong>Languages:</strong><br />
            Arabic (native), English (fluent).
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
