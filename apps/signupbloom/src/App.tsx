import { RegistrationForm } from './components/RegistrationForm'
import { Illustration } from './components/Illustration'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg-page)] font-[Roboto,sans-serif] md:flex-row">
      {/* Left side — form area */}
      <div className="flex w-full flex-col items-center justify-center px-6 py-12 md:w-1/2 md:order-1">
        <div className="w-full max-w-[420px]">
          <RegistrationForm />
        </div>
        <div className="mt-8">
          <Footer />
        </div>
      </div>

      {/* Right side — illustration */}
      <div className="hidden w-1/2 items-center justify-center md:flex md:order-2">
        <Illustration />
      </div>
    </div>
  )
}
