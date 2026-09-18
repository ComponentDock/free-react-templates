import { PageTitle } from './components/PageTitle'
import { ContactInfo } from './components/ContactInfo'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div
      className="min-h-screen bg-bg-page font-['Poppins',sans-serif]"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/formedge-city/1920/1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-5xl px-4 py-12">
        <PageTitle />
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="md:w-2/5">
            <ContactInfo />
          </div>
          <div className="md:w-3/5">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
