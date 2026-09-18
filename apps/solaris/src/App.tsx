import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Intro } from './components/Intro'
import { PortfolioFilter } from './components/PortfolioFilter'
import { PortfolioGrid, type PortfolioItem } from './components/PortfolioGrid'
import { TextSection } from './components/TextSection'
import { Footer } from './components/Footer'

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, title: 'CLOCK', category: 'image', seed: 'solaris-1' },
  { id: 2, title: 'BAG', category: 'post', seed: 'solaris-2' },
  { id: 3, title: 'FISH', category: 'image', seed: 'solaris-3' },
  { id: 4, title: 'BOTTLE', category: 'video', seed: 'solaris-4' },
  { id: 5, title: 'PAPER', category: 'extern', seed: 'solaris-5' },
  { id: 6, title: 'BLUE ICE', category: 'image', seed: 'solaris-6' },
]

export function App() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <div className="mx-auto max-w-5xl bg-paper px-10">
      <Navbar />
      <main>
        <Intro />
        <PortfolioFilter active={activeFilter} onFilter={setActiveFilter} />
        <PortfolioGrid items={PORTFOLIO_ITEMS} activeFilter={activeFilter} />
        <TextSection />
      </main>
      <Footer />
    </div>
  )
}
