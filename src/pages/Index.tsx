
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects, getFeaturedProjects } from "@/data/projects";
import { skills } from "@/data/skills";

const Index = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/80 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 mt-[-80px]">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3 animate-fade-in">
              AI & Machine Learning Engineer
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
              <div className="overflow-hidden">
                <span className="block reveal-text">Lingeswaran</span>
              </div>
              <div className="overflow-hidden">
                <span className="block reveal-text">Sathiyalokeswaran</span>
              </div>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              A machine learning engineer specializing in Large Language Models, speech processing, and AI solutions.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
              <Button asChild size="lg">
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="flex gap-4 mt-12 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} className="text-muted-foreground" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-muted-foreground" />
              </a>
              <a
                href="mailto:lingalingeswaran99@gmail.com"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} className="text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
            <p className="text-muted-foreground text-balance">
              I am a highly motivated final-year Engineering undergraduate at the University of Moratuwa with a
              strong passion for Artificial Intelligence and Machine Learning, particularly in Large Language Models (LLMs).
              Experienced in fine-tuning LLMs, speech processing, and AI-driven chatbot development.
            </p>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link to="/about" className="flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">
              Explore some of my recent work in AI and machine learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 stagger-animation">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden border border-border/50 hover:border-border transition-all duration-300 hover:shadow-md">
                <div className="aspect-video bg-muted/30 flex items-center justify-center">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="inline-block px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center mt-auto pt-4">
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
                    >
                      View Project <ArrowRight size={14} />
                    </Link>
                    <div className="flex gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-3 py-1 bg-secondary rounded-full text-secondary-foreground hover:bg-secondary/80 transition-colors"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/projects" className="flex items-center gap-2">
                View All Projects <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Skills</h2>
            <p className="text-muted-foreground">
              My technical expertise and areas of specialization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {skills.slice(0, 3).map((skillCategory) => (
              <Card key={skillCategory.category} className="border border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{skillCategory.category}</h3>
                  <div className="space-y-4">
                    {skillCategory.items.slice(0, 5).map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">{skill.name}</span>
                          {skill.level && (
                            <span className="text-xs text-muted-foreground">
                              {skill.level}%
                            </span>
                          )}
                        </div>
                        {skill.level && (
                          <div className="w-full bg-secondary rounded-full h-1.5">
                            <div
                              className="bg-primary h-1.5 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/about" className="flex items-center gap-2">
                View All Skills <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to work together?</h2>
            <p className="text-muted-foreground mb-8">
              I'm currently available for freelance work and collaboration opportunities.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
