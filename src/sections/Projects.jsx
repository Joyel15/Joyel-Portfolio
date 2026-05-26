import quiz from "../assets/quiz.jpg";

function Projects (){
return (
  <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-center mb-12 text-4xl md:text-5xl font-bold text-emerald-700 dark:text-white">
          PROJECTS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          <div className="bg-slate-50 dark:bg-gray-900 p-6 md:p-8 rounded-lg border border-stone-300 dark:border-gray-800 hover:border-stone-400 dark:hover:border-gray-600 hover:scale-105 transition-all duration-300">
            <img src={quiz} alt="Project-image"  />
            <h3 className="text-2xl font-semibold font-[Arial] mb-4 text-emerald-500 dark:text-white">Quiz Wiz</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-emerald-50 dark:bg-gray-800 text-emerald-500 dark:text-gray-300 px-3 py-1 rounded-full outline dark:outline-none text-sm">React</span>
              <span className="bg-emerald-50 dark:bg-gray-800 text-emerald-500 dark:text-gray-300 px-3 py-1 rounded-full outline dark:outline-none text-sm">Tailwind</span>
              <span className="bg-emerald-50 dark:bg-gray-800 text-emerald-500 dark:text-gray-300 px-3 py-1 rounded-full outline dark:outline-none text-sm">JavaScript</span>
            </div>
          </div>
          
          <div className="bg-slate-50 dark:bg-gray-900 p-6 md:p-8 rounded-lg border border-stone-300 dark:border-gray-800 hover:border-stone-400 dark:hover:border-gray-600 hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold font-[Arial] mb-4 text-emerald-500 dark:text-white">Project Title 2</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-emerald-50 dark:bg-gray-800 text-emerald-500 dark:text-gray-300 px-3 py-1 rounded-full outline dark:outline-none text-sm">HTML</span>
              <span className="bg-emerald-50 dark:bg-gray-800 text-emerald-500 dark:text-gray-300 px-3 py-1 rounded-full outline dark:outline-none text-sm">CSS</span>
              <span className="bg-emerald-50 dark:bg-gray-800 text-emerald-500 dark:text-gray-300 px-3 py-1 rounded-full outline dark:outline-none text-sm">Bootstrap</span>
            </div>
          </div>
          
          <div className="bg-slate-50 dark:bg-gray-900 p-6 md:p-8 rounded-lg border border-stone-300 dark:border-gray-800 hover:border-stone-400 dark:hover:border-gray-600 hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold font-[Arial] mb-4 text-emerald-500 dark:text-white">Project Title 3</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-emerald-50 dark:bg-gray-800 text-emerald-500 dark:text-gray-300 px-3 py-1 rounded-full outline dark:outline-none text-sm">React</span>
              <span className="bg-emerald-50 dark:bg-gray-800 text-emerald-500 dark:text-gray-300 px-3 py-1 rounded-full outline dark:outline-none text-sm">JavaScript</span>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
)
}
export default Projects;