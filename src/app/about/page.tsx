"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface SkillCategory {
  title: string;
  skills: string[];
}

interface JourneyItem {
  text: string;
}

export default function AboutPage() {
  const [typedText, setTypedText] = useState<string>("");
  const fullText = "Hello, I'm Celina!";

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      }
    };

    const timer = setTimeout(typeWriter, 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Vue.js", "Redux", "TanStack", "Zustand"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth"],
    },
    {
      title: "Tools & More",
      skills: [
        "Git/GitHub",
        "Tailwind CSS",
        "Vite",
        "ESLint",
        "Chart.js",
        "Leaflet Maps",
      ],
    },
  ];

  const journeyItems: JourneyItem[] = [
    { text: "Built scalable marketplace platforms serving 500+ craftspeople" },
    {
      text: "Reduced API integration errors by 15% through TypeScript implementation",
    },
    {
      text: "Architected full-stack applications handling 1,000+ active users",
    },
    {
      text: "Improved search efficiency by 10% with optimized React implementations",
    },
    {
      text: "Enhanced data consistency by 25% using Redux Toolkit and TypeScript",
    },
    {
      text: "From Microbiology to Full Stack - I love complex problem solving!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-200 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-indigo-200 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-48 left-1/4 w-3 h-3 bg-slate-300 rounded-full opacity-50 animate-ping"></div>
        <div
          className="absolute top-64 right-1/3 w-5 h-5 bg-blue-100 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-16 w-4 h-4 bg-indigo-100 rounded-full opacity-50 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-48 right-16 w-3 h-3 bg-slate-200 rounded-full opacity-40 animate-ping"
          style={{ animationDelay: "0.5s" }}
        ></div>

        <div className="absolute inset-0 bg-grid-slate-100/50 bg-[size:20px_20px] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden mb-8">
          <div className="bg-slate-100/80 px-6 py-4 border-b border-slate-200/60 flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="ml-4 text-slate-600 font-mono text-sm">
              ~/about-me
            </div>
          </div>

          <div className="p-8">
            <div className="text-green-600 font-mono text-sm mb-6">
              who am I?
            </div>

            <div className="mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 min-h-[3.5rem]">
                    {typedText}
                    <span className="animate-blink">|</span>
                  </h1>
                  <div className="space-y-4 text-slate-700 text-lg leading-relaxed">
                    <p>
                      I'm a
                      <span className="font-semibold text-blue-600">
                        highly motivated Full Stack Developer
                      </span>
                      with a unique journey from Microbiology to modern web
                      development. Based in Nigeria, I specialize in crafting
                      <span className="font-semibold text-indigo-600">
                        robust, scalable web applications
                      </span>
                      that transform complex ideas into intuitive and highly
                      functional digital experiences.
                    </p>
                    <p>
                      Transforming my
                      <span className="font-semibold text-purple-600">
                        creativity and technical expertise
                      </span>
                      into cutting-edge websites has been my passion. I thrive
                      on building applications from scratch and raising them
                      into modern, user-friendly web experiences that drive real
                      business results. I also
                      <span className="font-semibold text-emerald-600">
                        enjoy working in collaborative teams
                      </span>
                      , where I can share knowledge and learn from fellow
                      developers.
                    </p>
                    <p>
                      I continuously strive to learn about the newest
                      technologies and frameworks while fostering a positive
                      team environment.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl transform rotate-3 opacity-50"></div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-200 to-pink-200 rounded-2xl transform -rotate-2 opacity-30"></div>

                    <div className="relative bg-white rounded-2xl p-2 shadow-xl">
                      <Image
                        src="https://res.cloudinary.com/celina/image/upload/v1756409888/Gemini_Generated_Image_7jti0f7jti0f7jti_1_dlrcww.png"
                        alt="Celina Apu - Full Stack Developer"
                        width={200}
                        height={200}
                        className="w-72 h-96 object-cover rounded-xl"
                      />

                      <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-medium shadow-lg flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-sm">Available for projects</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="text-blue-500 mr-2">#</span>
                skills
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((category) => (
                  <div
                    key={category.title}
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 hover:border-blue-300/60 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="text-green-500 mr-2">#</span>
                my-journey
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {journeyItems.map((item) => (
                  <div
                    key={item.text}
                    className="bg-slate-50/60 backdrop-blur-sm rounded-lg p-4 border border-slate-200/40 hover:border-green-300/60 hover:shadow-sm transition-all duration-300 hover:translate-x-1 group"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold mt-1 group-hover:text-green-600 transition-colors">
                        →
                      </span>
                      <p className="text-slate-700 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="text-purple-500 mr-2">#</span>
                current-focus
              </h2>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200/40">
                <p className="text-slate-700 text-lg leading-relaxed">
                  Currently working as a
                  <span className="font-semibold text-purple-600">
                    Frontend Developer at Arya Realties
                  </span>
                  , where I collaborate with UI/UX designers and backend
                  engineers to build engaging, responsive interfaces for
                  property management platforms. I'm passionate about{" "}
                  <span className="font-semibold text-blue-600">
                    performance optimization
                  </span>
                  , clean code practices, and creating exceptional user
                  experiences that drive business growth.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200/60">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="text-indigo-500 mr-2">#</span>
                let's-connect
              </h2>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:apucelina13@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
                >
                  📧 Email
                </a>
                <a
                  href="https://www.linkedin.com/in/celina-apu-41a428337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-200 font-medium"
                >
                  💼 LinkedIn
                </a>
                <a
                  href="https://github.com/celinaapu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200 font-medium"
                >
                  🚀 GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        .bg-grid-slate-100\\/50 {
          background-image: linear-gradient(
              to right,
              theme("colors.slate.100") 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              theme("colors.slate.100") 1px,
              transparent 1px
            );
        }
      `}</style>
    </div>
  );
}
