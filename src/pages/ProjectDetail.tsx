
import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { getProjectById } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? getProjectById(id) : undefined;

  useEffect(() => {
    if (!project) {
      navigate("/projects", { replace: true });
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  return (
    <Layout>
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 animate-fade-in">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-block px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="bg-muted/30 rounded-lg overflow-hidden mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover aspect-video"
              />
            </div>

            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
              {project.demoUrl && (
                <Button asChild variant="outline">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild variant="outline">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </Button>
              )}
            </div>

            <Separator className="my-8" />

            <div className="prose max-w-none text-foreground/90 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="mb-6">{project.description}</p>

              {project.longDescription && (
                <>
                  <h2 className="text-2xl font-semibold mb-4">Details</h2>
                  <p className="mb-6">{project.longDescription}</p>
                </>
              )}

              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <ul className="space-y-2 mb-6">
                {project.techStack.map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <Separator className="my-8" />

            <div className="flex justify-between items-center">
              <Link
                to="/projects"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                All Projects
              </Link>
              <div className="flex gap-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    GitHub
                    <Github size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
