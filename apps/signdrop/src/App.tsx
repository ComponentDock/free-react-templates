import { RegistrationForm } from './components/RegistrationForm'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="flex min-h-screen font-[Poppins,sans-serif]">
      {/* Left panel — form */}
      <div className="flex w-full flex-col items-center justify-between bg-[var(--color-bg-form)] px-8 py-12 lg:w-1/2">
        <div className="flex flex-1 flex-col justify-center">
          <RegistrationForm />
        </div>
        <Footer />
      </div>

      {/* Right panel — hero image */}
      <div className="hidden lg:block lg:w-1/2">
        <img
          src="https://picsum.photos/seed/signdrop-city/1200/900"
          alt="City street scene"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
