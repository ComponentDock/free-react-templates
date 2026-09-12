import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutUs } from './components/AboutUs'
import { Projects } from './components/Projects'
import { Methods } from './components/Methods'
import { Clients } from './components/Clients'
import { RecentNews } from './components/RecentNews'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Projects />
        <Methods />
        <Clients />
        <RecentNews />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
