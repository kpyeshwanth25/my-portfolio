import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Secure Online E-Voting System",
    description:
      "A secure web-based e-voting platform using facial and fingerprint recognition for biometric authentication.",
    image: "/evoting.jpeg",
    tags: ["React", "Express.js", "Flask", "WebAuthn", "PostgreSQL", "Face Recognition", "Fingerprint Auth"],
    demoUrl: "#",
    githubUrl: "https://github.com/kpyeshwanth25",
  },
  {
    id: 2,
    title: "Plant Disease Analyzer & Predictor",
    description:
      "AI-powered system that analyzes plant symptoms and suggests treatments using rule-based algorithms.",
    image: "/plant.jpeg",
    tags: ["Python", "AI/ML", "Flask", "Rule-Based System", "OpenCV", "Plant Health"],
    demoUrl: "#",
    githubUrl: "https://github.com/kpyeshwanth25",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project is built with a
          strong focus on real-world utility, innovation, and usability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full min-h-[480px]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                {/* Tags Centered */}
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-center">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 text-center">
                  {project.description}
                </p>

                {/* Buttons pushed to bottom */}
                <div className="flex justify-center gap-4 mt-auto">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kpyeshwanth25"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
