import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroBanner } from './components/HeroBanner'
import { AppointmentSection } from './components/AppointmentSection'
import { StatsCounter } from './components/StatsCounter'
import { AboutSection } from './components/AboutSection'
import { Departments } from './components/Departments'
import { Doctors } from './components/Doctors'
import { BlogSection } from './components/BlogSection'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <HeroBanner />
      <AppointmentSection />
      <StatsCounter />
      <AboutSection />
      <Departments />
      <Doctors />
      <BlogSection />
      <Testimonials />
      <Footer />
    </div>
  )
}
