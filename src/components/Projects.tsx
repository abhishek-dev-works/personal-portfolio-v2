import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import furnikartImage from "@/assets/furnikart-project.jpg";
import chatbotImage from "@/assets/ai-chatbot-project.jpg";
import dashboardImage from "@/assets/dashboard-project.jpg";

const Projects = () => {
  const industryProjects = [
    {
      title: "AI Chatbot (Internal Tool)",
      description: "Built a document-driven chatbot using OpenAI + Azure Functions. Supports file uploads and RAG-based document search.",
      image: chatbotImage,
      tags: ["OpenAI", "Azure Functions", "RAG", "TypeScript"]
    },
    {
      title: "Dev UI Generator Tool", 
      description: "Created a web app to auto-generate React flows/components using AI + CodeSandbox integration.",
      image: dashboardImage,
      tags: ["React", "AI", "CodeSandbox", "Node.js"]
    },
    {
      title: "Business Dashboard Interface",
      description: "Developed frontend for dashboarding tool integrated with Power BI, with filter support and CQRS-based backend.",
      image: dashboardImage,
      tags: ["React", "Power BI", "CQRS", ".NET Core"]
    },
    {
      title: "Recruitment Workflow App",
      description: "Real-time hiring platform with WebSocket chat/email modules and performance optimizations.",
      image: chatbotImage,
      tags: ["WebSocket", "Real-time", "React", "Performance"]
    }
  ];

  const personalProjects = [
    {
      title: "FurniKart – E-commerce Website",
      description: "A responsive React-based furniture store with cart, checkout, and category filtering.",
      image: furnikartImage,
      tags: ["React", "E-commerce", "Responsive", "JavaScript"],
      liveUrl: "https://furnikart.vercel.app/",
      githubUrl: "https://github.com/abhishek-dev-works/e-commerce-react-responsive"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Projects
        </h2>

        {/* Industry Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-primary">Industry Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryProjects.map((project, index) => (
              <div 
                key={project.title}
                className="glass-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-primary">Personal Projects</h3>
          <div className="grid grid-cols-1 gap-8">
            {personalProjects.map((project) => (
              <div 
                key={project.title}
                className="glass-card rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="md:flex">
                  <div className="md:w-1/2 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent"></div>
                  </div>
                  <div className="md:w-1/2 p-6 flex flex-col justify-center">
                    <h4 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="hero" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="glass" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;