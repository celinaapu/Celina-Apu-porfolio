"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code,
  Globe,
  Database,
  Layers,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
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
      {/* Animated background elements */}
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
      {/* Hero Section */}
      <section
        className={`max-w-6xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 transform transition-all duration-700 hover:scale-105">
            Hello, I'm <br />
            <span className="text-purple-600 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
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
      {/* About Section */}
      <section
        className={`max-w-4xl mx-auto mt-32 bg-white rounded-3xl p-8 shadow-lg flex flex-col md:flex-row gap-8 items-center relative transform transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Animated background decorative elements for card */}
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
              {[
                "twitter",
                "linkedin",
                "github",
                "facebook",
                "email",
              ].map((social, index) => (
                // Inside the `<a>` tag, replace the existing SVG
                <a
                  key={social}
                  href="#"
                  className="..."
                  style={{ transitionDelay: `${(index + 8) * 100}ms` }}
                >
                  <svg
                    className="w-4 h-4 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {/* Use a switch statement to render the correct SVG path */}
                    {(() => {
                      switch (social) {
                        case "twitter":
                          return (
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          );
                        case "linkedin":
                          return (
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.763s.784-1.763 1.75-1.763 1.75.79 1.75 1.763-.783 1.763-1.75 1.763zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          );
                        
                        case "github":
                          return (
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.492.997.107-.775.418-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.802.576 4.765-1.589 8.197-6.095 8.197-11.389 0-6.627-5.373-12-12-12z" />
                          );
                        case "facebook":
                          return (
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.959.192-1.333 1.588-1.333h2.412v-3h-3.642c-3.149 0-4.358 1.597-4.358 4.615v1.385z" />
                          );
                        case "email":
                          return (
                            <path d="M12 12.713l-11.758-9.444c-.11-.087-.168-.201-.173-.315-.006-.114.024-.225.08-.328.057-.103.145-.188.256-.24.111-.052.235-.078.364-.078h22.258c.129 0 .253.026.364.078.111.052.199.137.256.24.056.103.086.214.08.328-.005.114-.063.228-.173.315l-11.758 9.444zM12 14.287l-12 9.576v-15.823l12 9.576zm2-1.576l12-9.576v15.823l-12-9.576z" />
                          );
                        default:
                          return null;
                      }
                    })()}
                  </svg>
                </a>
              ))}
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
              className="bg-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-purple-700 hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm transform hover:-translate-y-1"
            >
              My Projects
            </Link>
            <a
              href="#"
              className="border border-purple-600 text-purple-600 px-5 py-2 rounded-lg font-medium hover:bg-purple-600 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm transform hover:-translate-y-1"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
      ---
      {/* Services Section */}
      <section className="max-w-6xl mx-auto mt-32 text-center relative">
        {/* Floating elements */}
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
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => (window.location.href = "/services")}
            >
              {/* Gradient overlay that appears on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Decorative elements */}
              <div
                className={`absolute top-4 right-4 w-8 h-8 ${service.decorativeColor} rounded-full opacity-30 transform group-hover:scale-150 group-hover:rotate-90 transition-all duration-500`}
              ></div>
              <div
                className={`absolute bottom-4 left-4 w-6 h-6 ${service.decorativeColor} rounded-full opacity-20 transform group-hover:scale-125 group-hover:-rotate-45 transition-all duration-700`}
              ></div>

              {/* Content */}
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

                {/* Technology tags */}
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-xs font-medium text-gray-600 rounded-md group-hover:bg-gray-200 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Click indicator */}
                <div className="flex items-center justify-center text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium mr-2">
                    Click to explore
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Hover effect overlay */}
                {hoveredCard === service.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl pointer-events-none"></div>
                )}
              </div>
            </div>
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
      {/* Enhanced CTA Section */}
      <section
        className={`max-w-6xl mx-auto mt-32 transform transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-blue-900 rounded-3xl px-12 py-16 text-center text-white relative overflow-hidden">
          {/* Animated background patterns */}
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
