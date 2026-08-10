import { useEffect } from 'react'
import { BlogGrid } from './components/BlogGrid'
import { MobileNav } from './components/MobileNav'
import { Sidebar } from './components/Sidebar'

export function App() {
  useEffect(() => {
    document.title = 'Volt — Travel & Lifestyle Blog'
  }, [])

  return (
    <div id="top" className="min-h-screen bg-white font-sans text-body">
      <Sidebar />
      <MobileNav />
      <main className="min-h-screen bg-section lg:ml-[25%]">
        <BlogGrid />
      </main>
    </div>
  )
}
