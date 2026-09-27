import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { PortfolioFilter } from './components/PortfolioFilter'
import { PortfolioGrid } from './components/PortfolioGrid'
import { ContentSplit } from './components/ContentSplit'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Daybreak — Portfolio Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-[1330px] px-4 py-10 sm:px-6">
          <p className="text-sm leading-relaxed text-smoke">
            Science cuts two ways, of course, its products can be used for both good and evil. But
            there's no turning back from science. The early warnings about technological dangers
            also come from science.
          </p>
          <PortfolioFilter />
          <PortfolioGrid />
          <ContentSplit />
        </section>
      </main>
      <Footer />
    </div>
  )
}
