import { HeroImage } from './components/HeroImage'
import { RegistrationForm } from './components/RegistrationForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-bg-page font-['Poppins',sans-serif] text-text-primary">
      <h1 className="sr-only">Regpass</h1>
      <HeroImage />
      <div className="mx-auto max-w-4xl px-4 py-12">
        <RegistrationForm />
      </div>
      <Footer />
    </div>
  )
}
