import { forwardRef } from "react";
import TerminalWindow from "@/components/TerminalWindow";
import { motion } from "framer-motion";

interface Certification {
  title: string;
  issuer: string;
  year: string;
}

interface ResumeSectionProps {}

const ResumeSection = forwardRef<HTMLElement, ResumeSectionProps>((props, ref) => {
  const certifications: Certification[] = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      year: "2022"
    },
    {
      title: "Advanced JavaScript",
      issuer: "Udemy",
      year: "2021"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2020"
    }
  ];

  return (
    <section ref={ref} id="resume" className="min-h-screen flex items-center justify-center py-20 px-4">
      <TerminalWindow title="resume.js">
        <div className="mb-4">
          <span className="text-terminal-green">$</span>{" "}
          <span className="text-terminal-command">view</span> ./documents/resume.pdf
        </div>
        <div className="ml-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-terminal-accent">
            Resume
          </h2>
          
          <motion.div 
            className="bg-terminal-lightbg p-6 rounded-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <i className="ri-file-pdf-line text-4xl text-terminal-accent mr-3"></i>
                <div>
                  <h3 className="text-xl font-semibold">Tanish_Poddar_Resume.pdf</h3>
                  <p className="text-sm text-gray-400">Updated: January 2023 • 2.4 MB</p>
                </div>
              </div>
              <a 
                href="#" 
                className="bg-terminal-accent text-terminal-bg px-4 py-2 rounded-md flex items-center hover:bg-opacity-80 transition-colors"
                aria-label="Download Resume"
              >
                <i className="ri-download-line mr-2"></i> Download Resume
              </a>
            </div>
            
            <div className="aspect-[3/4] bg-gray-800 rounded-md border border-gray-700 flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-16 h-16 mx-auto text-terminal-accent mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-lg mb-2">Resume Preview</p>
                <p className="text-sm text-gray-400">Click the download button to get the full resume</p>
              </div>
            </div>
          </motion.div>
          
          <div className="mb-4">
            <span className="text-terminal-green">$</span>{" "}
            <span className="text-terminal-command">ls</span> ./documents/certifications/
          </div>
          
          <motion.div 
            className="ml-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-terminal-accent">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  className="bg-terminal-lightbg p-4 rounded-md flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                >
                  <i className="ri-award-line text-2xl text-terminal-accent mr-3"></i>
                  <div>
                    <h4 className="font-medium">{cert.title}</h4>
                    <p className="text-sm text-gray-400">{cert.issuer} • {cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </TerminalWindow>
    </section>
  );
});

ResumeSection.displayName = "ResumeSection";

export default ResumeSection;
