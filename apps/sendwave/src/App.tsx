import { ContactCard } from './components/ContactCard'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-bg-page font-['Poppins',sans-serif] text-text-body">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-8 text-center text-2xl font-normal text-text-heading">
          Contact Form #05
        </h2>
        <ContactCard />
      </section>
      <Footer />
    </div>
  )
}
