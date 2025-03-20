
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { projects } from "@/data/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

type ProjectCategory = 'all' | 'ai' | 'ml' | 'web' | 'other';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('all');

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-secondary/50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold tracking-tight mb-6 animate-fade-in">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
            Explore my portfolio of projects in AI, machine learning, and software development. Each project represents my technical capabilities and problem-solving approach.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="all" value={activeTab} onValueChange={(value) => setActiveTab(value as ProjectCategory)} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="ai">AI</TabsTrigger>
                <TabsTrigger value="ml">ML</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 stagger-animation">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden border border-border/50 hover:border-border transition-all duration-300 hover:shadow-md h-full flex flex-col">
                    <div className="aspect-video bg-muted/30 flex items-center justify-center">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
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
                          View Details <ArrowRight size={14} />
                        </Link>
                        <div className="flex gap-2">
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                              aria-label="Live Demo"
                            >
                              <ExternalLink size={14} />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                              aria-label="GitHub Repository"
                            >
                              <Github size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No projects found in this category.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
