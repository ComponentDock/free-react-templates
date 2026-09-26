import { useState, useCallback } from 'react'
import { Layout } from './components/Layout'
import { OffcanvasMenu } from './components/OffcanvasMenu'
import { OffcanvasToggle } from './components/OffcanvasToggle'
import { BioView } from './components/BioView'
import { PortfolioView } from './components/PortfolioView'
import { ResumeView } from './components/ResumeView'
import { ContactView } from './components/ContactView'
import { Footer } from './components/Footer'

export type View = 'bio' | 'portfolio' | 'resume' | 'contact'

export function App() {
  const [currentView, setCurrentView] = useState<View>('bio')
  const [menuOpen, setMenuOpen] = useState(false)

  const navigateTo = useCallback((view: View) => {
    setCurrentView(view)
    setMenuOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev)
  }, [])

  return (
    <div className="min-h-screen bg-white font-body text-body-text">
      <Layout menuOpen={menuOpen} currentView={currentView}>
        <OffcanvasToggle onClick={toggleMenu} />
        <OffcanvasMenu open={menuOpen} currentView={currentView} onNavigate={navigateTo} />
        {currentView === 'bio' && <BioView />}
        {currentView === 'portfolio' && <PortfolioView />}
        {currentView === 'resume' && <ResumeView />}
        {currentView === 'contact' && <ContactView />}
        <Footer />
      </Layout>
    </div>
  )
}
