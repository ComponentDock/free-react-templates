import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { WorkGallery } from './components/WorkGallery'
import { Counter } from './components/Counter'
import { Team } from './components/Team'
import { Blog } from './components/Blog'
import { CallToAction } from './components/CallToAction'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-surface-dark text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <WorkGallery />
        <Counter />
        <Team />
        <Blog />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
