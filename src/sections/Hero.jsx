import profile from "../assets/profile.jpeg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-2xl">
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
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.5 }}
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
    </section>
  );
}
export default Hero;
