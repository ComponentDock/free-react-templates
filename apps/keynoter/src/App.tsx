import { SkipLink } from './components/Chrome'
import { Counter } from './components/Counter'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Speakers } from './components/Speakers'
import { Subscribe } from './components/Subscribe'
import { Talks } from './components/Talks'
import { Workshop } from './components/Workshop'

/**
 * One page in the reference's band order: the transparent header floating on a
 * duotone hero, the navy event counter, keynote speakers, the workshop split,
 * the "we will speak about" grid, the subscribe band and the navy footer.
 */
export function App() {
  return (
    <div className="min-h-screen bg-white">
      <SkipLink />
      <Header />
      <main id="main-content">
        <Hero />
        <Counter />
        <Speakers />
        <Workshop />
        <Talks />
        <Subscribe />
      </main>
      <Footer />
    </div>
  )
}
