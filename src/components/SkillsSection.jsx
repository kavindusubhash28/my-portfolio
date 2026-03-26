import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    SiC,
    SiCss,
    SiDocker,
    SiFigma,
    SiFlask,
    SiFlutter,
    SiGit,
    SiHtml5,
    SiIntellijidea,
    SiJavascript,
    SiMysql,
    SiPandas,
    SiPostgresql,
    SiPostman,
    SiPython,
    SiReact,
    SiSpringboot,
    SiVscodium,
} from 'react-icons/si';
import { FaBrain, FaCodeBranch, FaGithub, FaJava, FaPlug } from 'react-icons/fa';

const skillItems = [
    { name: 'Java', Icon: FaJava, color: '#ED8B00' },
    { name: 'Python', Icon: SiPython, color: '#3776AB' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    { name: 'C', Icon: SiC, color: '#A8B9CC' },
    { name: 'React', Icon: SiReact, color: '#61DAFB' },
    { name: 'Flutter', Icon: SiFlutter, color: '#02569B' },
    { name: 'HTML', Icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', Icon: SiCss, color: '#1572B6' },
    { name: 'Flask', Icon: SiFlask, color: '#FFFFFF' },
    { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
    { name: 'Pandas', Icon: SiPandas, color: '#150458' },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
    { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
    { name: 'Git', Icon: SiGit, color: '#F05032' },
    { name: 'GitHub', Icon: FaGithub, color: '#FFFFFF' },
    { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
    { name: 'VS Code', Icon: SiVscodium, color: '#007ACC' },
    { name: 'IntelliJ', Icon: SiIntellijidea, color: '#FFFFFF' },
    { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
    { name: 'CI/CD', Icon: FaCodeBranch, color: '#FF7A00' },
    { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
    { name: 'API', Icon: FaPlug, color: '#00C2FF' },
    { name: 'RAG', Icon: FaBrain, color: '#AB47BC' },
];

const SkillCard = ({ skill, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.04, duration: 0.45 }}
        whileHover={{ y: -6 }}
        className="relative group bg-dark-700/95 border border-white/[0.04] rounded-md p-4 md:p-5 flex flex-col items-center justify-center gap-3 min-h-[122px]"
        data-cursor-hover
    >
        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"
            style={{
                background: `linear-gradient(180deg, ${skill.color}18, transparent 55%)`,
            }}
        />

        <div
            className="relative z-10 text-4xl md:text-[2.4rem] leading-none"
            style={{ color: skill.color }}
            aria-hidden="true"
        >
            <skill.Icon />
        </div>

        <p className="relative z-10 text-[11px] md:text-xs tracking-wide uppercase text-text-secondary font-heading font-semibold text-center">
            {skill.name}
        </p>
    </motion.div>
);

const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="skills" className="relative py-24 lg:py-32 overflow-hidden grid-bg">
            <div className="absolute top-0 left-0 w-56 h-56 bg-accent/10 blur-3xl" />
            <div className="absolute bottom-16 right-10 w-64 h-64 bg-accent/10 blur-3xl" />

            <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="relative border border-accent/15 bg-dark-800/95 shadow-[0_20px_70px_rgba(0,0,0,0.45)]"
                >
                    <div className="h-1.5 w-full bg-gradient-to-r from-accent via-accent-light to-accent" />

                    <div className="p-6 md:p-10 lg:p-12">
                        <div className="flex items-stretch gap-6 md:gap-8">
                            <div className="hidden md:flex items-center">
                                <div className="flex items-center gap-3">
                                    <span className="w-[2px] h-28 bg-accent/80" />
                                    <p className="uppercase tracking-[0.22em] text-white font-heading font-semibold [writing-mode:vertical-rl] rotate-180">
                                        Skills
                                    </p>
                                </div>
                            </div>

                            <div className="w-full">
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-accent mb-4">
                                    What I do
                                </h2>
                                <p className="text-text-secondary text-center text-sm md:text-base mb-8 max-w-3xl mx-auto">
                                    I build modern, responsive, and production-ready applications with clean frontend
                                    experiences, reliable backend services, and practical developer tooling.
                                </p>

                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                                    {skillItems.map((skill, i) => (
                                        <SkillCard key={skill.name} skill={skill} index={i} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="section-divider mt-24 lg:mt-32 mx-auto max-w-4xl" />
        </section>
    );
};

export default SkillsSection;
