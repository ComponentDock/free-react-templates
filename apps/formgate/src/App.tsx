import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-bg-page font-['Inter',sans-serif] flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-[700px]">
        <ContactForm />
        <Footer />
      </div>
    </div>
  )
}
