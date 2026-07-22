import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import BorderGlow from './BorderGlow';
import {
    SiC,
    SiCss,
    SiDocker,
    SiExpress,
    SiFigma,
    SiFlask,
    SiFlutter,
    SiGit,
    SiHtml5,
    SiIntellijidea,
    SiJavascript,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPandas,
    SiPostgresql,
    SiPostman,
    SiPython,
    SiReact,
    SiSpringboot,
    SiVscodium,
} from 'react-icons/si';
import { FaBrain, FaCode, FaCodeBranch, FaGithub, FaJava, FaLaptopCode, FaPlug, FaServer, FaTools } from 'react-icons/fa';

const skillCategories = [
    {
        title: 'Languages',
        description: 'Core programming languages used for high-performance applications, scripts, and algorithms.',
        Icon: FaCode,
        color: '#FF7A00',
        skills: [
            { name: 'Java', Icon: FaJava, color: '#ED8B00' },
            { name: 'Python', Icon: SiPython, color: '#3776AB' },
            { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
            { name: 'C', Icon: SiC, color: '#A8B9CC' },
        ],
    },
    {
        title: 'Frontend & Mobile',
        description: 'Frameworks and styling languages utilized to craft beautiful, responsive interfaces.',
        Icon: FaLaptopCode,
        color: '#FF9A33',
        skills: [
            { name: 'React', Icon: SiReact, color: '#61DAFB' },
            { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
            { name: 'Flutter', Icon: SiFlutter, color: '#02569B' },
            { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
            { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
            { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
        ],
    },
    {
        title: 'Backend & Relational Systems',
        description: 'Server libraries, robust database engines, and secure application programming interfaces.',
        Icon: FaServer,
        color: '#CC6200',
        skills: [
            { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
            { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
            { name: 'Express', Icon: SiExpress, color: '#FFFFFF' },
            { name: 'Flask', Icon: SiFlask, color: '#FFFFFF' },
            { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
            { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
            { name: 'API Development', Icon: FaPlug, color: '#00C2FF' },
        ],
    },
    {
        title: 'DevOps, AI & Tooling',
        description: 'Development utilities, containers, semantic intelligence systems, and productivity platforms.',
        Icon: FaTools,
        color: '#FF8A00',
        skills: [
            { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
            { name: 'CI/CD', Icon: FaCodeBranch, color: '#FF7A00' },
            { name: 'RAG', Icon: FaBrain, color: '#AB47BC' },
            { name: 'Pandas', Icon: SiPandas, color: '#150458' },
            { name: 'Git', Icon: SiGit, color: '#F05032' },
            { name: 'GitHub', Icon: FaGithub, color: '#FFFFFF' },
            { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
            { name: 'VS Code', Icon: SiVscodium, color: '#007ACC' },
            { name: 'IntelliJ IDEA', Icon: SiIntellijidea, color: '#FFFFFF' },
        ],
    },
];

const SkillBadge = ({ skill }) => (
    <m.div
        whileHover={{
            y: -3,
            borderColor: `${skill.color}40`,
            backgroundColor: `${skill.color}08`,
            boxShadow: `0 8px 20px -8px ${skill.color}35`,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-dark-600/35 border border-white/[0.04] cursor-default group"
        data-cursor-hover
    >
        <skill.Icon className="text-xl transition-transform duration-300 group-hover:scale-110" style={{ color: skill.color }} />
        <span className="text-xs font-heading font-medium text-text-secondary group-hover:text-white transition-colors duration-300">
            {skill.name}
        </span>
    </m.div>
);

const CategoryCard = ({ category, index }) => (
    <m.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay: index * 0.1, duration: 0.55, ease: 'easeOut' }}
        className="relative"
        data-cursor-hover
    >
        <BorderGlow
            className="glass-card overflow-hidden p-6 lg:p-8 group"
            backgroundColor="#120F17"
            borderRadius={28}
            edgeSensitivity={30}
            glowColor="40 80 80"
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']}
        >
            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                    <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/[0.06] transition-all duration-300 group-hover:scale-105"
                        style={{
                            background: `linear-gradient(135deg, ${category.color}15, ${category.color}02)`,
                            boxShadow: `0 0 20px ${category.color}03`,
                        }}
                    >
                        <category.Icon className="text-xl" style={{ color: category.color }} />
                    </div>
                    <h3 className="text-lg lg:text-xl font-heading font-bold text-white tracking-wide">
                        {category.title}
                    </h3>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-6 font-body">
                    {category.description}
                </p>

                <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                        <SkillBadge key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
        </BorderGlow>
    </m.div>
);

const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
            {/* Background blur decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-16 right-10 w-80 h-80 bg-accent/5 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Standardized Section Header */}
                <m.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-accent font-mono text-sm">02.</span>
                        <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white">Skills</h2>
                        <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-dark-400 to-transparent" />
                    </div>
                    <p className="text-text-muted font-mono text-sm tracking-wider uppercase">
                        My Technical Toolbox
                    </p>
                </m.div>

                {/* Staggered Categorized Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {skillCategories.map((category, i) => (
                        <CategoryCard key={category.title} category={category} index={i} />
                    ))}
                </div>
            </div>

            <div className="section-divider mt-24 lg:mt-32 mx-auto max-w-4xl" />
        </section>
    );
};

export default SkillsSection;
