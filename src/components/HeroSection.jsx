import { useState, useEffect } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { FaJava } from 'react-icons/fa';
import { SiExpress, SiJavascript, SiPython, SiReact } from 'react-icons/si';
import heroImage from '../assets/hero.jpg.png';

// Floating tech icons as SVG components
const TechIcon = ({ icon: Icon, className, delay = 0, color = '#F97316' }) => (
    <m.div
        className={`absolute pointer-events-none select-none ${className}`}
        initial={{ opacity: 0, y: 14, scale: 0.95 }}
        animate={{
            opacity: 1,
            y: [0, -6, 0],
            rotate: [0, 1.5, -1.5, 0],
            scale: 1,
        }}
        transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay,
        }}
    >
        <Icon
            className="text-2xl lg:text-3xl opacity-25 drop-shadow-[0_0_18px_rgba(0,0,0,0.35)]"
            style={{ color }}
            aria-hidden="true"
        />
    </m.div>
);

const techIcons = [
    { icon: SiReact, className: 'top-[16%] right-[9%] lg:right-[12%]', delay: 0, color: '#61DAFB' },
    { icon: SiJavascript, className: 'top-[28%] right-[17%] lg:right-[7%]', delay: 1.1, color: '#F7DF1E' },
    { icon: SiPython, className: 'top-[50%] right-[6%] lg:right-[8%]', delay: 0.6, color: '#3776AB' },
    { icon: FaJava, className: 'bottom-[32%] right-[3%] lg:right-[2%]', delay: 1.7, color: '#ED8B00' },
    { icon: SiExpress, className: 'top-[12%] right-[27%] lg:right-[22%]', delay: 2.1, color: '#FFFFFF' },
    { icon: SiReact, className: 'bottom-[23%] right-[14%] lg:right-[12%]', delay: 0.9, color: '#61DAFB' },
];

const HeroSection = () => {
    const [bootComplete, setBootComplete] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [bootLines, setBootLines] = useState([]);

    const bootSequence = [
        { text: '> Initializing Kavindu.exe…', delay: 0 },
        { text: '> Loading modules...', delay: 400 },
        { text: '> React ✓  Flask ✓  Java✓', delay: 800 },
        { text: '> Full Stack Developer Loaded ✓', delay: 1300 },
        { text: '> Portfolio Ready.', delay: 1800 },
    ];

    useEffect(() => {
        bootSequence.forEach((line, i) => {
            setTimeout(() => {
                setBootLines(prev => [...prev, line.text]);
                if (i === bootSequence.length - 1) {
                    setTimeout(() => {
                        setBootComplete(true);
                        setTimeout(() => setShowContent(true), 300);
                    }, 600);
                }
            }, line.delay);
        });
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 grid-bg animate-grid-move" />

            {/* Split Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-dark-700 via-dark-800 to-dark-900" />
            </div>

            {/* Radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.03] rounded-full blur-[120px]" />

            {/* Boot Sequence Overlay */}
            <AnimatePresence>
                {!bootComplete && (
                    <m.div
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-[9999] bg-dark-900 flex items-center justify-center"
                    >
                        <div className="max-w-lg w-full px-6">
                            <div className="font-mono text-sm space-y-2">
                                {bootLines.map((line, i) => (
                                    <m.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`${line.includes('✓') ? 'text-accent' : 'text-text-secondary'
                                            }`}
                                    >
                                        {line}
                                        {i === bootLines.length - 1 && (
                                            <span className="inline-block w-2 h-4 bg-accent ml-1 align-middle animate-pulse" />
                                        )}
                                    </m.div>
                                ))}
                            </div>
                            {/* Progress bar */}
                            <m.div className="mt-6 h-0.5 bg-dark-500 rounded-full overflow-hidden">
                                <m.div
                                    className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 2.2, ease: 'easeInOut' }}
                                />
                            </m.div>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20 lg:pt-0 lg:h-screen">
                <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 lg:gap-10 lg:h-full">

                    {/* Left Side - Text */}
                    <m.div
                        className="lg:max-w-[50%] xl:max-w-[45%] text-center lg:text-left flex-shrink-0 lg:self-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={showContent ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >

                        <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] mb-4">
                            <m.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={showContent ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="block text-white"
                            >
                                KAVINDU
                            </m.span>
                            <m.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={showContent ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.45, duration: 0.6 }}
                                className="block gradient-text"
                            >
                                RAJAPAKSHA
                            </m.span>
                        </h1>

                        <m.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={showContent ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="text-lg lg:text-xl text-text-secondary font-light max-w-lg mx-auto lg:mx-0 mb-3"
                        >
                            Building Smart & Scalable Digital Products with {' '}
                            <span className="text-accent font-medium">AI Integration.</span>
                        </m.p>

                        <m.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={showContent ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="text-sm text-text-muted font-mono tracking-wide mb-8"
                        >
                            Full Stack Developer &bull; AI Enthusiast &bull; Problem Solver
                        </m.p>

                        {/* CTA Buttons */}
                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={showContent ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.85, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <m.button
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn-primary px-8 py-3.5 rounded-xl font-heading font-semibold text-white text-sm flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                data-cursor-hover
                            >
                                <span>View My Work</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </m.button>

                            <m.button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn-outline px-8 py-3.5 rounded-xl font-heading font-semibold text-sm flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                data-cursor-hover
                            >
                                <span>Let's Talk</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </m.button>
                        </m.div>

                        {/* Stats */}
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={showContent ? { opacity: 1 } : {}}
                            transition={{ delay: 1.1, duration: 0.8 }}
                            className="flex items-center gap-8 mt-10 justify-center lg:justify-start"
                        >
                            {[
                                { value: '2+', label: 'Years Exp.' },
                                { value: '10+', label: 'Projects' },
                                { value: '10+', label: 'Technologies' },
                            ].map((stat, i) => (
                                <div key={i} className="text-center lg:text-left">
                                    <div className="text-2xl lg:text-3xl font-heading font-bold text-accent">{stat.value}</div>
                                    <div className="text-xs text-text-muted mt-0.5">{stat.label}</div>
                                </div>
                            ))}
                        </m.div>
                    </m.div>

                    {/* Right Side - Image */}
                    <m.div
                        className="flex-1 relative flex items-center justify-center lg:justify-end min-w-0 lg:self-end lg:pr-6 xl:pr-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={showContent ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
                    >
                        {/* Glow behind image */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-accent/[0.06] rounded-full blur-[80px]" />
                        </div>

                        {/* Decorative ring */}
                        <m.div
                            className="absolute w-[320px] h-[320px] lg:w-[480px] lg:h-[480px] rounded-full border border-accent/10"
                            initial={{ opacity: 0, rotate: -8 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent/30" />
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-accent/20" />
                        </m.div>

                        {/* Secondary ring */}
                        <m.div
                            className="absolute w-[360px] h-[360px] lg:w-[540px] lg:h-[540px] rounded-full border border-white/[0.03]"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                        >
                            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent/20" />
                        </m.div>

                        {/* Hero Image */}
                        <m.div
                            className="relative z-10"
                            initial={{ y: 12, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <img
                                src={heroImage}
                                alt="Kavindu Rajapaksha - Full Stack Developer"
                                className="w-[280px] lg:w-[400px] xl:w-[440px] drop-shadow-2xl glow-accent select-none"
                                draggable={false}
                            />
                        </m.div>

                        {/* Floating tech icons */}
                        {techIcons.map((tech, i) => (
                            <TechIcon key={i} {...tech} />
                        ))}
                    </m.div>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
