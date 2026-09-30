import { useState } from 'react'
import ContentPanel from './components/ContentPanel'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen flex flex-col bg-content-bg">
      <div className="flex flex-1 min-h-screen">
        {/* Content panel (left) */}
        <div className="flex-1 min-w-0">
          <ContentPanel onClose={() => setSidebarOpen(!sidebarOpen)} />
        </div>

        {/* Sidebar (right) — toggle on mobile */}
        <div
          className={`
            fixed md:static inset-y-0 right-0 z-40
            transform transition-transform duration-300
            ${sidebarOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
          `}
        >
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  )
}
