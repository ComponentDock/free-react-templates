import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WorkingProcess } from './components/WorkingProcess'
import { Features } from './components/Features'
import { RemarkableWorks } from './components/RemarkableWorks'
import { Story } from './components/Story'
import { Subscription } from './components/Subscription'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WorkingProcess />
      <Features />
      <RemarkableWorks />
      <Story />
      <Subscription />
      <Contact />
      <Footer />
    </div>
  )
}
