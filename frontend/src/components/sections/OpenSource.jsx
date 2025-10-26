// src/components/sections/OpenSourceSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Github, Star, GitFork } from 'lucide-react';
import { OPEN_SOURCE_PROJECTS } from '../../utils/Constants.jsx';

const OpenSourceSection = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    const observers = projectRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !visibleProjects.includes(index)) {
              setVisibleProjects((prev) => [...prev, index]);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (projectRefs.current[index]) {
          observer.unobserve(projectRefs.current[index]);
        }
      });
    };
  }, []);

  return (
    <section id="opensource" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Open Source & Innovation Projects
          </h3>
          <p className="text-lg text-slate-600">
            Explore our contributions to AI, automation, and educational technology
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {OPEN_SOURCE_PROJECTS.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 hover:border-blue-300 ${
                visibleProjects.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient Header with Icon */}
              <div className={`relative bg-gradient-to-br ${project.gradient} p-8 text-center overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>

                {/* Animated Glow */}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>

                {/* Icon Circle */}
                <div className="relative z-10">
                  <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center text-5xl shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 mb-4">
                    {project.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-xl mb-1 drop-shadow-lg">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-white/90 text-sm drop-shadow">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} bg-opacity-10 text-slate-700`}
                      style={{
                        backgroundColor: tagIndex === 0 ? 'rgba(99, 102, 241, 0.1)' : 'rgba(168, 85, 247, 0.1)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* GitHub Link Button */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center space-x-2 w-full bg-gradient-to-r ${project.gradient} text-white px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg group/btn`}
                >
                  <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                  <span>View on GitHub</span>
                  <svg
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Decorative Bottom Element */}
              <div className={`h-2 w-0 bg-gradient-to-r ${project.gradient} group-hover:w-full transition-all duration-700`}></div>
            </div>
          ))}
        </div>

        {/* GitHub Profile CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center space-y-4 p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border-2 border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-600">Find more projects on</p>
                <p className="text-lg font-bold text-slate-900">GitHub</p>
              </div>
            </div>
            
            <a
              href="https://github.com/priyesranjan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Visit Our GitHub</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section - CTA for Project Collaboration */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Interested in working with us on your next project?
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether it's a commercial project, open-source contribution, or innovative idea, we're ready to collaborate and build something amazing together.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <span>Start Your Project</span>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;