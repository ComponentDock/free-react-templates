import { HeroImage } from './components/HeroImage'
import { RegistrationForm } from './components/RegistrationForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-bg-page py-[120px] font-['Roboto',sans-serif]">
      <h1 className="sr-only">Regsnap</h1>
      <div className="mx-auto max-w-[960px] overflow-hidden rounded-[10px] bg-bg-card shadow-[0_8px_20px_0_rgba(0,0,0,0.15)] md:flex">
        <HeroImage />
        <div className="flex-1 px-[50px] py-[60px] md:px-[90px] md:py-[80px]">
          <RegistrationForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}
