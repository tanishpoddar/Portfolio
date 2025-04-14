import { forwardRef } from "react";
import TerminalWindow from "@/components/TerminalWindow";
import TimelineItem from "@/components/TimelineItem";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities?: string[];
  projects?: string[];
  technologies?: string[];
  type: "responsibilities" | "projects" | "technologies";
}

interface ExperienceSectionProps {}

const ExperienceSection = forwardRef<HTMLElement, ExperienceSectionProps>((props, ref) => {
  const experiences: Experience[] = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Lead development of responsive web applications, collaborating with design and backend teams to create seamless user experiences.",
      responsibilities: [
        "Architected and implemented React-based frontend solutions",
        "Led a team of 4 developers on multiple projects",
        "Optimized application performance and accessibility",
        "Implemented CI/CD pipelines for frontend deployments"
      ],
      type: "responsibilities"
    },
    {
      title: "Web Developer",
      company: "Digital Innovators Inc.",
      period: "2020 - 2022",
      description: "Developed and maintained client websites and web applications, focusing on responsive design and performance optimization.",
      projects: [
        "E-commerce platform with payment integration",
        "CMS-based corporate websites for various clients",
        "Internal dashboard for data visualization"
      ],
      type: "projects"
    },
    {
      title: "Frontend Developer Intern",
      company: "WebStar Agency",
      period: "2019 - 2020",
      description: "Assisted in building responsive websites and gained practical experience in modern web development technologies.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React"],
      type: "technologies"
    }
  ];

  return (
    <section ref={ref} id="experience" className="min-h-screen flex items-center justify-center py-20 px-4">
      <TerminalWindow title="experience.js">
        <div className="mb-4">
          <span className="text-terminal-green">$</span>{" "}
          <span className="text-terminal-command">cat</span> ./experience/career.log
        </div>
        <div className="ml-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-terminal-accent">
            Work Experience
          </h2>
          
          <div className="relative pl-8 space-y-10 mb-6">
            {/* Timeline line */}
            <div className="absolute left-3 top-0 h-full w-0.5 bg-terminal-lightbg"></div>
            
            {/* Experience Items */}
            {experiences.map((experience, index) => (
              <TimelineItem
                key={index}
                title={experience.title}
                subtitle={experience.company}
                period={experience.period}
                tags={experience.type === "responsibilities" ? experience.responsibilities : 
                      experience.type === "projects" ? experience.projects : 
                      experience.technologies}
                delay={index * 0.2}
                tagTitle={experience.type === "responsibilities" ? "Key Responsibilities:" : 
                          experience.type === "projects" ? "Key Projects:" : 
                          "Technologies Used:"}
                listType={experience.type === "technologies" ? "tags" : "list"}
              />
            ))}
          </div>
        </div>
      </TerminalWindow>
    </section>
  );
});

ExperienceSection.displayName = "ExperienceSection";

export default ExperienceSection;
