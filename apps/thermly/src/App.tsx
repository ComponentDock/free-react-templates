import { Areas } from './components/Areas'
import { ClosingCta } from './components/ClosingCta'
import { CookieStrip } from './components/CookieStrip'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Plans } from './components/Plans'
import { Process } from './components/Process'
import { Reviews } from './components/Reviews'
import { Seasons } from './components/Seasons'
import { WhyUs } from './components/WhyUs'

export interface AppProps {
  /** Injectable clock for the booking strip and the default season. */
  today?: Date
}

export function App({ today }: AppProps) {
  return (
    <div id="top" className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero today={today} />
        <Seasons today={today} />
        <WhyUs />
        <Process />
        <Plans />
        <Areas />
        <Reviews />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
      <CookieStrip />
    </div>
  )
}
