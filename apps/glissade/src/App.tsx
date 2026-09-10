import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WorkingProcess } from './components/WorkingProcess'
import { Features } from './components/Features'
import { RemarkableWorks } from './components/RemarkableWorks'
import { Story } from './components/Story'
import { Newsletter } from './components/Newsletter'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-mist transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WorkingProcess />
        <Features />
        <RemarkableWorks />
        <Story />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
