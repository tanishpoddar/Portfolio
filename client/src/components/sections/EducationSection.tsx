import { forwardRef } from "react";
import TerminalWindow from "@/components/TerminalWindow";
import TimelineItem from "@/components/TimelineItem";

interface Education {
  title: string;
  institution: string;
  period: string;
  description: string;
  courses: string[];
}

interface EducationSectionProps {}

const EducationSection = forwardRef<HTMLElement, EducationSectionProps>((props, ref) => {
  const educationItems: Education[] = [
    {
      title: "Computer Science B.Tech",
      institution: "University Institute of Technology",
      period: "2018 - 2022",
      description: "Focused on algorithms, data structures, and web development. Maintained a 3.8 GPA throughout the program.",
      courses: ["Data Structures", "Algorithms", "Database Systems", "Web Development", "Software Engineering"]
    },
    {
      title: "Full Stack Web Development",
      institution: "Programming Bootcamp",
      period: "2022",
      description: "Intensive 12-week course covering modern web development technologies and practices.",
      courses: ["React.js", "Node.js", "Express", "MongoDB", "RESTful APIs"]
    },
    {
      title: "AWS Cloud Practitioner",
      institution: "AWS Certification",
      period: "2023",
      description: "Completed certification covering AWS cloud concepts, services, security, and architecture.",
      courses: ["Cloud Architecture", "AWS Services", "Cloud Security", "Deployment"]
    }
  ];

  return (
    <section ref={ref} id="education" className="min-h-screen flex items-center justify-center py-20 px-4">
      <TerminalWindow title="education.js">
        <div className="mb-4">
          <span className="text-terminal-green">$</span>{" "}
          <span className="text-terminal-command">cat</span> ./education/timeline.json | jq
        </div>
        <div className="ml-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-terminal-accent">
            Education
          </h2>
          
          <div className="relative pl-8 space-y-10 mb-6">
            {/* Timeline line */}
            <div className="absolute left-3 top-0 h-full w-0.5 bg-terminal-lightbg"></div>
            
            {/* Timeline Items */}
            {educationItems.map((education, index) => (
              <TimelineItem
                key={index}
                title={education.title}
                subtitle={education.institution}
                period={education.period}
                description={education.description}
                tags={education.courses}
                delay={index * 0.2}
                tagTitle="Key Courses:"
              />
            ))}
          </div>
        </div>
      </TerminalWindow>
    </section>
  );
});

EducationSection.displayName = "EducationSection";

export default EducationSection;
