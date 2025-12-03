'use client';

import Footer from '@/components/Footer';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import HonorsAwards from '@/components/HonorsAwards';
import FloatingLines from '@/components/FloatingLines';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showECGModal, setShowECGModal] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Ensure page starts at top
    window.scrollTo(0, 0);

    // Prevent scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* FloatingLines Background - Fixed for entire page */}
      <div className="fixed inset-0 z-0" style={{ width: '100%', height: '100%' }}>
        <FloatingLines
          linesGradient={['#60a5fa', '#3b82f6', '#2563eb']}
          enabledWaves={['top', 'bottom']}
          lineCount={[15, 15]}
          lineDistance={[6, 6]}
          topWavePosition={{ x: 10.0, y: 0.5, rotate: -0.4 }}
          middleWavePosition={{ x: 5.0, y: 0.0, rotate: 0.2 }}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10">
        <div className="relative z-10 text-center px-6">
          <div className="p-12 max-w-4xl mx-auto hero-animation">
            <h1 className="text-6xl md:text-8xl font-bold mb-2 text-white drop-shadow-2xl futuristic-font tracking-wider">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-6 font-light drop-shadow-lg">
              {t('hero.name')}
            </p>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed font-medium drop-shadow-xl tech-font">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="glass-hover px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105"
              >
                {t('hero.viewWork')}
              </a>
              <a
                href="#contact"
                className="glass-dark px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:bg-white/20 transform hover:scale-105"
              >
                {t('hero.getInTouch')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg futuristic-font">{t('about.title')}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div className="glass rounded-2xl p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-md">{t('about.journeyTitle')}</h3>
              <p className="text-white leading-relaxed mb-6 drop-shadow-sm">
                {t('about.journeyP1')}
              </p>
              <p className="text-white leading-relaxed drop-shadow-sm">
                {t('about.journeyP2')}
              </p>
            </div>
            <div className="glass rounded-2xl p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-md">{t('about.skillsTitle')}</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Machine Learning', 'AI/Neural Networks', 'React/Next.js', 'TypeScript', 'Python', 'Tailwind CSS', 'Node.js'].map((skill, index) => (
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
      <section id="projects" className="relative py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg futuristic-font">{t('projects.title')}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t('projects.quikyu.title'),
                description: t('projects.quikyu.desc'),
                tech: ['XGBoost', 'Machine Learning', 'Next.js'],
                link: 'https://quikyu.xyz',
                isExternal: true,
              },
              {
                title: t('projects.sivana.title'),
                description: t('projects.sivana.desc'),
                tech: ['Computer Vision', 'Generative AI', 'NLP'],
                link: 'https://sivana.id',
                isExternal: true,
              },
              {
                title: t('projects.ecg.title'),
                description: t('projects.ecg.desc'),
                tech: ['PyTorch', 'Deep Learning', 'Medical AI'],
                link: null,
                isExternal: false,
                isECG: true,
              },
              {
                title: t('projects.dataclair.title'),
                description: t('projects.dataclair.desc'),
                tech: ['Machine Learning', 'Data Science', 'Next.js'],
                link: 'https://dataclair.vercel.app',
                isExternal: true,
              },
              {
                title: t('projects.neural.title'),
                description: t('projects.neural.desc'),
                tech: ['PyTorch', 'Computer Vision', "Deep Learning"],
                link: 'https://github.com/abdul-zacky/neural-style-transfer',
                isExternal: true,
              },
            ].map((project, index) => (
              <div
                key={index}
                className="glass glass-hover rounded-2xl p-6 group flex flex-col h-full"
              >
                <div className="flex-grow">
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
                {project.isECG ? (
                  <button
                    onClick={() => setShowECGModal(true)}
                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-accent-300 transition-colors duration-300"
                  >
                    {t('projects.viewProject')}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : project.link ? (
                  <a
                    href={project.link}
                    target={project.isExternal ? "_blank" : "_self"}
                    rel={project.isExternal ? "noopener noreferrer" : ""}
                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-accent-300 transition-colors duration-300"
                  >
                    {project.isExternal ? t('projects.viewProject') : t('projects.viewLive')}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <div className="relative z-10">
        <ExperienceTimeline />
      </div>

      {/* Honors & Awards Section */}
      <div className="relative z-10">
        <HonorsAwards />
      </div>

      {/* ECG Project Modal */}
      {showECGModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="glass rounded-2xl p-8 max-w-md w-full mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{t('modal.ecg.title')}</h3>
              <p className="text-white/80">{t('modal.ecg.subtitle')}</p>
            </div>
            <div className="space-y-4">
              <a
                href="https://huggingface.co/zackyabd/clinical-ecg-classifier"
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-hover rounded-xl p-4 text-center transition-all duration-300 hover:scale-105"
                onClick={() => setShowECGModal(false)}
              >
                <div className="text-white font-semibold mb-1">{t('modal.ecg.model')}</div>
                <div className="text-white/70 text-sm">{t('modal.ecg.modelDesc')}</div>
              </a>
              <a
                href="https://huggingface.co/datasets/zackyabd/ptb-xl-processed"
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-hover rounded-xl p-4 text-center transition-all duration-300 hover:scale-105"
                onClick={() => setShowECGModal(false)}
              >
                <div className="text-white font-semibold mb-1">{t('modal.ecg.dataset')}</div>
                <div className="text-white/70 text-sm">{t('modal.ecg.datasetDesc')}</div>
              </a>
              <a
                href="https://github.com/abdul-zacky/ecg-classifier"
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-hover rounded-xl p-4 text-center transition-all duration-300 hover:scale-105"
                onClick={() => setShowECGModal(false)}
              >
                <div className="text-white font-semibold mb-1">{t('modal.ecg.github')}</div>
                <div className="text-white/70 text-sm">{t('modal.ecg.githubDesc')}</div>
              </a>
            </div>
            <button
              onClick={() => setShowECGModal(false)}
              className="mt-6 w-full glass-dark rounded-xl py-3 text-white font-semibold hover:bg-white/20 transition-colors duration-300"
            >
              {t('modal.ecg.close')}
            </button>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg futuristic-font">{t('contact.title')}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          <div className="glass rounded-2xl p-12 text-center">
            <p className="text-xl text-white leading-relaxed mb-8 drop-shadow-sm">
              {t('contact.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:abdul.zacky@ui.ac.id"
                className="glass-hover px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 inline-flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t('contact.email')}
              </a>
              <a
                href="https://www.linkedin.com/in/abdulzacky/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:bg-white/20 inline-flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                {t('contact.linkedin')}
              </a>
              <a
                href="https://github.com/abdul-zacky"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:bg-white/20 inline-flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {t('contact.github')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
