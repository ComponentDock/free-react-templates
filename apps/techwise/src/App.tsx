import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Team } from './components/Team'
import { Counter } from './components/Counter'
import { Portfolio } from './components/Portfolio'
import { WhyChooseUs } from './components/WhyChooseUs'
import { FAQ } from './components/FAQ'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'
import { FooterBottom } from './components/FooterBottom'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-800 transition-colors">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Team />
        <Counter />
        <Portfolio />
        <WhyChooseUs />
        <FAQ />
        <Testimonials />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
      <FooterBottom />
    </div>
  )
}
