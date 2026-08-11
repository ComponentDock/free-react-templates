import { useEffect } from 'react'
import { CategoryFilter } from './components/CategoryFilter'
import { FeaturedRecipes } from './components/FeaturedRecipes'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { PageTopRecipes } from './components/PageTopRecipes'
import { TopRecipes } from './components/TopRecipes'
import { documentTitle, skipLabel } from './data'

/* Zesty — minimal food & recipe blog home page (ColorLib "Yummy"
   recreation). Section order matches the preview 1:1: header → page-top
   recipe hero → Top Recipes this Week → filterable categories grid →
   Featured Recipes → footer. */
export function App() {
  useEffect(() => {
    document.title = documentTitle
  }, [])

  return (
    <div className="min-h-screen bg-paper font-body text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[950] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Navbar />
      <main id="main">
        <PageTopRecipes />
        <TopRecipes />
        <CategoryFilter />
        <FeaturedRecipes />
      </main>
      <Footer />
    </div>
  )
}
