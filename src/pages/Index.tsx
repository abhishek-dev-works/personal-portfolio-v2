import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TechStack />
      <WorkExperience />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
};

export default Index;
