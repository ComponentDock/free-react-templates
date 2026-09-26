import { Navbar } from './components/Navbar'
import { Intro } from './components/Intro'
import { Portfolio } from './components/Portfolio'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-light-gray font-sans text-body-text">
      <Navbar />
      <main>
        <Intro />
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}
