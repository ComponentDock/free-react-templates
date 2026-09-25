import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WorkingProcess } from './components/WorkingProcess'
import { FeaturedArea } from './components/FeaturedArea'
import { RemarkableWorks } from './components/RemarkableWorks'
import { StoryArea } from './components/StoryArea'
import { Subscription } from './components/Subscription'
import { ContactForm } from './components/ContactForm'
import { FooterWidget } from './components/FooterWidget'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WorkingProcess />
      <FeaturedArea />
      <RemarkableWorks />
      <StoryArea />
      <Subscription />
      <ContactForm />
      <FooterWidget />
      <Footer />
    </div>
  )
}
