import { useState } from 'react'
import Sidebar from './components/Sidebar'
import ArticleGrid from './components/ArticleGrid'
import Footer from './components/Footer'

export default function App() {
  const [activeNav, setActiveNav] = useState('Home')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-content-bg">
      {/* Mobile toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          type="button"
          aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-text-primary hover:bg-gray-50"
        >
          {sidebarOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Sidebar overlay on mobile */}
      {sidebarOpen && (
        <div
          data-testid="sidebar-overlay"
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`
            fixed md:static inset-y-0 left-0 z-40
            transform transition-transform duration-300
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}
        >
          <Sidebar activeNav={activeNav} onNavClick={setActiveNav} />
        </div>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <ArticleGrid />
        </main>
      </div>

      <Footer />
    </div>
  )
}
