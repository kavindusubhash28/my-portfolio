import { useState, useEffect } from 'react';
import { AnimatePresence, m } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect active section
            const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
            for (const section of sections.reverse()) {
                const el = document.getElementById(section);
                if (el && window.scrollY >= el.offsetTop - 200) {
                    setActiveSection(section);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' },
    ];

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setMobileOpen(false);
        }
    };

    return (
        <>
            {/* Fixed Logo - Top Left (Desktop) */}
            <m.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                className="fixed top-4 left-5 lg:top-5 lg:left-7 z-50 hidden md:block pointer-events-auto"
            >
                <m.button
                    onClick={() => scrollTo('home')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-cursor-hover
                    className="block"
                >
                    <img
                        src="/favicon.png"
                        alt="KR Logo"
                        className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl object-cover shadow-lg shadow-black/40 opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                </m.button>
            </m.div>

            {/* Desktop Floating Pill Navbar */}
            <m.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="fixed top-3 left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none"
            >
                <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-dark-800/70 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/30 pointer-events-auto">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            data-cursor-hover
                            className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full whitespace-nowrap ${activeSection === link.id
                                    ? 'text-white'
                                    : 'text-white/50 hover:text-white/80'
                                }`}
                        >
                            {link.label}
                            {activeSection === link.id && (
                                <m.span
                                    layoutId="activeNav"
                                    className="absolute inset-0 bg-white/[0.08] rounded-full"
                                    transition={{ duration: 0.25, ease: 'easeOut' }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </m.nav>

            {/* Mobile Top Bar */}
            <m.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="fixed top-0 left-0 right-0 z-50 md:hidden bg-dark-900/80 backdrop-blur-xl border-b border-white/[0.04]"
            >
                <div className="flex items-center justify-between h-16 px-6">
                    {/* Logo */}
                    <m.button
                        onClick={() => scrollTo('home')}
                        className="relative group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        data-cursor-hover
                    >
                        <img
                            src="/favicon.png"
                            alt="KR Logo"
                            className="w-9 h-9 rounded-xl object-cover shadow-md shadow-black/30 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </m.button>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="flex flex-col gap-1.5 p-2"
                        data-cursor-hover
                    >
                        <m.span
                            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-white block"
                        />
                        <m.span
                            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-6 h-0.5 bg-white block"
                        />
                        <m.span
                            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-white block"
                        />
                    </button>
                </div>
            </m.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <m.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-dark-900/95 backdrop-blur-xl md:hidden pt-20"
                    >
                        <div className="flex flex-col items-center gap-6 py-10">
                            {navLinks.map((link, i) => (
                                <m.button
                                    key={link.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    onClick={() => scrollTo(link.id)}
                                    className={`text-2xl font-heading font-semibold transition-colors ${activeSection === link.id ? 'text-accent' : 'text-white/60 hover:text-white'
                                        }`}
                                >
                                    {link.label}
                                </m.button>
                            ))}
                            <m.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                onClick={() => scrollTo('contact')}
                                className="btn-primary px-8 py-3 rounded-lg font-heading font-semibold text-white mt-4"
                            >
                                Hire Me
                            </m.button>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
