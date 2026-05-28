import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Particles from "./components/Particles";
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';


function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
    <div className="bg-gradient-to-br from-gray-100 via-emerald-50 to-teal-100 dark:bg-gradient-to-br dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 z-0">
        <Particles
          lightColors={["#50C878"]}
          darkColors={["#f3f4f6"]}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
    </ReactLenis>
  );
}

export default App;
