"use client";

import { motion } from "motion/react";
import { personalInfo } from "@/lib/data";
import { Code2, Laptop, Rocket } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <div className="mx-auto h-1 w-20 rounded bg-primary"></div>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10"
          >
            <p className="text-lg leading-relaxed text-card-foreground sm:text-xl">
              {personalInfo.summary}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Backend Heavy</h3>
                <p className="text-sm text-muted-foreground">
                  Deep expertise in Java, Spring Boot, and PostgreSQL.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Laptop className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Frontend Capable</h3>
                <p className="text-sm text-muted-foreground">
                  Building responsive UIs with React and TypeScript.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Cloud Deployed</h3>
                <p className="text-sm text-muted-foreground">
                  Experience deploying full-stack apps to AWS infrastructure.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
