import { SignupForm } from './components/SignupForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Split layout — form on left, image on right */}
      <div className="flex min-h-[90vh] flex-col md:flex-row">
        {/* Background image panel — right side on desktop, top on mobile */}
        <div
          className="order-1 h-[200px] w-full bg-cover bg-center md:order-2 md:h-auto md:w-1/2"
          style={{
            backgroundImage: "url('https://picsum.photos/seed/joinbox-hero/1200/900')",
          }}
        />

        {/* Form panel — left side on desktop, bottom on mobile */}
        <div className="order-2 flex w-full items-center justify-center bg-[var(--color-area)] px-4 py-12 md:order-1 md:h-auto md:w-1/2 md:py-0">
          <div className="w-full max-w-[560px]">
            <SignupForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
