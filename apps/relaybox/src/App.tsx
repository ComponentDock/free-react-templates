import { ContactInfo } from './components/ContactInfo'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-ink">
      <main className="mx-auto flex max-w-[960px] flex-col overflow-hidden shadow-lg md:flex-row">
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
