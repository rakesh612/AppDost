// src/components/sections/PortfolioSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Smartphone } from 'lucide-react';
import { FEATURED_PROJECTS } from '../../utils/Constants.jsx';

const PortfolioSection = () => {
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
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Featured Projects
          </h2>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mx-2"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-purple-600 to-transparent rounded-full"></div>
          </div>

          <p className="text-lg text-slate-600">
            Real solutions for real businesses - explore our successful projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {FEATURED_PROJECTS.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 hover:border-blue-300 ${
                visibleProjects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Project Image/Gradient */}
              <div className="relative h-56 overflow-hidden">
                {project.image ? (
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} group-hover:scale-110 transition-transform duration-700`}>
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-white/90 backdrop-blur-sm text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.playStoreLink && (
                    <a
                      href={project.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>Play Store</span>
                    </a>
                  )}
                  {project.websiteLink && (
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Website</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Decorative Bottom Border */}
              <div className="h-1 w-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <a
            href="/portfolio"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
          >
            <span>View All Projects</span>
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

        {/* Client Success Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-slate-700 font-medium">Project Success Rate</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-slate-700 font-medium">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border border-pink-100 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
              5⭐
            </div>
            <div className="text-slate-700 font-medium">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;