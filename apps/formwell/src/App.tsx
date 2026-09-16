import { PageTitle } from './components/PageTitle'
import { ContactCard } from './components/ContactCard'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-bg-page font-['Poppins',sans-serif] text-text-primary">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <PageTitle />
        <ContactCard />
      </div>
      <Footer />
    </div>
  )
}
