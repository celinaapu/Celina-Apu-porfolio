"use client";

import { ExternalLink, Github, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "Realtime Weather Dashboard",
    description:
      "A modern, responsive weather dashboard built with React, TypeScript, and Zustand. Features real-time clock, dark/light mode, Celsius/Fahrenheit toggle, and simulated API fetching for current and 5-day forecasts.",
    image:
      "https://res.cloudinary.com/celina/image/upload/v1762884877/Screenshot_From_2025-11-11_19-14-11_eyyvca.png",
    liveUrl: "https://realtime-weather-dashboard.netlify.app/",
    githubUrl: "https://github.com/celinaapu/weather-dashboard",
    status: "Active",
  },
  {
    title: "Context vs Zustand Demo",
    description:
      "A clean and interactive demo comparing Context API and Zustand for state management in React. Includes routine creation, media preview, and persistent storage.",
    image:
      "https://res.cloudinary.com/celina/image/upload/v1762860379/Screenshot_From_2025-11-11_12-24-53_l4xrmr.png",
    liveUrl: "https://context-api-vs-zustand-routine-app.netlify.app/",
    status: "Active",
  },

  {
    title: "Monthly Expense Tracker",
    description:
      "A financial management app with Redux Toolkit and Chart.js. Track monthly income, expenses, and savings goals with elegant dark UI and currency conversion.",
    image:
      "https://res.cloudinary.com/celina/image/upload/v1762861457/Screenshot_From_2025-11-11_12-42-30_a3gpkw.png",
    liveUrl: "https://month-expense-tracker.netlify.app/",
    status: "Active",
  },
  {
    title: "Smart Build Services",
    description:
      "A responsive real estate platform showcasing smart property listings and modern UI design with Next.js and Tailwind CSS.",
    image:
      "https://res.cloudinary.com/celina/image/upload/v1762862732/Screenshot_From_2025-11-11_13-05-10_olam1a.png",
    liveUrl: "https://smart-build-services.netlify.app/",
    status: "Active",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio built with Next.js 15, TailwindCSS, React, and TypeScript. Showcases my projects, services, and skills.",
    image:
      "https://res.cloudinary.com/celina/image/upload/v1762863237/Screenshot_From_2025-11-11_13-13-40_mnc12x.png",
    liveUrl: "https://celina-porfolio.netlify.app/",
    status: "Active",
  },
  {
    title: "Advanced To-Do App",
    description:
      "An advanced routine management app built with Zustand and Context API comparison. Supports media uploads, routine persistence, and optimized state handling.",
    image:
      "https://res.cloudinary.com/celina/image/upload/v1762861457/Screenshot_From_2025-11-11_12-38-40_cviouh.png",
    liveUrl: "https://context-api-vs-zustand-routine-app.netlify.app/",
    status: "Active",
  },
  {
    title: "Recipe Blog (Fullstack)",
    description:
      "A complete food recipe platform with user authentication, CRUD recipe management, and media uploads. Built with Next.js (frontend) and Express + MongoDB (backend). Currently in progress as the backend is being deployed to Render for public access. Developers can explore the backend source code below.",
    image:
      "https://res.cloudinary.com/celina/image/upload/v1762883475/Screenshot_From_2025-11-11_18-48-14_qrbdnz.png",
    liveUrl: "https://next-recipe-blog.netlify.app/",
    frontendGithub: "https://github.com/celinaapu/Next-recipe-blog",
    backendGithub: "https://github.com/celinaapu/Express-recipe-blog-vault",
    status: "In Progress",
  },
];

const ProjectsPage = () => {
  // Fixed: Type should be string | null instead of just null
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Animated Header */}
        <div className="animate-fade-in-down">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
            My Projects
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Explore my recent projects showcasing clean architecture, state
            management, and responsive UI with modern React and TypeScript
            practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col animate-fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "backwards",
              }}
            >
              <div className="relative w-full h-52 overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors hover:text-blue-600">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Conditional GitHub Links for Recipe Blog */}
                  {project.title === "Recipe Blog (Fullstack)" && (
                    <div
                      className={`transition-all duration-500 transform ${
                        hoveredProject === project.title
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2"
                      }`}
                    >
                      {project.frontendGithub && (
                        <p className="text-sm text-gray-700 mb-1">
                          <strong>Frontend Repo:</strong>{" "}
                          <a
                            href={project.frontendGithub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline break-all transition-colors"
                          >
                            {project.frontendGithub}
                          </a>
                        </p>
                      )}
                      {project.backendGithub && (
                        <p className="text-sm text-gray-700 mb-1">
                          <strong>Backend Repo:</strong>{" "}
                          <a
                            href={project.backendGithub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline break-all transition-colors"
                          >
                            {project.backendGithub}
                          </a>
                        </p>
                      )}
                    </div>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800 underline break-all mt-2 block transition-all hover:translate-x-1"
                    >
                      {project.liveUrl.replace(/^https?:\/\//, "")}
                    </a>
                  )}
                </div>

                <div className="flex items-center justify-between mt-auto pt-4">
                  {project.status && (
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-2 transition-all hover:scale-105 ${
                        project.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {project.status === "In Progress" && (
                        <Loader2
                          size={12}
                          className="animate-spin text-yellow-700"
                        />
                      )}
                      {project.status}
                    </span>
                  )}

                  <div className="flex items-center gap-3">
                    {/* General GitHub Icon */}
                    {project.title !== "Recipe Blog (Fullstack)" &&
                      project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          aria-label={`GitHub repository for ${project.title}`}
                          className="p-2 text-gray-700 hover:text-gray-900 transition-all hover:scale-110 hover:rotate-12"
                        >
                          <Github size={18} />
                        </Link>
                      )}

                    {/* GitHub Icons for Recipe Blog */}
                    {project.title === "Recipe Blog (Fullstack)" && (
                      <div
                        className={`flex items-center gap-1 transition-all duration-500 ${
                          hoveredProject === project.title
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-4"
                        }`}
                      >
                        {project.frontendGithub && (
                          <Link
                            href={project.frontendGithub}
                            target="_blank"
                            aria-label={`Frontend GitHub for ${project.title}`}
                            className="p-2 text-gray-700 hover:text-gray-900 transition-all hover:scale-110 hover:rotate-12"
                          >
                            <Github size={18} />
                          </Link>
                        )}
                        {project.backendGithub && (
                          <Link
                            href={project.backendGithub}
                            target="_blank"
                            aria-label={`Backend GitHub for ${project.title}`}
                            className="p-2 text-gray-700 hover:text-gray-900 transition-all hover:scale-110 hover:rotate-12"
                          >
                            <Github size={18} />
                          </Link>
                        )}
                      </div>
                    )}

                    {/* Live Demo Icon */}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        aria-label={`Live demo for ${project.title}`}
                        className="p-2 text-gray-700 hover:text-blue-600 transition-all hover:scale-110 hover:-translate-y-1"
                      >
                        <ExternalLink size={18} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add CSS animations in your global styles or as a style tag */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
