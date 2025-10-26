// src/components/sections/BlogSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Clock, ArrowRight, Calendar, User } from 'lucide-react';

const BlogSection = () => {
  const [visibleArticles, setVisibleArticles] = useState([]);
  const sectionRef = useRef(null);

  // Sample blog data - Replace with your actual blog data
  const blogArticles = [
    {
      id: 1,
      title: 'Building Scalable React Applications: Best Practices for 2025',
      excerpt: 'Discover the latest techniques and patterns for building maintainable, scalable React applications that can grow with your business needs.',
      category: 'Development',
      author: 'AppDost Team',
      date: 'Jan 15, 2025',
      readTime: '8 min',
      image: null, // Use gradient if no image
      gradient: 'from-blue-500 to-cyan-500',
      link: '/blog/react-best-practices-2025'
    },
    {
      id: 2,
      title: 'AI-Powered Mobile Apps: The Future of User Experience',
      excerpt: 'Explore how artificial intelligence is revolutionizing mobile app development and creating more personalized user experiences.',
      category: 'AI/ML',
      author: 'AppDost Team',
      date: 'Jan 10, 2025',
      readTime: '10 min',
      image: null,
      gradient: 'from-purple-500 to-pink-500',
      link: '/blog/ai-powered-mobile-apps'
    },
    {
      id: 3,
      title: 'Microservices Architecture: A Complete Guide for Startups',
      excerpt: 'Learn how to implement microservices architecture in your startup to improve scalability, maintainability, and team productivity.',
      category: 'Architecture',
      author: 'AppDost Team',
      date: 'Jan 5, 2025',
      readTime: '12 min',
      image: null,
      gradient: 'from-green-500 to-teal-500',
      link: '/blog/microservices-guide'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            blogArticles.forEach((_, index) => {
              setTimeout(() => {
                setVisibleArticles((prev) => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md mb-6 border border-blue-100">
            <span className="text-xl">📝</span>
            <span className="text-sm font-semibold text-slate-700">Latest Updates</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Insights &{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Tech Articles
            </span>
          </h2>

          <p className="text-lg text-slate-600">
            Stay informed with our latest insights, tech trends, and industry expertise
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogArticles.map((article, index) => (
            <article
              key={article.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 hover:border-blue-300 ${
                visibleArticles.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <a href={article.link} className="block">
                {/* Article Image/Gradient */}
                <div className="relative h-48 overflow-hidden">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${article.gradient} group-hover:scale-110 transition-transform duration-700 relative`}>
                      {/* Pattern Overlay */}
                      <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}></div>
                      
                      {/* Placeholder Icon */}
                      <div className="absolute inset-0 flex items-center justify-center text-white text-6xl opacity-20">
                        📝
                      </div>
                    </div>
                  )}

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Read More Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white text-slate-900 px-6 py-2 rounded-full font-semibold flex items-center space-x-2 shadow-lg">
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Meta Info Top */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                    <div className="flex items-center text-slate-500 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Author & Date */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center space-x-3">
                      {/* Author Avatar */}
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                        {article.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">
                          {article.author}
                        </div>
                        <div className="flex items-center text-xs text-slate-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Arrow Icon */}
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <ArrowRight className="w-4 h-4 text-blue-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </a>

              {/* Decorative Bottom Border */}
              <div className="h-1 w-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 group-hover:w-full transition-all duration-700"></div>
            </article>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="text-center">
          <a
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Newsletter Subscription - Optional */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 sm:p-10 text-white text-center relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-bold mb-3">Stay Updated with Our Newsletter</h3>
              <p className="text-blue-100 mb-6">
                Get the latest tech insights, industry trends, and exclusive content delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

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

export default BlogSection;