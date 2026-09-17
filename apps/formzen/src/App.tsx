import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-bg-page font-['Inter',sans-serif]">
      <div className="mx-auto max-w-lg px-4 py-16">
        <div className="rounded-xl bg-card-surface p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}
