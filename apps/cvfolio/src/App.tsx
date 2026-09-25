import { Header } from './components/Header'
import { Profile } from './components/Profile'
import { Portfolio } from './components/Portfolio'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Stats } from './components/Stats'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen font-sans text-body-text bg-white">
      <Header />
      <main>
        <Profile />
        <Portfolio />
        <About />
        <Experience />
        <Education />
        <Stats />
      </main>
      <Footer />
    </div>
  )
}
