import { ContactForm } from './components/ContactForm'
import { MapSection } from './components/MapSection'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-bg-page font-['Roboto',sans-serif]">
      <div className="flex items-stretch justify-center px-4 py-12">
        <div className="flex w-full max-w-5xl overflow-hidden rounded-sm shadow-[0_0_20px_0_rgba(0,0,0,0.15)]">
          <div className="flex-1 bg-bg-card p-10">
            <ContactForm />
          </div>
          <div className="w-80 hidden md:block">
            <MapSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
