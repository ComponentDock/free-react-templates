import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Welcome } from './components/Welcome'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Services } from './components/Services'
import { Blog } from './components/Blog'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="font-sans text-body">
      <Navbar />
      <Hero />
      <Welcome />
      <WhyChooseUs />
      <Services />
      <Blog />
      <Testimonials />
      <Footer />
    </div>
  )
}
