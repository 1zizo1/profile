import Project from '../Project/Project';

const projects = [
  {
    title: "Project One",
    description: "A description of project one.",
    link: "#",
    image: "https://via.placeholder.com/400",
    github: "https://github.com/username/project-one",
    demo: "https://live-demo.com/project-one"
  },
  {
    title: "Project Two",
    description: "A description of project two.",
    link: "#",
    image: "https://via.placeholder.com/400",
    github: "https://github.com/username/project-two",
    demo: "https://live-demo.com/project-two"
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
