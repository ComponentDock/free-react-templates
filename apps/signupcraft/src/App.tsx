import { RegistrationForm } from './components/RegistrationForm'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="flex min-h-screen font-[Poppins,sans-serif]">
      {/* Left side — background image */}
      <div className="hidden w-[40%] md:block">
        <img
          src="https://picsum.photos/seed/signupcraft-kitchen/800/1200"
          alt="Kitchen lifestyle scene"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right side — form card */}
      <div className="flex w-full flex-col items-center justify-center bg-[var(--color-bg-page)] px-6 py-12 md:w-[60%]">
        <div className="w-full max-w-[420px] rounded bg-[var(--color-bg-card)] p-10 shadow-[0_2px_15px_rgba(0,0,0,0.1)]">
          <RegistrationForm />
        </div>
        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </div>
  )
}
