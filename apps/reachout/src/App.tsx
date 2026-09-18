import { Hero } from './components/Hero'
import { ContactSidebar } from './components/ContactSidebar'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-bg-page font-['Poppins',sans-serif] text-text-primary">
      <Hero />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col overflow-hidden rounded bg-white shadow-md md:flex-row">
          <ContactSidebar />
          <div className="flex-1 p-8 md:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
