import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Properties } from './components/Properties'
import { Loan } from './components/Loan'
import { Stories } from './components/Stories'
import { Footer } from './components/Footer'

/** Estately — one-page real-estate landing.
 *  Section order matches the live preview DOM 1:1:
 *  header → hero search → intro → property cards → loan → stories → footer. */
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Properties />
        <Loan />
        <Stories />
      </main>
      <Footer />
    </div>
  )
}
