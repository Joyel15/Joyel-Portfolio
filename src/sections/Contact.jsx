import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        <h2 className="text-center mb-12 text-4xl md:text-5xl font-bold  text-emerald-700 dark:text-white">
          GET IN TOUCH
        </h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-emerald-600 dark:text-gray-300 text-lg mb-12">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            
            <a href="mailto:joyeldsza@gmail.com" 
               className="flex items-center gap-3 bg-stone-100 dark:bg-gray-900 px-6 py-4 rounded-lg border border-stone-300 dark:border-gray-800 hover:border-stone-400 dark:hover:border-gray-600 transition-all duration-300 hover:scale-105">
              <FiMail className="text-2xl text-blue-400" />
              <span className="text-slate-900 dark:text-white">joyeldsza@gmail.com</span>
            </a>
            
          </div>
          
          <div className="flex gap-6 justify-center">
            
            <a href="https://github.com/Joyel15" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-stone-100 dark:bg-gray-900 p-4 rounded-full border border-stone-300 dark:border-gray-800 hover:border-stone-400 dark:hover:border-gray-600 transition-all duration-300 hover:scale-110">
              <FiGithub className="text-2xl text-slate-900 dark:text-white" />
            </a>
            
            <a href="https://www.linkedin.com/in/joyel-dsza/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-stone-100 dark:bg-gray-900 p-4 rounded-full border border-stone-300 dark:border-gray-800 hover:border-stone-400 dark:hover:border-gray-600 transition-all duration-300 hover:scale-110">
              <FiLinkedin className="text-2xl text-blue-400" />
            </a>
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
}

export default Contact;