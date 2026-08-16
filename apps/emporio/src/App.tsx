import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { CategoryCards } from './components/CategoryCards'
import { TrendingProducts } from './components/TrendingProducts'
import { Testimonial } from './components/Testimonial'
import { MayLike } from './components/MayLike'
import { LatestNews } from './components/LatestNews'
import { ServicesStrip } from './components/ServicesStrip'
import { Footer } from './components/Footer'

/* Single-page composition matching the source's section order:
   header -> hero slider -> category cards -> Trending This Week ->
   testimonial -> You May Like -> Latest News -> services strip -> footer. */
export function App() {
  useEffect(() => {
    document.title = 'Emporio — Fashion Shop Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <HeroSlider />
        <CategoryCards />
        <TrendingProducts />
        <Testimonial />
        <MayLike />
        <LatestNews />
        <ServicesStrip />
      </main>
      <Footer />
    </div>
  )
}
