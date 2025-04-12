import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

interface ProjectCardProps {
  project: Project;
  delay: number;
}

const ProjectCard = ({ project, delay }: ProjectCardProps) => {
  // Function to generate SVG code pattern background
  const getCodePattern = (variant: string) => {
    switch (variant) {
      case 'code-1': 
        return (
          <svg className="w-full h-full" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="15" className="text-xs fill-current text-terminal-accent opacity-70">{"<div className=\"app\">"}</text>
            <text x="15" y="25" className="text-xs fill-current text-terminal-accent opacity-70">{"<header>"}</text>
            <text x="20" y="35" className="text-xs fill-current text-terminal-accent opacity-70">{"<h1>Hello</h1>"}</text>
            <text x="15" y="45" className="text-xs fill-current text-terminal-accent opacity-70">{"</header>"}</text>
            <text x="10" y="55" className="text-xs fill-current text-terminal-accent opacity-70">{"</div>"}</text>
          </svg>
        );
      case 'code-2':
        return (
          <svg className="w-full h-full" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="15" className="text-xs fill-current text-terminal-accent opacity-70">{"function App() {"}</text>
            <text x="15" y="25" className="text-xs fill-current text-terminal-accent opacity-70">{"return ("}</text>
            <text x="20" y="35" className="text-xs fill-current text-terminal-accent opacity-70">{"<Main />"}</text>
            <text x="15" y="45" className="text-xs fill-current text-terminal-accent opacity-70">{");"}</text>
            <text x="10" y="55" className="text-xs fill-current text-terminal-accent opacity-70">{"}"}</text>
          </svg>
        );
      case 'code-3':
        return (
          <svg className="w-full h-full" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="15" className="text-xs fill-current text-terminal-accent opacity-70">{"import { useState } from 'react';"}</text>
            <text x="10" y="25" className="text-xs fill-current text-terminal-accent opacity-70">{"const [count, setCount] = useState(0);"}</text>
            <text x="10" y="35" className="text-xs fill-current text-terminal-accent opacity-70">{"const increment = () => {"}</text>
            <text x="15" y="45" className="text-xs fill-current text-terminal-accent opacity-70">{"setCount(count + 1);"}</text>
            <text x="10" y="55" className="text-xs fill-current text-terminal-accent opacity-70">{"};"}</text>
          </svg>
        );
      case 'code-4':
        return (
          <svg className="w-full h-full" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="15" className="text-xs fill-current text-terminal-accent opacity-70">{"const express = require('express');"}</text>
            <text x="10" y="25" className="text-xs fill-current text-terminal-accent opacity-70">{"const app = express();"}</text>
            <text x="10" y="35" className="text-xs fill-current text-terminal-accent opacity-70">{"app.get('/', (req, res) => {"}</text>
            <text x="15" y="45" className="text-xs fill-current text-terminal-accent opacity-70">{"res.send('Hello World!');"}</text>
            <text x="10" y="55" className="text-xs fill-current text-terminal-accent opacity-70">{"})"}</text>
          </svg>
        );
      default:
        return (
          <svg className="w-full h-full" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="15" className="text-xs fill-current text-terminal-accent opacity-70">{"console.log('Hello, World!');"}</text>
          </svg>
        );
    }
  };

  return (
    <motion.div
      className="project-card w-72 md:w-80 flex-shrink-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay }}
      whileHover={{ y: -5 }}
    >
      <div className="terminal-window bg-terminal-bg border border-gray-700 rounded-lg overflow-hidden shadow-lg">
        <div className="terminal-header flex items-center p-3 bg-terminal-lightbg border-b border-gray-700">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
          <div className="ml-2 text-sm text-terminal-text">project-{project.id.toString().padStart(2, '0')}.js</div>
        </div>
        <div className="p-4">
          <div className="aspect-video mb-3 bg-terminal-lightbg rounded-md overflow-hidden flex items-center justify-center">
            {getCodePattern(project.image)}
          </div>
          <h3 className="text-lg font-semibold text-terminal-accent mb-2">{project.title}</h3>
          <p className="text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className="text-xs bg-terminal-bg px-2 py-1 rounded-md">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-3 mt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-terminal-accent hover:text-terminal-green transition-colors text-sm flex items-center"
            >
              <i className="ri-github-line mr-1"></i> GitHub
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-terminal-accent hover:text-terminal-green transition-colors text-sm flex items-center"
            >
              <i className="ri-external-link-line mr-1"></i> Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
