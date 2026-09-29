import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { MainContent } from './components/MainContent'
import { Footer } from './components/Footer'

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen((prev) => !prev)

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <MainContent onToggle={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      <Footer />
    </div>
  )
}
