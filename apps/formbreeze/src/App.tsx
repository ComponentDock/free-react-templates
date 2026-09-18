import { ContactCard } from './components/ContactCard'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-wrap items-center justify-center bg-gradient-to-r from-brand-blue-start to-brand-blue-end p-4">
      <ContactCard />
      <Footer />
    </div>
  )
}
