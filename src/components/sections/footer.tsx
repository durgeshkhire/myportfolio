import { personalInfo } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 bg-background py-8">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
