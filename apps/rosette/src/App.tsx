import { HeroImages } from './components/HeroImages'
import { RegistrationForm } from './components/RegistrationForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg-page py-12 font-['Poppins',sans-serif]">
      <h1 className="sr-only">Rosette</h1>
      <div className="mx-auto w-full max-w-[900px] overflow-hidden rounded-lg bg-bg-card shadow-[0_8px_30px_0_rgba(0,0,0,0.12)] md:flex">
        <HeroImages />
        <div className="flex-1 px-8 py-10 md:px-14 md:py-14">
          <RegistrationForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}
