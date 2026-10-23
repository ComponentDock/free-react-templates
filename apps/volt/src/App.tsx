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
      <footer className="border-t border-black/10 bg-white py-6 text-center text-[13px] text-body lg:ml-[25%]">
        <p>
          More templates at{' '}
          <a
            className="font-semibold text-brand underline-offset-4 hover:underline"
            href="https://www.componentdock.com/"
          >
            Component Dock
          </a>
        </p>
      </footer>
    </div>
  )
}
