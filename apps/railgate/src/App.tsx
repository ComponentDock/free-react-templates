import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { MainContent } from './components/MainContent'

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => setSidebarOpen((prev) => !prev)

  return (
    <div className="flex min-h-screen bg-page-bg">
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      <MainContent />
    </div>
  )
}
