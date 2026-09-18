import { ContactCard } from './components/ContactCard'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-bg-page font-['Roboto',sans-serif] text-text-body">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="mb-8 text-center text-2xl font-normal text-text-heading">
          Formlink — Contact Form
        </h1>
        <ContactCard />
      </section>
      <Footer />
    </div>
  )
}
