"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <div className="mx-auto h-1 w-20 rounded bg-primary"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={cn(
                "relative group block h-full w-full",
                project.flagship ? "lg:col-span-2 md:col-span-2" : ""
              )}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-primary/10 dark:bg-primary/20 block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              
              <div className="rounded-2xl h-full w-full p-6 overflow-hidden bg-card border border-border group-hover:border-primary/50 relative z-20 flex flex-col transition-colors duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <Badge variant={project.status === "live" ? "default" : "secondary"}>
                    {project.status === "live" ? "Live" : "In Development"}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-background">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-sm font-medium hover:text-primary transition-colors"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-sm font-medium hover:text-primary transition-colors"
                    >
                      <FaGithub className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
