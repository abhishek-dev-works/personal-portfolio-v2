import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const WorkExperience = () => {
  const highlights = [
    "Reduced frontend bugs by 90% via reusable components and better testing",
    "Cut infrastructure costs by removing redundant Azure layers",
    "Upgraded legacy UI libraries (MUI v3 → v4) with minimal disruption",
    "Integrated OpenAI APIs into internal tools to improve productivity",
    "Built real-time communication with WebSocket-based modules",
    "Mentored team members and contributed to agile ceremonies"
  ];

  return (
    <section id="work" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Work Experience
        </h2>

        <div className="glass-card p-8 rounded-xl">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Consultant II – Neudesic (An IBM Company)
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">June 2022 – Present</Badge>
              <Badge variant="outline">Bangalore, India</Badge>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I work on enterprise web apps using React, .NET Core, and Node.js. My focus areas include 
            frontend optimization, scalable API design, clean architecture, and integrating LLMs into 
            real-world tooling. I've led performance initiatives, mentored developers, and bridged the 
            gap between clients and engineering teams.
          </p>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-accent flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Impact Highlights
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;