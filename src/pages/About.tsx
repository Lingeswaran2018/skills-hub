
import React from "react";
import Layout from "@/components/layout/Layout";
import { skills } from "@/data/skills";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { experiences, certificates } from "@/data/experience";
import { CalendarIcon, GraduationCap, Award, Briefcase } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight mb-6 animate-fade-in">About Me</h1>
            <p className="text-lg text-muted-foreground mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
              I'm Lingeswaran Sathiyalokeswaran, a final-year Electrical Engineering student at the University of Moratuwa with a passion for artificial intelligence and machine learning.
            </p>
            <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              <Separator className="my-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">My Background</h2>
            <div className="prose max-w-none text-foreground/90">
              <p className="mb-4">
                I am a highly motivated and confident final-year Engineering undergraduate at the University of Moratuwa with a strong passion for Artificial Intelligence and Machine Learning, particularly in Large Language Models (LLMs).
              </p>
              <p className="mb-4">
                My journey in technology began during my early university years, where I discovered my interest in combining electrical engineering principles with cutting-edge AI applications. This led me to specialize in fine-tuning LLMs, speech processing, and AI-driven chatbot development.
              </p>
              <p className="mb-4">
                I'm currently working as a part-time AI Intern at Yarl IT Hub, where I develop real-world AI solutions. Previously, I worked as a Trainee Electronic Engineer at Vega Innovations, working on PCB design, firmware development, and hardware debugging.
              </p>
              <p>
                I'm seeking opportunities to apply my technical expertise in real-world AI solutions and am open to collaboration on innovative projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8">Experience & Education</h2>

            <div className="space-y-8">
              {experiences.map((item, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l border-border">
                  {/* Dot */}
                  <div className="absolute left-[-8px] top-0">
                    <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                      {item.type === 'education' ? (
                        <GraduationCap size={12} className="text-primary-foreground" />
                      ) : item.type === 'award' ? (
                        <Award size={12} className="text-primary-foreground" />
                      ) : (
                        <Briefcase size={12} className="text-primary-foreground" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-background rounded-lg p-5 border border-border/50">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <CalendarIcon size={12} className="mr-1" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      {item.company}
                      {item.location && ` • ${item.location}`}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    {item.technologies && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="inline-block px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8">Skills & Expertise</h2>

            <div className="space-y-8">
              {skills.map((skillCategory) => (
                <Card key={skillCategory.category} className="border border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">{skillCategory.category}</h3>
                    <div className="space-y-4">
                      {skillCategory.items.map((skill) => (
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
                                className="bg-primary h-1.5 rounded-full transition-all duration-1000"
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
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8">Certifications</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {certificates.map((cert, index) => (
                <Card key={index} className="border border-border/50">
                  <CardContent className="p-4">
                    <h3 className="text-base font-medium mb-2">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
