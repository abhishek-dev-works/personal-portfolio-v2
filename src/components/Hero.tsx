import { Button } from "@/components/ui/button";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";

const Hero = () => {
  const handleClick = () => {
    const url = "https://drive.google.com/uc?export=download&id=1gw3YNtCXc_BP0_0Q7g7AYxtt6b8fH7Rl";
    window.location.href = url;
  }
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
            Abhishek Wilson
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Full-stack developer building modern web apps with clean architecture, 
            cloud-native design, and AI integration.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="hero" size="lg" className="group" onClick={handleClick}>
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
          <Button variant="glass" size="lg" className="group" asChild>
            <a href="#projects">
              <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View Projects
            </a>
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 mx-auto text-muted-foreground" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 rounded-full bg-gradient-to-br from-accent to-primary opacity-10 animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;