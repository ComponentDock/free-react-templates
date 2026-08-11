import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { documentTitle, skipLabel } from './data'
import { BlogList } from './components/BlogList'
import { FeaturedImage } from './components/FeaturedImage'
import { Rail } from './components/Rail'
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
      <Rail open={menuOpen} onToggle={() => setMenuOpen((open) => !open)} />
      <Sidebar open={menuOpen} />
      <main
        id="main"
        className={cn(
          'ml-16 transition-[margin] duration-300 md:ml-[100px]',
          menuOpen && 'md:ml-[420px]',
        )}
      >
        <BlogList />
      </main>
      <FeaturedImage />
    </div>
  )
}
