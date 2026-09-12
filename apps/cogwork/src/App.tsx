import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { Features } from './components/Features'
import { Engineering } from './components/Engineering'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { BlogPosts } from './components/BlogPosts'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <Features />
      <Engineering />
      <About />
      <Projects />
      <Testimonials />
      <BlogPosts />
      <CtaBanner />
      <Footer />
    </div>
  )
}
