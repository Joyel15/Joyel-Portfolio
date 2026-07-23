import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 text-4xl md:text-5xl font-bold text-emerald-700 dark:text-white"
        >
          ABOUT ME
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="space-y-6 p-10 text-emerald-500 font-semibold font-[Arial] dark:text-gray-300 text-md md:text-lg leading-relaxed border rounded-3xl shadow-lg"
        >
          <p>
            "Full-stack developer focused on the MERN stack, I build web applications that solve real-world problems. I'm comfortable working with both SQL and NoSQL databases, and I enjoy learning new tools on the go while writing clean, maintainable code — from responsive UIs to secure, role-based backend systems."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
export default About;
