import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-20 px-6 bg-gradient-to-t from-secondary/30 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Connect With Me
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Let's collaborate on your next project or discuss opportunities in web development.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button variant="hero" size="lg" asChild className="group">
            <a href="mailto:abhishek.works22@gmail.com">
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              abhishek.works22@gmail.com
            </a>
          </Button>
          
          <div className="flex gap-4">
            <Button variant="glass" size="lg" asChild className="group">
              <a 
                href="https://www.linkedin.com/in/abhishek-wilson-37984b1bb" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </Button>
            
            <Button variant="glass" size="lg" asChild className="group">
              <a 
                href="https://github.com/abhishek-dev-works" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                GitHub
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Abhishek Wilson. Built with React & Tailwind CSS.
            </p>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={scrollToTop}
              className="group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;