import { LocationInfo } from './components/LocationInfo'
import { ContactInfo } from './components/ContactInfo'
import { MessageForm } from './components/MessageForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-bg-page font-['Quicksand',sans-serif] text-text-primary">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <LocationInfo />
          <ContactInfo />
        </div>
        <MessageForm />
      </div>
      <Footer />
    </div>
  )
}
