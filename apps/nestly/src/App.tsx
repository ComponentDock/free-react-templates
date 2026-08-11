import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

export function App() {
  useEffect(() => {
    document.title = 'Nestly — Hotel Reservation Template'
  }, [])

  return (
    <main>
      {/* Single-section demo: full-viewport section with a full-bleed
          cover/center beach photo (NO overlay/scrim — the source photo
          shows at full saturation), vertically centering the WHITE
          horizontal booking bar. NO navbar, NO footer (source is a bare
          booking form section). */}
      <section
        id="booking"
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/nestly-paradise/1920/1080')" }}
      >
        <div className="relative z-10 mx-auto w-full max-w-[1140px] px-[15px] py-10">
          <BookingForm />
        </div>
      </section>
    </main>
  )
}
