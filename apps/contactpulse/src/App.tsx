import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-brand-golden to-brand-pink px-4 py-12 font-['Poppins',sans-serif]">
      <div className="w-full max-w-[600px] rounded-lg bg-white p-8 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <h2 className="mb-8 text-center text-3xl font-bold text-text-heading">Contact Us</h2>
        <ContactForm />
        <Footer />
      </div>
    </div>
  )
}
