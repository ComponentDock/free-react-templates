import { ContactCard } from './components/ContactCard'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-bg-page font-['Poppins',sans-serif] text-text-primary">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="mb-8 text-center font-['Playfair_Display',serif] text-2xl font-bold text-text-primary md:text-3xl">
          Contact Form #04
        </h1>
        <ContactCard />
      </div>
      <Footer />
    </div>
  )
}
