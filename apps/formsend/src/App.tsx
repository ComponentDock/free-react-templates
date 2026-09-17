import { ContactCard } from './components/ContactCard'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="relative min-h-screen bg-[url('https://picsum.photos/seed/formsend-bg/1920/1080')] bg-cover bg-center font-['Poppins',sans-serif]">
      {/* Purple overlay */}
      <div className="absolute inset-0 bg-brand-purple/70" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <ContactCard />
        <Footer />
      </div>
    </div>
  )
}
