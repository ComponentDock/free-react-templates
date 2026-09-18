import { PageTitle } from './components/PageTitle'
import { ContactInfo } from './components/ContactInfo'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-bg-page font-['Poppins',sans-serif] text-text-primary">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <PageTitle />
        <div className="flex flex-col overflow-hidden rounded bg-white shadow-md md:flex-row">
          <ContactInfo />
          <div className="flex-1 p-8 md:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
