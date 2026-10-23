import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { documentTitle, skipLabel } from './data'
import { BlogList } from './components/BlogList'
import { FeaturedImage } from './components/FeaturedImage'
import { Sidebar } from './components/Sidebar'

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.title = documentTitle
  }, [])

  return (
    <div className="min-h-screen bg-white font-serif text-body">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Sidebar open={menuOpen} onToggle={() => setMenuOpen((open) => !open)} />
      <main
        id="main"
        className={cn(
          'ml-16 transition-[margin] duration-300 md:ml-[100px]',
          menuOpen && 'md:ml-[420px]',
        )}
      >
        <BlogList />
      </main>
      <footer className="ml-16 border-t border-mist/40 bg-white py-6 text-center md:ml-[100px]">
        <p className="font-display text-[13px] uppercase tracking-wide text-body">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-bold text-brand underline-offset-4 hover:underline"
          >
            Component Dock
          </a>
        </p>
      </footer>
      <FeaturedImage />
    </div>
  )
}
