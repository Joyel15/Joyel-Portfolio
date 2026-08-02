import profile from "../assets/profile.jpeg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-[85vh] md:min-h-screen flex items-start md:items-center pt-24 md:pt-20 pb-10 md:pb-0 relative"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="flex justify-center mb-8 md:mb-10"
        >
          <div className="max-w-3xl px-5 py-3 rounded-xl border border-emerald-200/40 dark:border-gray-700 bg-white/10 dark:bg-black/10 backdrop-blur-md">
            <p className="text-center text-sm md:text-base italic font-medium text-emerald-700 dark:text-gray-200">
              “If there is no struggle, there is no progress.”
              <span className="block md:inline md:ml-2 mt-2 md:mt-0 text-xs md:text-sm font-mono text-emerald-500 dark:text-gray-400 not-italic">
                — Frederick Douglass
              </span>
            </p>
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="max-w-6xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <div className="order-2 md:order-1 backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-2xl text-center md:text-left">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                className="text-5xl md:text-6xl lg:text-7xl text-emerald-800 dark:text-white font-bold mb-4 font-fam"
              >
                JOYEL DSOUZA
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.p
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 1, 0.5, 1],
                  delay: 0.3,
                }}
                className="text-xl md:text-2xl text-emerald-500 dark:text-gray-500 mb-6 font-[monospace]"
              >
                Full-Stack Developer
              </motion.p>
            </div>

            {/* Resume Button */}
            <motion.a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.6,
                ease: "easeOut",
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-medium shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 mx-auto md:mx-0"
            >
              View Resume →
               </motion.a>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.5,
            }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <img
              src={profile}
              alt="Profilephoto"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
            />
          </motion.div>
         </div>
        </div> 
      </div>
    </section>
  );
}

export default Hero;
