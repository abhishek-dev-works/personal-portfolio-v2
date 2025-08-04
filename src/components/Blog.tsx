import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink } from "lucide-react";

const Blog = () => {
  const blogPost = {
    title: "Understanding React Hooks",
    description:
      "A clean, beginner-friendly deep dive into useState, useEffect, useRef, useMemo, and useCallback — with real examples and use cases.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Hooks", "Frontend"],
  };

  return (
    <section
      id="blog"
      className="py-20 px-6 bg-gradient-to-b from-secondary/20 to-background"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Blog
        </h2>

        <div className="glass-card p-8 rounded-xl hover:scale-[1.02] transition-all duration-300 group">
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{blogPost.readTime}</span>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
            {blogPost.title}
          </h3>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            {blogPost.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {blogPost.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <Button variant="hero" className="group">
            <a
              href="https://understanding-basic-react-hooks.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Read Full Article
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
