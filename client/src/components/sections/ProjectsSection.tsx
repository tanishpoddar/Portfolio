import { forwardRef, useRef } from "react";
import { motion } from "framer-motion";
import TerminalWindow from "@/components/TerminalWindow";
import ProjectCard from "@/components/ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

interface ProjectsSectionProps {}

const ProjectsSection = forwardRef<HTMLElement, ProjectsSectionProps>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with MERN stack, featuring user authentication, product filtering, and payment integration.",
      image: "code-1",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/tanishpoddar/ecommerce-platform",
      demoUrl: "https://ecommerce-platform.demo"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A React-based task management application with drag-and-drop functionality, theme customization, and local storage persistence.",
      image: "code-2",
      technologies: ["React", "Redux", "Tailwind CSS"],
      githubUrl: "https://github.com/tanishpoddar/task-manager",
      demoUrl: "https://task-manager.demo"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that provides real-time weather data, forecasts, and location-based suggestions using the OpenWeather API.",
      image: "code-3",
      technologies: ["JavaScript", "API", "CSS"],
      githubUrl: "https://github.com/tanishpoddar/weather-app",
      demoUrl: "https://weather-app.demo"
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A full-featured blogging platform with markdown support, comments, user profiles, and content management system.",
      image: "code-4",
      technologies: ["Next.js", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/tanishpoddar/blog-platform",
      demoUrl: "https://blog-platform.demo"
    }
  ];

  // Handle horizontal scroll with mouse drag
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = containerRef.current;
    if (!slider) return;
    
    let startX = e.pageX - slider.offsetLeft;
    let scrollLeft = slider.scrollLeft;
    
    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };
    
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <section ref={ref} id="projects" className="min-h-screen flex items-center justify-center py-20 px-4">
      <TerminalWindow title="projects.js">
        <div className="mb-4">
          <span className="text-terminal-green">$</span>{" "}
          <span className="text-terminal-command">find</span> ./projects -type f -name "*.js" | sort
        </div>
        <div className="ml-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-terminal-accent">
            Projects
          </h2>
          <p className="mb-4">Swipe or scroll to explore my projects →</p>
          
          <motion.div 
            className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-terminal-bg py-4 -mx-4 horizontal-scroll"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            whileTap={{ cursor: "grabbing" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex space-x-4 px-4">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  project={project}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </TerminalWindow>
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
