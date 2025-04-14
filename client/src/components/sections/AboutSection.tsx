import { forwardRef } from "react";
import TerminalWindow from "@/components/TerminalWindow";
import { motion } from "framer-motion";

interface AboutSectionProps {}

const AboutSection = forwardRef<HTMLElement, AboutSectionProps>((props, ref) => {
  return (
    <section ref={ref} id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
      <TerminalWindow title="about_me.md">
        <div className="mb-4">
          <span className="text-terminal-green">$</span>{" "}
          <span className="text-terminal-command">cat</span> about_me.md
        </div>
        <div className="ml-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-terminal-accent">
            About Me
          </h2>
          <div className="md:flex">
            <div className="md:w-2/3 pr-6">
              <motion.p 
                className="mb-4 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                I'm a passionate software developer with a strong foundation in building efficient, scalable systems. My core expertise lies in Kotlin development, AWS cloud engineering, and Python-based backend development.
              </motion.p>
              <motion.p 
                className="mb-4 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                I’m deeply interested in system design and architecture, always striving to create solutions that are both maintainable and performance-optimized; & enjoy designing and deploying cloud-native applications. Alongside these, I also work on full-stack web development—translating ideas into responsive, functional interfaces backed by solid architecture.
              </motion.p>
              <motion.p 
                className="leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Outside of tech, I am a professional martial artist. I hold a Blue-II belt in Shotokan Karate and won a Bronze Medal in the 2019 South Asian Championship.
              </motion.p>
            </div>
            <motion.div 
              className="md:w-1/3 mt-6 md:mt-0 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-terminal-accent flex items-center justify-center bg-terminal-lightbg">
                <svg className="w-24 h-24 text-terminal-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-terminal-green">$</span>{" "}
          <span className="text-terminal-command">grep</span> "interests" about_me.md
        </div>
        <motion.div 
          className="ml-4 mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="mb-2 text-terminal-green">Interests:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Kotlin Dev</li>
            <li>AWS Cloud & DevOps</li>
            <li>System Design & Architecture</li>
            <li>Python Apps Dev</li>
            <li>Full Stack Web Dev</li>
          </ul>
        </motion.div>
      </TerminalWindow>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
