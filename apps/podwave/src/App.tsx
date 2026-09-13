import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { RecentPodcasts } from './components/RecentPodcasts'
import { BehindTheMic } from './components/BehindTheMic'
import { Subscribe } from './components/Subscribe'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <RecentPodcasts />
      <BehindTheMic />
      <Subscribe />
      <Footer />
    </div>
  )
}
