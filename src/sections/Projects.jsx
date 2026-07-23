import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import medibook from "../assets/medibook.png";

function Projects() {
  
  const [project, setProject] = useState(null);

  // Projects array storing details of each project
  const projects = [
    {
      id: 1,
      title: "Medibook - Doctor appointment booking system",
      image: medibook,
      description:
        "MediBook is a full-stack appointment booking platform where patients can browse doctors by specialization, check real-time availability, and book appointments in a few clicks. Built with secure authentication and a clean, patient-friendly UI to simplify healthcare access.",
      technologies: ["React", "Tailwind", "Express", "Node", "MongoDB"],
      features: [],
      github: "https://github.com/Joyel15/doctor-appointment-booking",
      live: "https://medibook-doctor-appointment.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center mb-12 text-4xl md:text-5xl font-bold text-emerald-700 dark:text-white">
          PROJECTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-emerald-50  dark:bg-gray-900 p-3 md:p-4 rounded-lg border-2 border-green-300  dark:border-stone-300 transition-all duration-300 cursor-pointer hover:scale-[1.03] hover:shadow-lg"
              onClick={() => setProject(project)}
            >
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-md"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-emerald-500 dark:text-white font-semibold text-sm md:text-lg px-3 py-1.5 border border-emerald-400 dark:border-white/60 rounded-full">
                    Click to read more
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-emerald-500 dark:text-white mt-1 truncate">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-emerald-400 dark:bg-gray-700 text-slate-50 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {project && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setProject(null)}
        >
          <div
            className="bg-emerald-50 dark:bg-gray-900 rounded-md border-2 border-green-300 dark:border-stone-300 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-gray-900 [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-white [&::-webkit-scrollbar-thumb]:rounded-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <h3 className="text-2xl font-semibold text-emerald-500 dark:text-white py-3 px-4">
                {project.title}
              </h3>

              <div className="flex justify-center px-4 pb-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-2/3 rounded-lg outline outline-3 outline-emerald-300 dark:outline-stone-300"
                />
              </div>

              <button
                onClick={() => setProject(null)}
                className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white w-9 h-9 rounded-full flex items-center justify-center text-xl font-bold transition-colors"
              >
                &times;
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-emerald-400 dark:bg-gray-700 text-slate-50 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.features && project.features.length > 0 && (
                <div className="mt-5">
                  <h4 className="text-lg font-semibold text-emerald-600 dark:text-white mb-2">
                    Features
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex gap-4 mt-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 dark:bg-neutral-50 text-neutral-50 dark:text-blue-600 font-bold px-4 py-2 rounded-lg hover:bg-blue-500 dark:hover:bg-gray-300 transition-colors"
                >
                  Live link
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-black dark:border-stone-300 text-black dark:text-white p-2 rounded-full hover:bg-emerald-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center"
                  aria-label="GitHub Repository"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
export default Projects;
