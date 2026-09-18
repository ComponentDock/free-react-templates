import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Song from './components/Song'
import Tours from './components/Tours'
import AppSection from './components/AppSection'
import FeaturedAlbums from './components/FeaturedAlbums'
import News from './components/News'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Song />
      <Tours />
      <AppSection />
      <FeaturedAlbums />
      <News />
      <Newsletter />
      <Footer />
    </div>
  )
}
