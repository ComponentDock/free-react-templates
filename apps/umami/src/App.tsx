import { useEffect } from 'react'
import { BackToTop } from './components/BackToTop'
import { CookieBanner } from './components/CookieBanner'
import { FeaturedRecipes } from './components/FeaturedRecipes'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { PageTopRecipes } from './components/PageTopRecipes'
import { TopRecipes } from './components/TopRecipes'
import { documentTitle, skipLabel } from './data'

/* Umami — food magazine / recipe blog home page (ColorLib "Yummy 2"
   recreation; reference: ThemeWagon mirror). Section order matches the
   reference 1:1: header → page-top recipe hero → Top Recipes this Week →
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
        <FeaturedRecipes />
      </main>
      <Footer />
      <BackToTop />
      <CookieBanner />
    </div>
  )
}
