'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface Award {
  title: string;
  issuer: string;
  date: string;
  association: string;
  description: string;
  rank: number;
  images?: string[];
}

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="relative w-full aspect-square rounded-xl overflow-hidden">
        <Image
          src={images[0]}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-square rounded-xl overflow-hidden group">
      {/* Image Display */}
      <div className="relative w-full h-full">
        <Image
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
              ? 'bg-white w-8'
              : 'bg-white/50 hover:bg-white/75'
              }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-3 right-3 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default function HonorsAwards() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const [expandedAwards, setExpandedAwards] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    setExpandedAwards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const awards: Award[] = [
    {
      title: t('awards.quikyu.title'),
      issuer: t('awards.quikyu.issuer'),
      date: 'Oct 2025',
      association: t('awards.quikyu.associationName'),
      description: t('awards.quikyu.desc'),
      rank: 1,
      images: ['/awards/quikyu-1.jpeg', '/awards/quikyu-2.gif']
    },
    {
      title: t('awards.sivana.title'),
      issuer: t('awards.sivana.issuer'),
      date: 'Nov 2025',
      association: t('awards.sivana.associationName'),
      description: t('awards.sivana.desc'),
      rank: 2,
      images: ['/awards/sivana-1.jpg', '/awards/sivana-2.jpg']
    },
    {
      title: t('awards.nexsolve.title'),
      issuer: t('awards.nexsolve.issuer'),
      date: 'Nov 2025',
      association: t('awards.nexsolve.associationName'),
      description: t('awards.nexsolve.desc'),
      rank: 3,
      images: ['/awards/nexsolve.jpg']
    },
    {
      title: t('awards.papua.title'),
      issuer: t('awards.papua.issuer'),
      date: 'Nov 2025',
      association: t('awards.papua.associationName'),
      description: t('awards.papua.desc'),
      rank: 4,
      images: ['/awards/papua-1.jpeg', '/awards/papua-2.jpeg']
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
    <section ref={sectionRef} id="awards" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg futuristic-font">
            {t('awards.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {awards.map((award, index) => (
            <div
              key={index}
              className="award-card glass rounded-2xl p-6 sm:p-8 glass-hover relative overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6">
                  {/* Trophy Icon */}
                  <div className="trophy-icon flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 w-full">
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md flex-1 min-w-0 break-words">
                        {award.title}
                      </h3>
                      <span className="glass-dark px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-white font-medium drop-shadow-sm whitespace-nowrap flex-shrink-0">
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


                    {/* Description with Show More */}
                    <div className="mb-4">
                      <p className={`text-white/90 leading-relaxed drop-shadow-sm ${!expandedAwards.has(index) ? 'line-clamp-3' : ''}`}>
                        {award.description}
                      </p>
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="text-blue-300 hover:text-blue-200 text-sm font-medium mt-2 transition-colors duration-200"
                      >
                        {expandedAwards.has(index) ? 'Show less' : 'Show more...'}
                      </button>
                    </div>

                    {/* Image Gallery */}
                    {award.images && award.images.length > 0 && (
                      <div className="mt-4">
                        <ImageCarousel images={award.images} alt={award.title} />
                      </div>
                    )}
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
