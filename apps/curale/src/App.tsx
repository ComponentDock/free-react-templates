import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Welcome } from './components/Welcome'
import { Departments } from './components/Departments'
import { Patients } from './components/Patients'
import { Specialists } from './components/Specialists'
import { Hotline } from './components/Hotline'
import { News } from './components/News'
import { Footer } from './components/Footer'

/* Curale — medical clinic one-pager.
   Section order matches the reference preview 1:1: top bar + fixed nav →
   banner hero → feature cards → welcome split → department grid →
   patient testimonials + appointment form → specialist doctors →
   emergency hotline band → medical news → dark footer. */
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Welcome />
        <Departments />
        <Patients />
        <Specialists />
        <Hotline />
        <News />
      </main>
      <Footer />
    </div>
  )
}
