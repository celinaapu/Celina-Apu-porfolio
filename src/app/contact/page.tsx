"use client";

import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactPage: React.FC = () => {
  const handleEmailClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (window.confirm("Open email client to send message?")) {
      window.open("mailto:apucelina13@gmail.com");
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "apucelina13@gmail.com",
      action: handleEmailClick,
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconColor: "bg-purple-500 text-white",
      borderColor: "border-purple-200 hover:border-purple-300",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      value: "linkedin.com/in/celina-apu-41a428337",
      action: (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        window.open(
          "https://www.linkedin.com/in/celina-apu-41a428337",
          "_blank"
        );
      },
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconColor: "bg-blue-500 text-white",
      borderColor: "border-blue-200 hover:border-blue-300",
    },
    {
      icon: <Github className="w-5 h-5" />,
      title: "GitHub",
      value: "github.com/celinaapu",
      action: (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        window.open("https://github.com/celinaapu", "_blank");
      },
      bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
      iconColor: "bg-gray-700 text-white",
      borderColor: "border-gray-200 hover:border-gray-300",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Decorative background elements */}
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
        <div
          className="absolute top-16 right-1/3 w-3 h-3 bg-yellow-200 rounded-full opacity-40 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-4 h-4 bg-rose-200 rounded-full opacity-35 animate-bounce"
          style={{ animationDelay: "2.5s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden transform hover:shadow-2xl transition-all duration-500 hover:scale-[1.01]">
          {/* Browser-style header */}
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
              /contact
            </div>
          </div>

          <div className="p-8">
            <div className="text-green-600 font-mono text-sm mb-6 animate-pulse">
              get in touch
            </div>

            {/* Main heading */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-slate-800 mb-4 transform hover:scale-105 transition-all duration-300 cursor-default">
                Let's Work Together
              </h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Ready to bring your ideas to life? I'm here to help you build
                amazing web applications that drive results. Let's discuss your
                project!
              </p>
            </div>

            <div className="w-full">
              <div className="space-y-6">
                <div className="transform hover:scale-[1.02] transition-all duration-300">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">
                    Get In Touch
                  </h2>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    I'm always excited to take on new projects and collaborate
                    with innovative companies. Whether you need a full-stack
                    application, frontend development, or consultation, I'm here
                    to help turn your vision into reality.
                  </p>
                </div>

                {/* Simplified contact cards grid */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  {contactMethods.map((method, index) => (
                    <div
                      key={index}
                      onClick={(e) => method.action && method.action(e)}
                      className={`${method.bgColor} ${method.borderColor} flex flex-col items-center gap-3 p-6 border rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-2 group cursor-pointer hover:shadow-xl`}
                    >
                      <div
                        className={`w-12 h-12 ${method.iconColor} rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}
                      >
                        {method.icon}
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-slate-800 text-sm group-hover:text-slate-900 transition-colors duration-200">
                          {method.title}
                        </p>
                        <p className="text-slate-600 text-sm mt-1 leading-relaxed group-hover:text-slate-700 transition-colors duration-200">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border border-green-200 rounded-xl p-4 hover:shadow-md hover:scale-[1.02] transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse group-hover:scale-125 transition-all duration-300" />
                    <div>
                      <p className="font-medium text-green-800 group-hover:text-green-900 transition-colors duration-200">
                        Available for Projects
                      </p>
                      <p className="text-sm text-green-600 group-hover:text-green-700 transition-colors duration-200">
                        Currently accepting new client work
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
