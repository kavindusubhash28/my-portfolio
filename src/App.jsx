import { LazyMotion, domAnimation } from 'framer-motion'
import MaintenancePage from '@/components/MaintenancePage'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const maintenanceMode =
  import.meta.env.VITE_MAINTENANCE_MODE === 'true' ||
  (typeof globalThis.process !== 'undefined' && globalThis.process.env?.MAINTENANCE_MODE === 'true')

function App() {
  return maintenanceMode ? (
    <MaintenancePage />
  ) : (
    <LazyMotion features={domAnimation}>
      <div className="noise-overlay">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LazyMotion>
  )
}

export default App
