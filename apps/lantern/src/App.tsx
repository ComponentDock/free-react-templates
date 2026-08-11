import { useEffect } from 'react'
import { ArticleGrid } from './components/ArticleGrid'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Sidebar } from './components/Sidebar'
import { skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Lantern — Blog Template'
  }, [])

  return (
    <div className="relative min-h-screen bg-white font-sans text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-ink"
      >
        {skipLabel}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <section aria-label="Latest articles" className="bg-mist py-12">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12">
            <ArticleGrid />
            <Sidebar />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
