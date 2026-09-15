import { useEffect } from 'react'
import { About } from './components/About'
import { Blog } from './components/Blog'
import { ContactInfo } from './components/ContactInfo'
import { EventList } from './components/EventList'
import { EventSpotlight } from './components/EventSpotlight'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Newsletter } from './components/Newsletter'
import { Sermon } from './components/Sermon'
import { Services } from './components/Services'
import { TopBar } from './components/TopBar'

export function App() {
  useEffect(() => {
    document.title = 'Chapel — Church Event Template'
  }, [])

  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <EventSpotlight />
        <About />
        <Services />
        <Sermon />
        <EventList />
        <Blog />
        <Newsletter />
        <ContactInfo />
      </main>
      <Footer />
    </>
  )
}
