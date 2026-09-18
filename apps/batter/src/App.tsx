import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Story } from './components/Story'
import { Works } from './components/Works'
import { Newsletter } from './components/Newsletter'
import { FooterWidgets } from './components/FooterWidgets'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Story />
      <Works />
      <Newsletter />
      <FooterWidgets />
      <Footer />
    </div>
  )
}
