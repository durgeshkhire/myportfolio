import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export default function WritingsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-20 pb-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Writings</h1>
        <div className="h-1 w-16 bg-primary rounded mx-auto mb-8"></div>
        
        <p className="text-xl text-muted-foreground max-w-lg mx-auto mb-8">
          A collection of my thoughts on software engineering, web development, and tech.
        </p>
        
        <div className="border border-border/50 bg-card rounded-2xl p-12 max-w-2xl w-full mx-auto flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-6">
            <span className="text-2xl">📝</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
          <p className="text-muted-foreground">
            I&apos;m currently working on some articles. Check back later!
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
