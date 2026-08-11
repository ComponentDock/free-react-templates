import { useEffect } from 'react'
import { ButtonLink } from '@free-react-templates/ui'
import { CategoryTabs } from './components/CategoryTabs'
import { FeaturedCards } from './components/FeaturedCards'
import { Footer } from './components/Footer'
import { HeroPostStrip } from './components/HeroPostStrip'
import { HeroSlider } from './components/HeroSlider'
import { LatestArticles } from './components/LatestArticles'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import {
  documentTitle,
  dontMissTitle,
  featuredPanes,
  heroLabel,
  loadMoreLabel,
  skipLabel,
  trendingPanes,
  trendingTitle,
} from './data'

/* Atlas — blog & magazine home page (ColorLib "World" recreation). Section
   order matches the preview 1:1: header → hero slider + numbered posts strip
   → "Don't Miss" tabs → "What's Trending" tabs → sidebar → cards row →
   Latest Articles / Most Popular Videos → Load More → footer. */
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
        <section className="relative" aria-label={heroLabel}>
          <HeroSlider />
          <HeroPostStrip />
        </section>

        <div className="bg-paper py-[100px]">
          <div className="mx-auto max-w-[1170px] px-4">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <CategoryTabs title={dontMissTitle} variant="featured" panes={featuredPanes} />
                <CategoryTabs
                  className="mt-12"
                  title={trendingTitle}
                  variant="trending"
                  panes={trendingPanes}
                />
              </div>
              <Sidebar />
            </div>

            <FeaturedCards />
            <LatestArticles />

            <div className="mt-12 text-center">
              <ButtonLink
                href="#"
                className="h-[35px] rounded-full bg-brand px-[25px] text-sm text-white hover:bg-brand/90"
              >
                {loadMoreLabel}
              </ButtonLink>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
