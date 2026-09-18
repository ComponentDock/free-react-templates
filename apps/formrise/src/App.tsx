import { DarkCard, DarkCardDivider } from './components/DarkCard'
import { ContactForm } from './components/ContactForm'
import { ContactInfo } from './components/ContactInfo'
import { PageTitle } from './components/PageTitle'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-bg-page font-['Poppins',sans-serif]">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <PageTitle />
        <DarkCard>
          <div className="flex-1 p-8 md:p-10">
            <ContactForm />
          </div>
          <DarkCardDivider />
          <div className="flex-1 p-8 md:p-10">
            <ContactInfo />
          </div>
        </DarkCard>
      </section>
      <Footer />
    </div>
  )
}
