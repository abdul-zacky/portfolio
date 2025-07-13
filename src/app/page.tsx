'use client';

import Footer from '@/components/Footer';
import { useEffect, useRef } from 'react';

export default function Home() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure page starts at top
    window.scrollTo(0, 0);
    
    // Prevent scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Smooth parallax with requestAnimationFrame
    let ticking = false;

    const updateParallax = () => {
      const scrolled = window.pageYOffset;
      const parallax = parallaxRef.current;
      
      if (parallax) {
        const speed = scrolled * 0.3;
        parallax.style.transform = `translate3d(0, ${speed}px, 0)`;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* AI Background Image with Smooth Parallax */}
        <div 
          ref={parallaxRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-bg" 
          style={{
            backgroundImage: 'url(/bg.png)',
            top: '-20%',
            height: '120%'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 text-center px-6">
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto hero-animation">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl futuristic-font tracking-wider">
              zac
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed font-medium drop-shadow-xl tech-font">
              Creative Developer crafting innovative digital experiences
            </p>
            <p className="text-lg text-white mb-10 max-w-2xl mx-auto drop-shadow-lg tech-font font-light">
              Passionate about modern web technologies, AI, and creating solutions that make a difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="glass-hover px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="glass-dark px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:bg-white/20 transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg futuristic-font">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-md">My Journey</h3>
              <p className="text-white leading-relaxed mb-6 drop-shadow-sm">
                Hi, I&apos;m Zac, a passionate web developer with a deep love for creating
                innovative digital experiences. I specialize in modern web technologies
                and AI-driven solutions that push the boundaries of what&apos;s possible.
              </p>
              <p className="text-white leading-relaxed drop-shadow-sm">
                With expertise in Next.js, React, Python, and machine learning, I bridge
                the gap between creative design and technical excellence to deliver
                solutions that truly make an impact.
              </p>
            </div>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-md">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {['React/Next.js', 'TypeScript', 'Python', 'Machine Learning', 'Tailwind CSS', 'Node.js', 'AI/Neural Networks', 'Data Visualization'].map((skill, index) => (
                  <div key={index} className="glass-dark rounded-lg p-3 text-center">
                    <span className="text-white font-medium drop-shadow-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg futuristic-font">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'DataClair',
                description: 'Advanced data visualization and analytics platform built with modern web technologies.',
                tech: ['Next.js', 'TypeScript', 'Data Viz'],
                link: 'https://dataclair.vercel.app',
                isExternal: true,
              },
              {
                title: 'Neural Style Transfer',
                description: 'Open-source AI project for artistic style transfer using neural networks.',
                tech: ['Python', 'TensorFlow', 'Computer Vision'],
                link: 'https://github.com/abdul-zacky/neural-style-transfer',
                isExternal: true,
              },
              {
                title: 'Personal Portfolio',
                description: 'Modern glassmorphic portfolio showcasing my projects and skills.',
                tech: ['Next.js', 'Tailwind CSS', 'Glassmorphism'],
                link: '#home',
                isExternal: false,
              },
            ].map((project, index) => (
              <div
                key={index}
                className="glass glass-hover rounded-2xl p-6 group"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md">{project.title}</h3>
                  <p className="text-white leading-relaxed mb-4 drop-shadow-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="glass-dark px-3 py-1 rounded-full text-sm text-white font-medium drop-shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  target={project.isExternal ? "_blank" : "_self"}
                  rel={project.isExternal ? "noopener noreferrer" : ""}
                  className="inline-flex items-center gap-2 text-white font-semibold hover:text-accent-300 transition-colors duration-300"
                >
                  {project.isExternal ? 'View Project' : 'View Live'}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg futuristic-font">Let&apos;s Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          <div className="glass rounded-2xl p-12 text-center">
            <p className="text-xl text-white leading-relaxed mb-8 drop-shadow-sm">
              Interested in collaborating or have a project in mind? I&apos;d love to hear from you!
              Let&apos;s create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:abdul.zacky@ui.ac.id"
                className="glass-hover px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 inline-flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/abdulzacky/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:bg-white/20 inline-flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/abdul-zacky"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:bg-white/20 inline-flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
