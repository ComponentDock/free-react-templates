import { InfoPanel } from './components/InfoPanel'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-bg-page font-['Poppins',sans-serif]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="lg:w-2/5">
            <InfoPanel />
          </div>
          <div className="lg:w-3/5">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <Footer />
      </div>
    </div>
  )
}
