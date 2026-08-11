import { useEffect, useState } from 'react'
import { documentTitle, skipLabel } from './data'
import { BlogGrid } from './components/BlogGrid'
import { Footer } from './components/Footer'
import { HeroSlider } from './components/HeroSlider'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { TopBar } from './components/TopBar'

/* Typeface — minimal blog home page (ColorLib "Wordify" recreation). The
   whole page sits on a framed white sheet: 20px page padding + a 1px #efefef
   border with no top border, over the textured #ccc page background. */
export function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.title = documentTitle
  }, [])

  return (
    <div className="min-h-screen bg-page p-5 font-body text-body">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <div className="mx-auto max-w-[1250px] border border-card-border border-t-0 bg-white">
        <header role="banner">
          <TopBar />
          <Logo menuOpen={menuOpen} onToggle={() => setMenuOpen((open) => !open)} />
          <Navbar menuOpen={menuOpen} />
        </header>
        <main id="main" className="px-4 pb-10 md:px-8">
          <HeroSlider />
          <div className="mt-12 flex flex-col gap-10 lg:flex-row">
            <BlogGrid />
            <Sidebar />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
