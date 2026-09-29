import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { TopBar } from './components/TopBar'
import { MainContent } from './components/MainContent'
import { Footer } from './components/Footer'

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen((prev) => !prev)

  return (
    <div className="flex min-h-screen bg-page-bg">
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />

      <div className="flex flex-1 flex-col lg:ml-[270px]">
        <TopBar onToggle={toggleSidebar} />
        <MainContent />
        <Footer />
      </div>
    </div>
  )
}
