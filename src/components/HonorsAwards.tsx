'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function HonorsAwards() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  const awards = [
    {
      title: t('awards.quikyu.title'),
      issuer: t('awards.quikyu.issuer'),
      date: 'Oct 2025',
      association: t('awards.quikyu.associationName'),
      description: t('awards.quikyu.desc'),
      rank: 1
    },
    {
      title: t('awards.sivana.title'),
      issuer: t('awards.sivana.issuer'),
      date: 'Nov 2025',
      association: t('awards.sivana.associationName'),
      description: t('awards.sivana.desc'),
      rank: 2
    },
    {
      title: t('awards.nexsolve.title'),
      issuer: t('awards.nexsolve.issuer'),
      date: 'Nov 2025',
      association: t('awards.nexsolve.associationName'),
      description: t('awards.nexsolve.desc'),
      rank: 3
    }
  ].sort((a, b) => a.rank - b.rank);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate award cards
      gsap.utils.toArray<HTMLElement>('.award-card').forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
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

        // Trophy icon animation
        const trophy = card.querySelector('.trophy-icon');
        if (trophy) {
          gsap.fromTo(
            trophy,
            {
              scale: 0,
              rotation: -180
            },
            {
              scale: 1,
              rotation: 0,
              duration: 0.8,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: card,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
              }
            }
          );

          // Continuous subtle rotation
          gsap.to(trophy, {
            rotation: 5,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            scrollTrigger: {
              trigger: card,
              start: 'top 75%',
              toggleActions: 'play pause resume pause'
            }
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="awards" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg futuristic-font">
            {t('awards.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <div
              key={index}
              className="award-card glass rounded-2xl p-8 glass-hover relative overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  {/* Trophy Icon */}
                  <div className="trophy-icon flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
                      <svg 
                        className="w-8 h-8 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <h3 className="text-2xl font-bold text-white drop-shadow-md flex-1">
                        {award.title}
                      </h3>
                      <span className="glass-dark px-4 py-2 rounded-full text-sm text-white font-medium drop-shadow-sm whitespace-nowrap">
                        {award.date}
                      </span>
                    </div>
                    
                    <p className="text-blue-300 font-semibold mb-2 drop-shadow-sm">
                      {t('awards.hacksphere.issuedBy')} {award.issuer}
                    </p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/80 text-sm drop-shadow-sm">
                        {t('awards.hacksphere.association')} {award.association}
                      </span>
                    </div>
                    
                    <p className="text-white/90 leading-relaxed drop-shadow-sm">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
