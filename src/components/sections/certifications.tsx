"use client";

import { motion } from "motion/react";
import { certifications } from "@/lib/data";
import { Award, ExternalLink, Calendar } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Certifications
          </h2>
          <div className="mx-auto h-1 w-20 rounded bg-primary"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{cert.title}</h3>
                <p className="mb-4 text-lg font-medium text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-border/50 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.date}</span>
                </div>
                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    Verify
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
