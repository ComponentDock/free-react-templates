import { Navbar } from './components/Navbar'
import { Banner } from './components/Banner'
import { TeamForce } from './components/TeamForce'
import { Features } from './components/Features'
import { VideoSection } from './components/VideoSection'
import { TestimonialSection } from './components/TestimonialSection'
import { ServiceSection } from './components/ServiceSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Banner />
      <TeamForce />
      <Features />
      <VideoSection />
      <TestimonialSection />
      <ServiceSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
