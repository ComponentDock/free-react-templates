import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { InfoCards } from './components/InfoCards'
import { Quote } from './components/Quote'
import { Gallery } from './components/Gallery'
import { Events } from './components/Events'
import { Ticket } from './components/Ticket'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <InfoCards />
      <Quote />
      <Gallery />
      <Events />
      <Ticket />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}
