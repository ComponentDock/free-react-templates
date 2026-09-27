import { useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { AboutPanel } from './components/AboutPanel'
import { SkillsPanel } from './components/SkillsPanel'
import { ServicesPanel } from './components/ServicesPanel'
import { ExperiencePanel } from './components/ExperiencePanel'
import { EducationPanel } from './components/EducationPanel'
import { PortfolioPanel } from './components/PortfolioPanel'
import { TestimonialsPanel } from './components/TestimonialsPanel'
import { ContactPanel } from './components/ContactPanel'
import { Footer } from './components/Footer'

const panels: Record<string, React.FC> = {
  about: AboutPanel,
  skills: SkillsPanel,
  services: ServicesPanel,
  experience: ExperiencePanel,
  education: EducationPanel,
  portfolio: PortfolioPanel,
  testimonials: TestimonialsPanel,
  contact: ContactPanel,
}

export function App({ initialTab = 'about' }: { initialTab?: string } = {}) {
  const [activeTab, setActiveTab] = useState(initialTab)
  const ActivePanel = panels[activeTab] ?? AboutPanel

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-body">
      <Header activeTab={activeTab} onNavigate={setActiveTab} />
      <div className="flex flex-1 pt-[97px]">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-10">
          <ActivePanel />
        </main>
      </div>
      <Footer />
    </div>
  )
}
