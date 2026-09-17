import { useState, useCallback } from 'react'
import { Sidebar } from './components/Sidebar'
import { PortfolioGrid } from './components/PortfolioGrid'
import { AboutSection } from './components/AboutSection'
import { ServicesSection } from './components/ServicesSection'
import { BlogSection } from './components/BlogSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

const FILTERS = ['All', 'Branding', 'Design', 'Photography', 'Architecture'] as const
type Filter = (typeof FILTERS)[number]

export function App() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleFilterChange = useCallback((filter: Filter) => {
    setActiveFilter(filter)
  }, [])

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev)
  }, [])

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false)
  }, [])

  return (
    <div className="flex min-h-screen bg-white font-sans text-text">
      <Sidebar
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
        onClose={closeSidebar}
      />
      <main className="ml-0 flex-1 transition-all duration-300 lg:ml-[250px]">
        <section id="home" className="min-h-screen">
          <PortfolioGrid activeFilter={activeFilter} />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="portfolio">
          <PortfolioGrid activeFilter={activeFilter} />
        </section>
        <section id="blog">
          <BlogSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <Footer />
      </main>
    </div>
  )
}
