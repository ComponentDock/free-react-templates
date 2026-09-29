import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { Topbar } from './components/Topbar'
import { MainContent } from './components/MainContent'

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen((prev) => !prev)

  return (
    <div className="flex min-h-screen bg-page-bg">
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />

      {/* Main area offset by sidebar width on desktop */}
      <div className="flex flex-1 flex-col lg:ml-64">
        <Topbar onMenuClick={toggleSidebar} />
        <MainContent />
      </div>
    </div>
  )
}
