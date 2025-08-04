const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      technologies: ["React.js", "Redux", "Tailwind", "Material UI", "React Hook Form"]
    },
    {
      title: "Backend", 
      technologies: [".NET Core", "Node.js", "Express", "NestJS", "CQRS", "EF Core"]
    },
    {
      title: "Languages",
      technologies: ["JavaScript", "TypeScript", "C#", "HTML", "CSS"]
    },
    {
      title: "Databases",
      technologies: ["SQL Server", "MongoDB", "Azure Cosmos DB"]
    },
    {
      title: "Cloud & Tools",
      technologies: ["Azure Functions", "App Services", "Git", "WebSocket", "SonarCube", "LangChain.js", "OpenAI"]
    },
    {
      title: "Dev Practices",
      technologies: ["Agile", "Clean Architecture", "TDD"]
    }
  ];

  return (
    <section id="tech" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Tech Stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary group-hover:text-accent transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;