import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { ContentArea } from './components/ContentArea'

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen((prev) => !prev)

  return (
    <div className="flex min-h-screen bg-page-bg">
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      <div className="flex flex-1 flex-col lg:ml-[var(--width-sidebar)]">
        <ContentArea />
      </div>
    </div>
  )
}
