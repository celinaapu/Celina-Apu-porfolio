"use client";

import Image from "next/image";
import type React from "react";
import { useState } from "react";
import { Calendar, Github, Globe, Users } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: "complete-apps" | "small-projects";
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  status: "completed" | "in-progress";
  date: string;
  teamSize?: number;
}

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "complete-apps" | "small-projects"
  >("all");

  const projects: Project[] = [
    {
      id: "kendee-real-estate",
      title: "Kendee Real Estate Platform",
      description:
        "Comprehensive real estate platform with property listings, user profiles, and advanced search capabilities. Built with modern React architecture.",
      image: "/api/placeholder/400/300",
      tech: [
        "React.js",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "RESTful APIs",
      ],
      category: "complete-apps",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Property Listings",
        "User Authentication",
        "Advanced Search",
        "Responsive Design",
      ],
      status: "in-progress",
      date: "July 2025 - Present",
      teamSize: 4,
    },
    {
      id: "kraftaa-marketplace",
      title: "Kraftaa Marketplace",
      description:
        "Full-featured marketplace platform connecting over 500 craftspeople with customers. Includes job posting, search functionality, and vendor management.",
      image: "/api/placeholder/400/300",
      tech: ["React.js", "Vue.js", "TypeScript", "Redux", "Node.js", "MongoDB"],
      category: "complete-apps",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Job Posting System",
        "Vendor Onboarding",
        "Payment Integration",
        "Interactive Maps",
      ],
      status: "completed",
      date: "March - June 2025",
      teamSize: 6,
    },
    {
      id: "recipe-blog",
      title: "Recipe Blog Platform",
      description:
        "End-to-end web application for recipe management with user authentication, dynamic forms, and optimized database queries.",
      image: "/api/placeholder/400/300",
      tech: [
        "Next.js",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      category: "complete-apps",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Recipe Management",
        "User Profiles",
        "Search & Filter",
        "Responsive UI",
      ],
      status: "completed",
      date: "April 2024",
      teamSize: 1,
    },
    {
      id: "task-manager",
      title: "Advanced Todo Manager",
      description:
        "Comprehensive task management application with Redux Toolkit, JWT authentication, and data visualization features.",
      image: "/api/placeholder/400/300",
      tech: [
        "React.js",
        "TypeScript",
        "Redux Toolkit",
        "Node.js",
        "Chart.js",
        "MongoDB",
      ],
      category: "complete-apps",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Task Analytics",
        "Team Collaboration",
        "Priority Management",
        "Email Notifications",
      ],
      status: "completed",
      date: "October 2023",
      teamSize: 1,
    },

    {
      id: "portfolio-website",
      title: "Personal Portfolio",
      description:
        "Modern portfolio website showcasing projects and skills with smooth animations and responsive design.",
      image: "/api/placeholder/300/200",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "small-projects",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Dark/Light Mode", "Smooth Animations", "Contact Form"],
      status: "completed",
      date: "2025",
    },
    {
      id: "weather-app",
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts and interactive maps using external APIs.",
      image: "/api/placeholder/300/200",
      tech: ["React.js", "JavaScript", "Weather API", "Leaflet"],
      category: "small-projects",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Live Weather Data", "5-Day Forecast", "Interactive Maps"],
      status: "completed",
      date: "2024",
    },
    {
      id: "expense-tracker",
      title: "Expense Tracker",
      description:
        "Personal finance management tool with data visualization and budget tracking capabilities.",
      image: "/api/placeholder/300/200",
      tech: ["Vue.js", "Chart.js", "Local Storage", "CSS3"],
      category: "small-projects",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Budget Management", "Expense Categories", "Visual Reports"],
      status: "completed",
      date: "2024",
    },
    {
      id: "color-palette",
      title: "Color Palette Generator",
      description:
        "Tool for generating harmonious color palettes for web design projects with export functionality.",
      image: "/api/placeholder/300/200",
      tech: ["JavaScript", "HTML5", "CSS3", "Canvas API"],
      category: "small-projects",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Color Generation", "Palette Export", "Accessibility Check"],
      status: "completed",
      date: "2023",
    },
    {
      id: "quiz-app",
      title: "Interactive Quiz App",
      description:
        "Educational quiz application with multiple categories, scoring system, and progress tracking.",
      image: "/api/placeholder/300/200",
      tech: ["React.js", "TypeScript", "Context API", "CSS Modules"],
      category: "small-projects",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Multiple Categories", "Score Tracking", "Timer Function"],
      status: "completed",
      date: "2023",
    },
    {
      id: "markdown-editor",
      title: "Markdown Editor",
      description:
        "Real-time markdown editor with live preview, syntax highlighting, and file management.",
      image: "/api/placeholder/300/200",
      tech: ["React.js", "Monaco Editor", "Markdown Parser", "File System API"],
      category: "small-projects",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Live Preview", "Syntax Highlighting", "File Export"],
      status: "completed",
      date: "2023",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  const completeApps = filteredProjects.filter(
    (p) => p.category === "complete-apps"
  );
  const smallProjects = filteredProjects.filter(
    (p) => p.category === "small-projects"
  );

  const ProjectCard: React.FC<{
    project: Project;
    size: "large" | "small";
  }> = ({ project, size }) => (
    <div
      className={`bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/60 hover:border-blue-300/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group ${
        size === "large" ? "h-auto" : "h-full"
      }`}
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            size === "large" ? "h-48" : "h-32"
          }`}
        />
        <div className="absolute top-3 right-3 flex space-x-2">
          {project.status === "in-progress" && (
            <span className="px-2 py-1 bg-yellow-500 text-white text-xs rounded-full font-medium">
              In Progress
            </span>
          )}
          <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full font-medium">
            {project.category === "complete-apps" ? "Full App" : "Project"}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3
            className={`font-bold text-slate-800 group-hover:text-blue-600 transition-colors ${
              size === "large" ? "text-xl" : "text-lg"
            }`}
          >
            {project.title}
          </h3>
          {project.teamSize && (
            <div className="flex items-center text-slate-500 text-sm">
              <Users size={14} className="mr-1" />
              {project.teamSize}
            </div>
          )}
        </div>

        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech
            .slice(0, size === "large" ? 5 : 3)
            .map((tech, _index) => (
              <span
                key={tech}
                className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
          {project.tech.length > (size === "large" ? 5 : 3) && (
            <span className="px-2 py-1 bg-slate-200 text-slate-600 text-xs rounded-md">
              +{project.tech.length - (size === "large" ? 5 : 3)}
            </span>
          )}
        </div>

        {size === "large" && (
          <div className="mb-4">
            <div className="grid grid-cols-2 gap-1 text-xs text-slate-600">
              {project.features.slice(0, 4).map((feature, _index) => (
                <div key={feature} className="flex items-center">
                  <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
          <div className="flex items-center text-slate-500 text-xs">
            <Calendar size={12} className="mr-1" />
            {project.date}
          </div>
          <div className="flex space-x-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="flex items-center px-3 py-1 bg-blue-500 text-white text-xs rounded-md hover:bg-blue-600 transition-colors"
              >
                <Globe size={12} className="mr-1" />
                Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="flex items-center px-3 py-1 bg-slate-700 text-white text-xs rounded-md hover:bg-slate-800 transition-colors"
              >
                <Github size={12} className="mr-1" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-200 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-indigo-200 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-48 left-1/4 w-3 h-3 bg-slate-300 rounded-full opacity-50 animate-ping"></div>
        <div
          className="absolute bottom-32 left-16 w-4 h-4 bg-indigo-100 rounded-full opacity-50 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden">
          <div className="bg-slate-100/80 px-6 py-4 border-b border-slate-200/60 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="ml-4 text-slate-600 font-mono text-sm">
                /projects
              </div>
            </div>

            <div className="flex space-x-2">
              {(["all", "complete-apps", "small-projects"] as const).map(
                (filter) => (
                  <button
                    type="button"
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                      activeFilter === filter
                        ? "bg-blue-500 text-white"
                        : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                    }`}
                  >
                    {filter === "all"
                      ? "All"
                      : filter
                          .split("-")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="p-8">
            <div className="text-green-600 font-mono text-sm mb-6">
              ls -la projects
            </div>

            <div className="mb-8">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">
                My Projects
              </h1>
              <p className="text-slate-600 text-lg">
                A collection of applications and projects I've built, from
                comprehensive full-stack applications to focused utility tools.
              </p>
            </div>

            {(activeFilter === "all" || activeFilter === "complete-apps") &&
              completeApps.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                    <span className="text-blue-500 mr-2">#</span>
                    complete-apps
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {completeApps.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        size="large"
                      />
                    ))}
                  </div>
                </div>
              )}

            {(activeFilter === "all" || activeFilter === "small-projects") &&
              smallProjects.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                    <span className="text-green-500 mr-2">#</span>
                    small-projects
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {smallProjects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        size="small"
                      />
                    ))}
                  </div>
                </div>
              )}

            <div className="mt-12 pt-8 border-t border-slate-200/60">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">
                    {projects.length}
                  </div>
                  <div className="text-sm text-slate-600">Total Projects</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">
                    {completeApps.length}
                  </div>
                  <div className="text-sm text-slate-600">Complete Apps</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600">
                    {smallProjects.length}
                  </div>
                  <div className="text-sm text-slate-600">Small Projects</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-600">
                    {projects.filter((p) => p.status === "in-progress").length}
                  </div>
                  <div className="text-sm text-slate-600">In Progress</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
