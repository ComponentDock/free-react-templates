import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { BookTable } from './components/BookTable'
import { MenuSection } from './components/MenuSection'
import { Chefs } from './components/Chefs'
import { Events } from './components/Events'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
      <BookTable />
      <MenuSection />
      <Chefs />
      <Events />
      <Blog />
      <Footer />
    </div>
  )
}
