"use client";

import { useState } from "react";
import {
  Code,
  Globe,
  Database,
  Layers,
  ArrowRight,
  Check,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi Celina! I'm interested in your services and would like to discuss my project."
    );
    window.open(`https://wa.me/2348168188779?text=${message}`, "_blank");
  };

  const services = [
    {
      id: 1,
      icon: <Globe className="w-8 h-8" />,
      title: "Website Creation",
      description: "Custom websites that convert visitors into customers",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconColor: "bg-blue-500 text-white",
      borderColor: "border-blue-200 hover:border-blue-300",
      features: [
        "Responsive design for all devices",
        "SEO optimization",
        "Fast loading speeds",
        "Modern UI/UX design",
        "Content management systems",
        "E-commerce integration",
      ],
      technologies: ["React", "Next.js", "Vue.js", "WordPress", "Shopify"],
      techStack: {
        Languages: ["HTML", "CSS", "JavaScript", "TypeScript"],
        Frontend: [
          "React.js",
          "Next.js",
          "Vue.js",
          "Redux",
          "TanStack",
          "React Hook Form",
          "Zustand",
          "Context API",
        ],
        Styling: ["Tailwind CSS", "Bootstrap"],
        Animation: ["Framer Motion", "GSAP", "CSS Animations"],
        Tools: ["Git", "GitHub", "Yarn", "Vite", "ESLint"],
      },
    },
    {
      id: 2,
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Beautiful, interactive user interfaces that engage users",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconColor: "bg-purple-500 text-white",
      borderColor: "border-purple-200 hover:border-purple-300",
      features: [
        "Modern JavaScript frameworks",
        "Mobile-first responsive design",
        "Cross-browser compatibility",
        "Performance optimization",
        "Interactive animations",
        "API integration",
      ],
      technologies: [
        "React",
        "Vue.js",
        "TypeScript",
        "Tailwind CSS",
        "Bootstrap",
        "WordPress",
      ],
      techStack: {
        Languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
        Frontend: [
          "React.js",
          "Next.js",
          "Vue.js",
          "Redux",
          "TanStack",
          "React Hook Form",
          "Zustand",
          "Context API",
        ],
        Styling: ["Tailwind CSS", "Bootstrap", "SCSS/SASS"],
        Animation: [
          "Framer Motion",
          "GSAP",
          "CSS Animations",
          "AOS (Animate on Scroll)",
        ],
        Libraries: [
          "Chart.js",
          "React-Slider",
          "Swiper",
          "Leaflet",
          "React DatePicker",
          "React Router DOM",
        ],
        Tools: ["Git", "GitHub", "Yarn", "Vite", "ESLint", "Webpack"],
      },
    },
    {
      id: 3,
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Robust server-side solutions and database management",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      iconColor: "bg-green-500 text-white",
      borderColor: "border-green-200 hover:border-green-300",
      features: [
        "RESTful API development",
        "Database design & optimization",
        "Authentication & security",
        "Cloud deployment",
        "Third-party integrations",
        "Performance monitoring",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "WordPress",
      ],
      techStack: {
        Languages: ["JavaScript", "TypeScript"],
        Backend: ["Node.js", "Express.js"],
        Databases: ["MongoDB", "Mongoose", "PostgreSQL"],
        Security: ["bcrypt", "Joi", "Helmet"],
        Communication: ["Nodemailer"],
        Animation: ["Server-side rendering with animations"],
        Tools: ["Git", "GitHub", "Yarn", "ESLint", "Postman"],
      },
    },
    {
      id: 4,
      icon: <Layers className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Complete end-to-end web application solutions",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconColor: "bg-orange-500 text-white",
      borderColor: "border-orange-200 hover:border-orange-300",
      features: [
        "Complete web applications",
        "Frontend + Backend integration",
        "Database architecture",
        "DevOps & deployment",
        "Maintenance & support",
        "Scalable solutions",
      ],
      technologies: [
        "MERN Stack",
        "Next.js",
        "Vue.js",
        "Bootstrap",
        "WordPress",
      ],
      techStack: {
        Languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
        Frontend: [
          "React.js",
          "Next.js",
          "Vue.js",
          "Redux",
          "TanStack",
          "React Hook Form",
          "Zustand",
          "Context API",
        ],
        Backend: ["Node.js", "Express.js"],
        Databases: ["MongoDB", "Mongoose", "PostgreSQL"],
        Styling: ["Tailwind CSS", "Bootstrap", "SCSS/SASS"],
        Animation: [
          "Framer Motion",
          "GSAP",
          "CSS Animations",
          "AOS (Animate on Scroll)",
        ],
        Libraries: [
          "Chart.js",
          "React-Slider",
          "Swiper",
          "Leaflet",
          "React DatePicker",
          "React Router DOM",
        ],
        Security: ["bcrypt", "Joi", "Helmet"],
        Communication: ["Nodemailer"],
        Tools: [
          "Git",
          "GitHub",
          "Yarn",
          "Vite",
          "ESLint",
          "Webpack",
          "Postman",
        ],
        "Web Scraping": ["Octoparse"],
        "Project Management": ["Asana", "Trello"],
        "Office Tools": ["Microsoft Excel", "Google Sheets", "Microsoft Word"],
      },
    },
  ];

  const contactMethods = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      action: handleWhatsAppClick,
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      action: () => window.open("mailto:apucelina13@gmail.com"),
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Call",
      action: () => window.open("tel:+2348168188779"),
      color: "bg-blue-500 hover:bg-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-200 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-indigo-200 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-60 left-1/4 w-3 h-3 bg-slate-300 rounded-full opacity-50 animate-ping"></div>
        <div
          className="absolute bottom-32 left-16 w-4 h-4 bg-indigo-100 rounded-full opacity-50 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-5 h-5 bg-purple-200 rounded-full opacity-30 animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 right-10 w-2 h-2 bg-green-200 rounded-full opacity-60 animate-ping"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden">
          <div className="bg-slate-100/80 px-6 py-4 border-b border-slate-200/60 flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
              <div
                className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="w-3 h-3 bg-green-400 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
            <div className="ml-4 text-slate-600 font-mono text-sm">
              /services
            </div>
          </div>

          <div className="p-8">
            <div className="text-center mb-12">
              <div className="text-blue-600 font-mono text-sm mb-4 animate-pulse">
                what I can do for you
              </div>
              <h1 className="text-4xl font-bold text-slate-800 mb-4 transform hover:scale-105 transition-all duration-300">
                My Services
              </h1>
              <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
                I specialize in creating modern, scalable web solutions that
                help businesses grow. From simple websites to complex
                applications, I've got you covered.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-4 gap-6 mb-12">
              {services.map((service, _index) => (
                <div
                  role="button"
                  tabIndex={0}
                  key={service.id}
                  className={`${service.bgColor} ${service.borderColor} border rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-2 group cursor-pointer`}
                  onClick={() =>
                    setSelectedService(
                      selectedService === service.id ? null : service.id
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedService(
                        selectedService === service.id ? null : service.id
                      );
                    }
                  }}
                >
                  <div
                    className={`w-16 h-16 ${service.iconColor} rounded-xl flex items-center justify-center shadow-lg mb-4 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4 leading-relaxed group-hover:text-slate-700 transition-colors duration-200">
                    {service.description}
                  </p>

                  {selectedService === service.id && (
                    <div className="mt-4 pt-4 border-t border-slate-200 animate-pulse">
                      <div className="mb-4">
                        <h4 className="font-semibold text-slate-800 mb-2">
                          What's Included:
                        </h4>
                        <ul className="space-y-1">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-2 text-sm text-slate-600"
                            >
                              <Check className="w-4 h-4 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">
                          Core Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-white/60 text-xs font-medium text-slate-700 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3">
                          Complete Tech Stack:
                        </h4>
                        <div className="space-y-3">
                          {Object.entries(service.techStack).map(
                            ([category, techs]) => (
                              <div key={category}>
                                <h5 className="text-sm font-medium text-slate-700 mb-1">
                                  {category}:
                                </h5>
                                <div className="flex flex-wrap gap-1">
                                  {techs.map((tech: string) => (
                                    <span
                                      key={tech}
                                      className="px-2 py-0.5 bg-slate-100 text-xs text-slate-600 rounded"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    type="button"
                    className="w-full mt-4 bg-white/60 hover:bg-white/80 border border-slate-200 hover:border-slate-300 text-slate-700 font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-md"
                  >
                    {selectedService === service.id
                      ? "Hide Details"
                      : "View Details"}
                    <ArrowRight
                      className={`w-4 h-4 transform transition-all duration-200 ${
                        selectedService === service.id
                          ? "rotate-90"
                          : "group-hover:translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-8 mb-12 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                What Do You Need?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Business Website
                  </h4>
                  <p className="text-sm text-slate-600">
                    Professional presence online
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">Web App</h4>
                  <p className="text-sm text-slate-600">
                    Interactive applications
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Database className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    E-commerce
                  </h4>
                  <p className="text-sm text-slate-600">
                    Online store solutions
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Layers className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Custom Solution
                  </h4>
                  <p className="text-sm text-slate-600">
                    Tailored to your needs
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                  Not sure what you need? No problem! I'll help you identify the
                  best solution for your business goals and budget during our
                  consultation.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
                How We Work Together
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: "Discovery Call",
                    description:
                      "We discuss your goals, requirements, and timeline",
                    color: "bg-blue-500",
                  },
                  {
                    step: "02",
                    title: "Proposal & Quote",
                    description:
                      "I provide a detailed proposal with timeline and pricing",
                    color: "bg-purple-500",
                  },
                  {
                    step: "03",
                    title: "Development",
                    description:
                      "I build your solution with regular updates and previews",
                    color: "bg-green-500",
                  },
                  {
                    step: "04",
                    title: "Launch & Support",
                    description:
                      "We launch your project and I provide ongoing support",
                    color: "bg-orange-500",
                  },
                ].map((step, _index) => (
                  <div key={step.step} className="text-center group">
                    <div
                      className={`w-16 h-16 ${step.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                    >
                      <span className="font-bold text-lg">{step.step}</span>
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors duration-200">
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-200">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your project and bring your ideas to life. I'm
                here to help you succeed online.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {contactMethods.map((contact, _index) => (
                  <button
                    type="button"
                    key={contact.label}
                    onClick={contact.action}
                    className={`${contact.color} px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform flex items-center gap-2 min-w-[140px] justify-center group`}
                  >
                    <div className="transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-200">
                      {contact.icon}
                    </div>
                    {contact.label}
                  </button>
                ))}
              </div>

              <p className="text-blue-200 text-sm mt-6">
                Free consultation • Quick response • Professional service
              </p>
            </div>

            <div className="mt-12 bg-white/50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                Frequently Asked Questions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    q: "How long does it take to build a website?",
                    a: "Timeline varies from 1-8 weeks depending on complexity and features required.",
                  },
                  {
                    q: "Do you provide ongoing maintenance?",
                    a: "Yes! I offer maintenance packages to keep your site updated and secure.",
                  },
                  {
                    q: "Can you work with my existing design?",
                    a: "Absolutely! I can work with your designs or create new ones from scratch.",
                  },
                  {
                    q: "What's included in the pricing?",
                    a: "All prices include development, testing, deployment, and basic SEO optimization.",
                  },
                ].map((faq, _index) => (
                  <div
                    key={faq.q}
                    className="p-4 bg-white/60 rounded-lg border border-slate-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
                  >
                    <h4 className="font-semibold text-slate-800 mb-2">
                      {faq.q}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
