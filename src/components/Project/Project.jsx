/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line no-unused-vars
import { faSomeIcon } from '@fortawesome/free-brands-svg-icons';

const Project = ({ project }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
      <p className="text-base mb-4">{project.description}</p>
      <div className="flex justify-between">
        <a href={project.github} className="text-blue-500 hover:underline flex items-center">
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          GitHub
        </a>
        <a href={project.demo} className="text-blue-500 hover:underline flex items-center">
          <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default Project;
