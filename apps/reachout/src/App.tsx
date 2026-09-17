import { ContactInfo } from './components/ContactInfo'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen font-['Roboto',sans-serif] text-text-secondary">
      <main className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <div className="flex flex-col overflow-hidden rounded-lg shadow-xl md:flex-row">
          <div className="flex-1 bg-gradient-to-br from-[#66a6ff] to-[#89f7fe] md:w-1/2">
            <ContactInfo />
          </div>
          <div className="flex-1 bg-gradient-to-br from-[#66a6ff] to-[#89f7fe] p-4 md:w-1/2 md:p-0">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
