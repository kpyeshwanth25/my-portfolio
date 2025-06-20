import { Briefcase, Code, Cpu } from "lucide-react"; // Changed User to Cpu for AI icon

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT SECTION - TEXT */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold">
              Passionate Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              I'm a passionate and detail-driven Computer Science undergraduate
              specializing in Artificial Intelligence and Machine Learning.
              With a strong foundation in software engineering and a focus on
              front-end development, I enjoy building web applications that are
              both visually engaging and functionally robust.
            </p>

            <p className="text-muted-foreground">
              Beyond code, I’m driven by curiosity, continuous learning, and a
              strong work ethic. Whether it's designing intuitive user
              interfaces or managing projects from idea to deployment, I believe
              in creating technology that’s reliable, accessible, and smart.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/YESHWANTH_KP_Resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >Download CV
              </a>

            </div>
          </div>

          {/* RIGHT SECTION - SKILLS CARDS */}
          <div className="grid grid-cols-1 gap-6">
            {/* Full Stack Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building robust and scalable web applications using modern
                    front-end and back-end technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading end-to-end software development projects with
                    efficient planning, execution, and delivery using agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>

            {/* AI/ML Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI/ML Development</h4>
                  <p className="text-muted-foreground">
                    Designing intelligent systems with data-driven models for
                    real-world problem solving in agriculture, voting systems,
                    and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
