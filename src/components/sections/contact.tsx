"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { buttonVariants } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-muted/20 py-20 lg:py-32">
      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
          I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a href={`mailto:${personalInfo.email}`} className={buttonVariants({ size: "lg", className: "h-14 rounded-full px-8 text-base" })}>
            <Mail className="mr-2 h-5 w-5" />
            Say Hello
          </a>

          <div className="flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={buttonVariants({ variant: "outline", size: "icon", className: "h-14 w-14 rounded-full bg-background" })}>
              <FaGithub className="h-6 w-6" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={buttonVariants({ variant: "outline", size: "icon", className: "h-14 w-14 rounded-full bg-background" })}>
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
}
