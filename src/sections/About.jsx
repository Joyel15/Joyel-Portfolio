import { motion } from 'framer-motion';

function About() {
  return (
   <section id="about" className="py-20">
  <div className="max-w-7xl mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-center mb-12 text-4xl md:text-5xl font-bold text-emerald-700 dark:text-white"
    >
      ABOUT ME
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
      className="space-y-6 p-10 text-emerald-500 font-semibold font-[Arial] dark:text-gray-300 text-md md:text-lg leading-relaxed border rounded-3xl shadow-lg"
    >
      <p>
        Hi, I'm Joyel Dsouza, a recent BCA graduate (2025) passionate about
        web development and creating engaging digital experiences. I'm
        building my skills as a front-end developer with the goal of
        becoming a full-stack developer.
      </p>
      <p>
        Through personal projects, I've gained hands-on experience crafting
        responsive and user-friendly interfaces. What drives me is building
        intuitive UIs and creating meaningful user experiences. I'm motivated
        by continuously learning new technologies in this ever-evolving
        field, with my sights set on expanding into back-end development.
      </p>
      <p>
        Currently, I'm actively seeking full-time positions or internships
        where I can contribute, learn, and grow as a developer.
      </p>
    </motion.div>
  </div>
</section>
  );
}
export default About;
