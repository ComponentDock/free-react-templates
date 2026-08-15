import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { How } from './components/How'
import { Concept } from './components/Concept'
import { Subscription } from './components/Subscription'
import { Premium } from './components/Premium'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <How />
        <Concept />
        <Subscription />
        <Premium />
      </main>
      <Footer />
    </>
  )
}
