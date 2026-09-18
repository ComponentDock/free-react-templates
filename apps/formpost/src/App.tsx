import { PageTitle } from './components/PageTitle'
import { ContactInfo } from './components/ContactInfo'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-bg-page font-['Poppins',sans-serif] text-text-primary">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <PageTitle />
        <ContactInfo />
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}
