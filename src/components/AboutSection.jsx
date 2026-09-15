import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import heroImage from '../assets/hero.jpg.png';

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const fadeUp = (delay = 0) => ({
        hidden: { opacity: 0, y: 32 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
        },
    });

    return (
        <section id="about" className="relative min-h-screen overflow-hidden bg-dark-900">

            {/* Full-right photo — covers right ~55% of screen */}
            <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] pointer-events-none select-none z-0">
                <img
                    src={heroImage}
                    alt="Kavindu Rajapaksha"
                    className="w-full h-full object-cover object-top"
                    style={{ filter: 'brightness(0.45) contrast(1.05)' }}
                />
                {/* Left fade so image blends into dark background */}
                <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/70 to-transparent" />
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-900 to-transparent" />
            </div>

            {/* Content — left column */}
            <div
                ref={ref}
                className="relative z-10 min-h-screen flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-24 max-w-2xl"
            >
                {/* Section label row */}
                <m.div
                    variants={fadeUp(0)}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="flex items-center gap-3 mb-6"
                >
                    <span className="font-mono text-xs text-white/40 tracking-widest">01</span>
                    <div className="w-6 h-px bg-white/25" />
                    <span className="font-mono text-[11px] text-white/40 tracking-[0.22em] uppercase">About Me</span>
                </m.div>

                {/* Big heading */}
                <m.h2
                    variants={fadeUp(0.1)}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] mb-8"
                >
                    Full-Stack Developer<br />focused on modern<br />web &amp; AI.
                </m.h2>

                {/* Paragraphs — existing content */}
                <m.div
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="space-y-4 text-[15px] text-white/55 leading-relaxed mb-10"
                >
                    <p>
                        I have a strong interest in building intelligent applications and enjoy turning
                        complex problems into simple, user-friendly solutions that deliver real value.
                    </p>
                    <p>
                        I have hands-on experience developing responsive front-end interfaces and scalable
                        back-end systems using technologies like Java, Flask, and JavaScript. Recently,
                        I have been exploring AI-driven solutions, including projects that use semantic
                        similarity and machine learning to enhance user experiences.
                    </p>
                    <p>
                        My goal is to write clean, maintainable code and craft digital products that
                        feel both intuitive and impactful — technology should work quietly in the
                        background so people can focus on what matters.
                    </p>
                </m.div>

                {/* Quick facts */}
                <m.div
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid grid-cols-2 gap-3 mb-10"
                >
                    {[
                        { label: 'Location', value: 'Sri Lanka 🇱🇰' },
                        { label: 'Languages', value: 'English, Sinhala' },
                        { label: 'Degree', value: 'BSc (Hons) Computer Science' },
                        { label: 'Interests', value: 'Full-Stack, AI & ML' },
                    ].map((fact, i) => (
                        <div
                            key={i}
                            className="border border-white/[0.08] bg-white/[0.02] rounded-lg p-3 backdrop-blur-sm"
                        >
                            <span className="block text-[10px] font-mono text-white/30 tracking-widest uppercase mb-1">
                                {fact.label}
                            </span>
                            <span className="block text-sm text-white/80 font-medium leading-snug">
                                {fact.value}
                            </span>
                        </div>
                    ))}
                </m.div>

                {/* Download CV */}
                <m.div
                    variants={fadeUp(0.4)}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <m.a
                        href="/Kavindu%20Rajapaksha%20CV.pdf"
                        download="Kavindu-Rajapaksha-CV.pdf"
                        className="inline-flex items-center gap-2.5 text-sm font-mono font-medium text-white/60 hover:text-white transition-colors duration-300 group"
                        whileHover={{ x: 4 }}
                    >
                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Resume
                        <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </m.a>
                </m.div>
            </div>

            {/* Bottom section divider */}
            <div className="section-divider absolute bottom-0 left-0 right-0 mx-auto max-w-4xl" />
        </section>
    );
};

export default AboutSection;
