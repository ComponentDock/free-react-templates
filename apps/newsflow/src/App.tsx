import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { TrendingStories } from './components/TrendingStories'
import { MainContent } from './components/MainContent'
import { MoreStories } from './components/MoreStories'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-text-primary">
      <TopBar />
      <Navbar />
      <TrendingStories />
      <MainContent />
      <MoreStories />
      <Newsletter />
      <Footer />
    </div>
  )
}
