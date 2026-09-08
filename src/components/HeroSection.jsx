import { useState, useEffect, useRef } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import heroImage from '../assets/hero.jpg.png';

const visionSlides = [
    { title: 'Building.' },
    { title: 'Coding.' },
    { title: 'Becoming.' },
];

const HeroSection = () => {
    const containerRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
            if (totalScrollable <= 0) return;

            // Compute scroll progress within the hero section (0 to 1)
            const scrolled = -rect.top;
            const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);

            let newIndex = 0;
            if (progress >= 0.66) {
                newIndex = 2;
            } else if (progress >= 0.33) {
                newIndex = 1;
            } else {
                newIndex = 0;
            }

            setCurrentSlide((prev) => {
                if (prev !== newIndex) {
                    setDirection(newIndex > prev ? 1 : -1);
                    return newIndex;
                }
                return prev;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const goToSlide = (index) => {
        if (!containerRef.current) return;
        const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
        const targetTop = containerRef.current.offsetTop + (index / (visionSlides.length - 1)) * totalScrollable;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
    };

    const handlePrev = () => {
        if (currentSlide > 0) {
            goToSlide(currentSlide - 1);
        }
    };

    const handleNext = () => {
        if (currentSlide < visionSlides.length - 1) {
            goToSlide(currentSlide + 1);
        }
    };

    const handleScrollBadgeClick = () => {
        if (currentSlide < visionSlides.length - 1) {
            goToSlide(currentSlide + 1);
        } else {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" ref={containerRef} className="relative h-[300vh]">
            {/* Boot Sequence Overlay */}
            {isLoading && (
                <div className="fixed inset-0 z-[9999] bg-dark-900 flex items-center justify-center">
                    <div className="text-center px-6">
                        <m.h2
                            initial={{ opacity: 0, y: 16, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wider"
                        >
                            Kavindu Rajapaksha
                        </m.h2>
                    </div>
                </div>
            )}

            {/* Sticky Viewport Container */}
            <div className="sticky top-0 h-screen w-full flex flex-col justify-end items-center overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 grid-bg animate-grid-move pointer-events-none" />

                {/* Dark Gradient Backdrop */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700" />
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-dark-700 via-dark-800 to-dark-900" />
                </div>

                {/* Radial Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/[0.04] rounded-full blur-[140px] pointer-events-none" />

                {/* Centered Fixed Portrait Image */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10">
                    <div className="relative flex items-center justify-center h-full max-h-[85vh] pt-12">
                        <img
                            src={heroImage}
                            alt="Kavindu Rajapaksha"
                            className="h-[62vh] sm:h-[68vh] lg:h-[75vh] max-h-[720px] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] select-none"
                            draggable={false}
                        />
                    </div>
                </div>

                {/* Fixed Content: Name & Small Description */}
                <div className="relative z-20 text-center px-4 max-w-2xl mx-auto mb-2 sm:mb-3 select-none">
                    <h2 className="font-heading font-extrabold text-sm sm:text-base lg:text-lg text-white uppercase tracking-[0.25em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                        KAVINDU RAJAPAKSHA
                    </h2>
                    <p className="text-xs sm:text-sm text-text-secondary font-light mt-1 max-w-lg mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        Full Stack Developer &bull; AI Enthusiast &bull; Problem Solver
                    </p>
                </div>

                {/* Changing Big Vision Text (3 Slides) */}
                <div className="relative z-20 w-full overflow-hidden flex items-center justify-center pb-8 sm:pb-12 lg:pb-14 select-none pointer-events-none">
                    <AnimatePresence mode="wait" custom={direction}>
                        <m.h1
                            key={currentSlide}
                            custom={direction}
                            initial={{ opacity: 0, y: direction > 0 ? 70 : -70 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: direction > 0 ? -70 : 70 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="font-heading font-black text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] tracking-tight text-white leading-none text-center drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)]"
                        >
                            {visionSlides[currentSlide].title}
                        </m.h1>
                    </AnimatePresence>
                </div>

                {/* Right Side - "SCROLL" Circular Badge */}
                <button
                    onClick={handleScrollBadgeClick}
                    className="hidden md:flex absolute right-8 lg:right-14 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-md items-center justify-center text-[10px] tracking-[0.22em] font-mono font-medium text-white/80 hover:text-white hover:border-accent/60 hover:bg-accent/[0.08] transition-all duration-300 group cursor-pointer shadow-lg shadow-black/30"
                    aria-label="Scroll to next slide"
                >
                    <span className="group-hover:scale-105 transition-transform duration-300">SCROLL</span>
                </button>

                {/* Bottom Right - Slide Navigation (< —— >) */}
                <div className="absolute right-6 sm:right-10 bottom-6 sm:bottom-10 z-30 flex items-center gap-3.5 select-none">
                    <button
                        onClick={handlePrev}
                        disabled={currentSlide === 0}
                        className={`w-9 h-9 rounded-full border border-white/15 bg-white/[0.02] backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 ${
                            currentSlide === 0
                                ? 'opacity-25 cursor-not-allowed'
                                : 'hover:border-accent/60 hover:bg-white/10 hover:text-accent cursor-pointer'
                        }`}
                        aria-label="Previous slide"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Active slide line indicator */}
                    <div className="w-16 h-[2px] bg-white/15 relative rounded-full overflow-hidden">
                        <div
                            className="h-full bg-accent transition-all duration-500 rounded-full shadow-[0_0_8px_rgba(255,122,0,0.6)]"
                            style={{
                                width: `${((currentSlide + 1) / visionSlides.length) * 100}%`,
                            }}
                        />
                    </div>

                    <button
                        onClick={handleNext}
                        disabled={currentSlide === visionSlides.length - 1}
                        className={`w-9 h-9 rounded-full border border-white/15 bg-white/[0.02] backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 ${
                            currentSlide === visionSlides.length - 1
                                ? 'opacity-25 cursor-not-allowed'
                                : 'hover:border-accent/60 hover:bg-white/10 hover:text-accent cursor-pointer'
                        }`}
                        aria-label="Next slide"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
