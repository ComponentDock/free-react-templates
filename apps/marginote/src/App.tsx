import { useState, useEffect } from 'react'
import { Sidebar } from './components/Sidebar'
import { SidebarToggle } from './components/SidebarToggle'
import { BlogGrid } from './components/BlogGrid'
import { Footer } from './components/Footer'

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    document.title = 'Marginote — Sidebar Blog Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Sidebar isOpen={sidebarOpen} />
      <SidebarToggle isOpen={sidebarOpen} onToggle={() => setSidebarOpen((prev) => !prev)} />

      <main
        className={`transition-all duration-300 md:ml-80 ${sidebarOpen ? 'ml-0 md:ml-80' : 'ml-0'}`}
      >
        <div className="pt-16 md:pt-4">
          <BlogGrid />
        </div>
        <Footer />
      </main>
    </div>
  )
}
