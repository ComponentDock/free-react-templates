import { useEffect } from 'react'
import { BlogPosts } from './components/BlogPosts'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { InstagramStrip } from './components/InstagramStrip'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { siteName, skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Saffron — Lifestyle Blog Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Navbar />
      <main id="main">
        <h1 className="sr-only">{siteName} — travel and lifestyle stories</h1>
        <Hero />
        <div className="mx-auto flex max-w-6xl flex-col gap-[50px] px-4 pb-[40px] pt-[70px] lg:flex-row">
          <div className="lg:w-2/3">
            <BlogPosts />
          </div>
          <aside aria-label="Sidebar" className="lg:w-1/3">
            <Sidebar />
          </aside>
        </div>
        <InstagramStrip />
      </main>
      <Footer />
    </div>
  )
}
