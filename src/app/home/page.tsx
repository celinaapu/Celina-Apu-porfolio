"use client";

import {
  ArrowRight,
  Code,
  Database,
  ExternalLink,
  Globe,
  Layers,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isCvActive, setIsCvActive] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description:
        "Modern, responsive user interfaces using React, Vue.js, and cutting-edge technologies",
      bgGradient: "from-blue-400 via-blue-500 to-blue-600",
      decorativeColor: "bg-blue-200",
      technologies: ["React.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 2,
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description:
        "Robust server-side solutions with Node.js, Express, and database integration",
      bgGradient: "from-green-400 via-green-500 to-green-600",
      decorativeColor: "bg-green-200",
      technologies: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
    },
    {
      id: 3,
      icon: <Layers className="w-8 h-8" />,
      title: "Full Stack Development",
      description:
        "Complete web applications from frontend to backend with seamless integration",
      bgGradient: "from-purple-400 via-purple-500 to-purple-600",
      decorativeColor: "bg-purple-200",
      technologies: ["MERN Stack", "Next.js", "TypeScript", "MongoDB"],
    },
    {
      id: 4,
      icon: <Globe className="w-8 h-8" />,
      title: "Website Creation",
      description:
        "Custom websites tailored to your business needs with modern design principles",
      bgGradient: "from-orange-400 via-orange-500 to-orange-600",
      decorativeColor: "bg-orange-200",
      technologies: [
        "Custom Design",
        "Responsive",
        "SEO Optimized",
        "Fast Loading",
      ],
    },
    {
      id: 5,
      icon: (
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          role="img"
          aria-labelledby="wordpressIconTitle"
        >
          <title id="wordpressIconTitle">WordPress Logo</title>
          <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91-.11-.937-.227-2.482.025-3.566.217-.932 1.405-5.956 1.405-5.956s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.742.098.119.112.222.085.343-.09.387-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.744 2.84c-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.778 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.5.75z" />
        </svg>
      ),
      title: "WordPress Development",
      description:
        "Custom WordPress solutions including themes, plugins, and e-commerce sites",
      bgGradient: "from-indigo-400 via-indigo-500 to-indigo-600",
      decorativeColor: "bg-indigo-200",
      technologies: ["WordPress", "Custom Themes", "WooCommerce", "PHP"],
    },
  ];

  return (
    <main className="pt-32 pb-16 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-green-50 min-h-screen overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-300 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-pink-300 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-60 left-1/4 w-3 h-3 bg-green-300 rounded-full opacity-50 animate-ping"></div>
        <div
          className="absolute bottom-32 right-16 w-4 h-4 bg-blue-200 rounded-full opacity-50 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-5 h-5 bg-purple-200 rounded-full opacity-30 animate-bounce"
          style={{ animationDelay: "1s" }}
        />
      </div>
      <section
        className={`max-w-6xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 transform transition-all duration-700 hover:scale-105">
            Hello, I'm <br />
            <span className="text-purple-600 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text animate-pulse">
              Celina Apu
            </span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-lg text-sm leading-relaxed transform transition-all duration-500 delay-300">
            As a Full Stack Developer, I excel at transforming complex designs
            into intuitive, high-performance digital solutions. I build robust
            and scalable web applications using modern JavaScript technologies
            like React, Node.js, and MongoDB, along with WordPress, to help
            businesses achieve their goals.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 hover:scale-105 hover:shadow-lg transition-all duration-300 inline-block transform hover:-translate-y-1"
            >
              Say Hello!
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full opacity-50 -z-10 animate-pulse"></div>
          <div
            className="absolute bottom-0 left-0 w-24 h-24 bg-green-200 rounded-full opacity-50 -z-10 animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>

          <div
            className={`relative transform transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Image
              src="https://res.cloudinary.com/celina/image/upload/v1756409933/Gemini_Generated_Image_tj5gnstj5gnstj5g_fuyong.png"
              alt="Celina Apu"
              width={350}
              height={350}
              className="rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </section>
      ---
      <section
        className={`max-w-4xl mx-auto mt-32 bg-white rounded-3xl p-8 shadow-lg flex flex-col md:flex-row gap-8 items-center relative transform transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-2xl opacity-30 -z-0 animate-pulse"></div>
        <div
          className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl opacity-30 -z-0 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative z-10">
          <div className="relative group">
            <Image
              src="https://res.cloudinary.com/celina/image/upload/v1756364204/Gemini_Generated_Image_d8mlyzd8mlyzd8ml_1_tqenyg.png"
              alt="Celina Apu"
              width={220}
              height={220}
              className="rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500"
            />

            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-3">
              {["twitter", "linkedin", "github", "facebook", "email"].map(
                (social) => (
                  <a
                    key={social}
                    href={
                      social === "twitter"
                        ? "https://twitter.com"
                        : social === "linkedin"
                          ? "https://linkedin.com"
                          : social === "github"
                            ? "https://github.com"
                            : social === "facebook"
                              ? "https://facebook.com"
                              : "mailto:youremail@example.com"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/70 shadow-sm hover:bg-white/90 transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4 text-purple-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-labelledby={`${social}-icon-title`}
                    >
                      <title id={`${social}-icon-title`}>
                        {social.charAt(0).toUpperCase() + social.slice(1)} icon
                      </title>
                      {(() => {
                        switch (social) {
                          case "twitter":
                            return (
                              <path
                                d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 
                4.48 0 0 0 22.4.36a9.09 9.09 0 0 1-2.88 
                1.1 4.52 4.52 0 0 0-7.69 4.13A12.8 12.8 0 
                0 1 3.16 1.67a4.52 4.52 0 0 0 1.4 6.05A4.48 
                4.48 0 0 1 2 7.14v.06a4.52 4.52 0 0 0 
                3.63 4.43 4.52 4.52 0 0 1-2.05.08 4.52 
                4.52 0 0 0 4.22 3.14A9.06 9.06 0 0 1 2 
                19.54a12.8 12.8 0 0 0 6.92 2.03c8.3 
                0 12.84-6.88 12.84-12.84 0-.2 0-.39-.01-.58A9.22 
                9.22 0 0 0 23 3z"
                              />
                            );
                          case "linkedin":
                            return (
                              <path
                                d="M4.98 3.5C4.98 4.88 3.87 6 2.5 
                6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 
                4.98 3.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.8v2.1h.05c.53-1 
                1.82-2.1 3.75-2.1 4 0 4.75 2.64 4.75 
                6.1V24h-4v-7.6c0-1.82-.03-4.15-2.53-4.15-2.53 
                0-2.92 1.96-2.92 4V24h-4V8.5z"
                              />
                            );
                          case "github":
                            return (
                              <path
                                d="M12 0C5.37 0 0 5.37 0 
                12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 
                0-.29-.01-1.06-.02-2.07-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.72.08-.72 
                1.2.09 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 
                3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 
                0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.51.12-3.15 
                0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 
                3.3-1.23 3.3-1.23.66 1.64.24 2.85.12 
                3.15.77.84 1.24 1.91 1.24 3.22 
                0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22 
                0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58A12.02 
                12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                              />
                            );
                          case "facebook":
                            return (
                              <path
                                d="M22.675 0h-21.35C.6 0 
                0 .6 0 1.326v21.348C0 23.4.6 24 
                1.326 24H12.82v-9.294H9.692V11.09h3.128V8.413c0-3.1 
                1.894-4.788 4.659-4.788 1.325 0 
                2.463.099 2.795.143v3.24l-1.918.001c-1.505 
                0-1.797.716-1.797 1.767v2.316h3.59l-.467 
                3.616h-3.123V24h6.116C23.4 24 24 23.4 
                24 22.674V1.326C24 .6 23.4 0 22.675 0z"
                              />
                            );
                          case "email":
                            return (
                              <path
                                d="M2 4a2 2 0 0 0-2 2v12a2 
                2 0 0 0 2 2h20a2 2 0 0 0 
                2-2V6a2 2 0 0 0-2-2H2zm0 
                2h20v.01L12 13 2 6.01V6z"
                              />
                            );
                          default:
                            return null;
                        }
                      })()}
                    </svg>
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="flex-1 relative z-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors duration-300">
            Professional Full Stack Developer & Problem Solver
          </h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            I architect and deploy scalable web applications using the MERN
            stack, with proven experience at companies like Kendee and Kraftaa.
            My expertise spans frontend development with React and Vue.js,
            backend API development with Node.js and Express, and database
            management with MongoDB. I'm passionate about clean code,
            performance optimization, and delivering exceptional user
            experiences that drive business results.
          </p>
          <div className="flex gap-4">
            <Link
              href="/projects"
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 text-sm transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg ${
                isCvActive
                  ? "border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              My Projects
            </Link>

            <a
              href="https://docs.google.com/document/d/1as5tBbRL-RpsAdEec-uCjJuVP_M2p-88iArTBIerG44/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsCvActive(true)}
              onMouseLeave={() => setIsCvActive(false)}
              onClick={() => setIsCvActive(true)}
              className="border border-purple-600 text-purple-600 px-5 py-2 rounded-lg font-medium hover:bg-purple-600 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm transform hover:-translate-y-1"
            >
              View CV
            </a>
          </div>
        </div>
      </section>
      ---
      <section className="max-w-6xl mx-auto mt-32 text-center relative">
        <div className="absolute top-0 left-0 w-6 h-6 bg-purple-200 rounded-full opacity-40 animate-float"></div>
        <div className="absolute top-20 right-10 w-4 h-4 bg-pink-200 rounded-full opacity-60 animate-bounce"></div>

        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors duration-300">
            My Services
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            I offer comprehensive web development services to help bring your
            digital vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Link
              href="/services"
              key={service.id}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => window.location.assign("/services")}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <div
                className={`absolute top-4 right-4 w-8 h-8 ${service.decorativeColor} rounded-full opacity-30 transform group-hover:scale-150 group-hover:rotate-90 transition-all duration-500`}
              ></div>
              <div
                className={`absolute bottom-4 left-4 w-6 h-6 ${service.decorativeColor} rounded-full opacity-20 transform group-hover:scale-125 group-hover:-rotate-45 transition-all duration-700`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.bgGradient} text-white rounded-xl flex items-center justify-center shadow-lg mb-6 mx-auto transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}
                >
                  {service.icon}
                </div>

                <h3 className="font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-xs font-medium text-gray-600 rounded-md group-hover:bg-gray-200 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-center text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium mr-2">
                    Click to explore
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {hoveredCard === service.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl pointer-events-none"></div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <Link
            href="/services"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 hover:scale-105 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            View All Services
          </Link>
        </div>
      </section>
      <section
        className={`max-w-6xl mx-auto mt-32 transform transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-blue-900 rounded-3xl px-12 py-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-4 left-4 w-16 h-16 border border-white/20 rounded-full animate-spin"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border border-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-1/3 w-8 h-8 border border-white/15 rounded-full animate-bounce"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 transform hover:scale-105 transition-transform duration-300">
              Ready to Build Something Amazing?
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's discuss your project!
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 hover:text-gray-200 transition-colors duration-300">
              From concept to deployment, I'll help you build robust, scalable
              web applications using modern technologies. Let's transform your
              ideas into powerful digital solutions that drive results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 hover:scale-105 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact with me
              <ExternalLink className="w-4 h-4 transform group-hover:rotate-12 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(5deg);
          }
          66% {
            transform: translateY(5px) rotate(-3deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
