import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

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
          className="overflow-hidden rounded-2xl border border-emerald-300 dark:border-gray-700 shadow-2xl"
        >
          {/* VS Code Header */}
          <div className="flex items-center justify-between bg-white/60 dark:bg-white/90 px-4 py-3 border-b border-emerald-100">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
            </div>

            <div className="w-14"></div>
          </div>

          {/* Editor */}
          <div className="bg-emerald-50 dark:bg-gray-900 p-8 md:p-10">
            <TypeAnimation
              sequence={[
                `"Full-stack developer focused on the MERN stack, I build web applications that solve real-world problems. I'm comfortable working with both SQL and NoSQL databases, and I enjoy learning new tools on the go while writing clean, maintainable code — from responsive UIs to secure, role-based backend systems."`,
              ]}
              wrapper="p"
              speed={80}
              cursor={true}
              repeat={0}
              className="text-emerald-600 dark:text-gray-400 text-base md:text-lg leading-relaxed font-mono font-semibold whitespace-pre-line"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
