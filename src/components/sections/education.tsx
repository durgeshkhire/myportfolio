"use client";

import { motion } from "motion/react";
import { education } from "@/lib/data";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="bg-muted/30 py-20 lg:py-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Education
          </h2>
          <div className="mx-auto h-1 w-20 rounded bg-primary"></div>
        </motion.div>

        <div className="relative border-l-2 border-primary/20 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
          {/* Desktop center line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/20"></div>

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 flex flex-col md:flex-row items-center justify-between w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline marker */}
              <div className="absolute left-[-41px] md:left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-sm">
                <GraduationCap className="h-4 w-4" />
              </div>

              {/* Content card */}
              <div className="w-full md:w-[45%]">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow relative">
                  {/* Arrow for desktop */}
                  <div className={`hidden md:block absolute top-6 h-4 w-4 rotate-45 border-border bg-card ${
                    index % 2 === 0 
                      ? "left-[-8px] border-b-0 border-r-0" 
                      : "right-[-8px] border-t-0 border-l-0"
                  }`}></div>
                  
                  <h3 className="mb-1 text-xl font-bold text-foreground">{item.degree}</h3>
                  <h4 className="mb-4 text-lg font-medium text-primary">{item.institution}</h4>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{item.year}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-sm font-semibold text-secondary-foreground">
                    CGPA: {item.cgpa}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
