"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { buttonVariants } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import { motion } from "motion/react";
import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden pt-16"
    >
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60 lg:-top-20 lg:left-80"
        fill="white"
      />

      <div className="container relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 pb-24 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            Available for new opportunities
          </div>
          
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-neutral-200 to-neutral-500 bg-clip-text text-transparent dark:from-neutral-100 dark:to-neutral-400">
              {personalInfo.name}
            </span>
          </h1>
          
          <TextGenerateEffect
            words={personalInfo.title}
            className="text-2xl font-semibold text-primary sm:text-3xl md:text-4xl"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-center text-lg text-muted-foreground sm:text-xl"
        >
          {personalInfo.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className={buttonVariants({ size: "lg", className: "rounded-full px-8" })}>
            <FileText className="mr-2 h-5 w-5" />
            Download Resume
          </a>
          
          <div className="flex items-center gap-2">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={buttonVariants({ variant: "outline", size: "icon", className: "rounded-full" })}>
              <FaGithub className="h-5 w-5" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={buttonVariants({ variant: "outline", size: "icon", className: "rounded-full" })}>
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email" className={buttonVariants({ variant: "outline", size: "icon", className: "rounded-full" })}>
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <Link
          href="#about"
          className="flex flex-col items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="mb-2 text-xs uppercase tracking-widest">Scroll</span>
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-current p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="h-2 w-2 rounded-full bg-current"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
