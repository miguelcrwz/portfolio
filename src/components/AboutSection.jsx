import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Back-End Developer & Problem Solver
            </h3>

            <p className="text-muted-foreground">
              With a strong foundation in back-end development, I build robust
              and scalable systems. Currently enhancing my skills through
              hands-on projects and international tech training, I’m passionate
              about creating efficient APIs and secure, high-performance
              server-side applications.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about solving complex problems with elegant
              solutions, and I'm constantly learning new technologies and
              practices to stay at the forefront of the ever-evolving tech
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Back-End Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building secure APIs and microservices using modern tech,
                    with a focus on performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Back-End Architecture
                  </h4>
                  <p className="text-muted-foreground">
                    Designing scalable systems with clean code, background jobs,
                    and smart resource handling.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading back-end projects from planning to delivery with
                    agile practices and precision.
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
