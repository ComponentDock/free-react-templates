import { BookingWizard } from './components/BookingWizard'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div
      data-testid="hexcraft-layout"
      className="flex min-h-screen flex-col bg-bg-warm text-navy font-sans"
    >
      <main className="flex flex-1 flex-col lg:flex-row">
        {/* Left: background image panel */}
        <div className="relative hidden w-1/2 lg:block">
          <img
            src="https://picsum.photos/seed/hexcraft-booking/1920/1080"
            alt="Booking background"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="border-2 border-white px-8 py-4">
              <h1 className="font-heading text-3xl font-bold uppercase tracking-widest text-white">
                Your Reservation
              </h1>
            </div>
          </div>
        </div>

        {/* Right: wizard panel */}
        <div className="flex w-full flex-col items-center justify-center bg-navy/90 p-6 lg:w-1/2 lg:p-10">
          <BookingWizard />
        </div>
      </main>
      <Footer />
    </div>
  )
}
