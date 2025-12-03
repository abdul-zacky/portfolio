'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export default function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('experience.telkom.title'),
      company: t('experience.telkom.company'),
      period: 'Jul 2025 - Aug 2025',
      description: t('experience.telkom.desc'),
      skills: ['Data Analysis', 'IT Development', 'SQL', 'Python']
    },
    {
      title: t('experience.compfest1.title'),
      company: t('experience.compfest1.company'),
      period: 'Feb 2025 - Present',
      description: t('experience.compfest1.desc'),
      skills: ['Data Analytics', 'Dashboard Development', 'Data Visualization', 'Committee Work']
    },
    {
      title: t('experience.compfest2.title'),
      company: t('experience.compfest2.company'),
      period: 'Apr 2024 - Feb 2025',
      description: t('experience.compfest2.desc'),
      skills: ['Business Development', 'Partnership Management', 'Strategy', 'Event Management']
    },
    {
      title: t('experience.ta1.title'),
      company: t('experience.ta1.company'),
      period: 'Jan 2025 - Jul 2025',
      description: t('experience.ta1.desc'),
      skills: ['SQL', 'Databases', 'Teaching', 'Mentoring']
    },
    {
      title: t('experience.ta2.title'),
      company: t('experience.ta2.company'),
      period: 'Jul 2024 - Jan 2025',
      description: t('experience.ta2.desc'),
      skills: ['Linear Algebra', 'Mathematics', 'Teaching', 'Problem Solving']
    },
    {
      title: t('experience.ta3.title'),
      company: t('experience.ta3.company'),
      period: 'Jul 2024 - Jan 2025',
      description: t('experience.ta3.desc'),
      skills: ['Calculus', 'Mathematics', 'Teaching', 'Tutoring']
    },
    {
      title: t('experience.prk.title'),
      company: t('experience.prk.company'),
      period: 'Feb 2024 - Jul 2024',
      description: t('experience.prk.desc'),
      skills: ['Event Management', 'Festival Operations', 'Team Collaboration', 'Organization']
    }
  ];

  // Group experiences by company and assign sides
  const getExperienceLayout = () => {
    const layout: { experience: Experience; side: 'left' | 'right'; isGrouped: boolean }[] = [];
    const companySides = new Map<string, 'left' | 'right'>();
    let currentSide: 'left' | 'right' = 'left';

    experiences.forEach((exp) => {
      if (companySides.has(exp.company)) {
        // Same company - keep on same side
        layout.push({
          experience: exp,
          side: companySides.get(exp.company)!,
          isGrouped: true
        });
      } else {
        // New company - assign to current side and alternate
        companySides.set(exp.company, currentSide);
        layout.push({
          experience: exp,
          side: currentSide,
          isGrouped: false
        });
        currentSide = currentSide === 'left' ? 'right' : 'left';
      }
    });

    return layout;
  };

  const experienceLayout = getExperienceLayout();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline line
      gsap.fromTo(
        '.timeline-line',
        {
          scaleY: 0,
          transformOrigin: 'top'
        },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1
          }
        }
      );

      // Animate each experience card
      gsap.utils.toArray<HTMLElement>('.experience-card').forEach((card) => {
        const side = card.getAttribute('data-side');
        // Card entrance
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: side === 'left' ? -100 : 100,
            scale: 0.8
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 50%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Timeline dot animation
        const dot = card.querySelector('.timeline-dot');
        if (dot) {
          gsap.fromTo(
            dot,
            {
              scale: 0,
              backgroundColor: 'rgba(96, 165, 250, 0.3)'
            },
            {
              scale: 1,
              backgroundColor: 'rgba(96, 165, 250, 1)',
              duration: 0.5,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: card,
                start: 'top 70%',
                toggleActions: 'play none none reverse'
              }
            }
          );

          // Pulse effect
          gsap.to(dot, {
            scale: 1.2,
            opacity: 0.7,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            scrollTrigger: {
              trigger: card,
              start: 'top 70%',
              toggleActions: 'play pause resume pause'
            }
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg futuristic-font">
            {t('experience.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 timeline-line" />

          {/* Experience cards */}
          <div className="space-y-12">
            {experienceLayout.map((item, index) => {
              const { experience: exp, side } = item;
              const isLeft = side === 'left';

              return (
                <div key={index} className="relative">
                  <div
                    className={`experience-card relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'
                      }`}
                    data-side={side}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-400 border-4 border-black/30 timeline-dot z-10" />

                    {/* Content card */}
                    <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="glass rounded-2xl p-6 glass-hover">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">
                              {exp.title}
                            </h3>
                            <p className="text-blue-300 font-semibold drop-shadow-sm">{exp.company}</p>
                          </div>
                          <span className="glass-dark px-3 py-1 rounded-full text-sm text-white font-medium drop-shadow-sm whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-white/90 leading-relaxed mb-4 drop-shadow-sm">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="glass-dark px-3 py-1 rounded-full text-xs text-white/80 font-medium drop-shadow-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block w-2/12" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
