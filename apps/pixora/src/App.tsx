import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Features } from './components/Features'
import { Facts } from './components/Facts'
import { Services } from './components/Services'
import { NumberedRows } from './components/NumberedRows'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Facts />
        <Services />
        <NumberedRows />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
