import { MapPanel } from './components/MapPanel'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-1/2">
          <MapPanel />
        </div>
        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}
