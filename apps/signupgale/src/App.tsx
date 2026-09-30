import { RegistrationForm } from './components/RegistrationForm'
import { Illustration } from './components/Illustration'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="flex min-h-screen bg-[var(--color-bg-page)] font-[Poppins,sans-serif]">
      {/* Left side — flat vector illustration */}
      <div className="hidden w-1/2 items-center justify-center md:flex">
        <Illustration />
      </div>

      {/* Right side — form area */}
      <div className="flex w-full flex-col items-center justify-center px-6 py-12 md:w-1/2">
        <div className="w-full max-w-[420px]">
          <RegistrationForm />
        </div>
        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </div>
  )
}
