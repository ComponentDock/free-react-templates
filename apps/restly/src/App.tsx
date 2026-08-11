import { useEffect } from 'react'
import { ReservationForm } from './components/ReservationForm'

/* Seeded picsum placeholder for the source night-cityscape photograph (the
   original background.jpg must not be copied). The prep spec pinned seed
   restly-1, but that seed resolves to an auditorium interior; seed
   restly-metropolis (picsum id/1078 — a night high-rise facade densely lit
   with warm windows against a dark sky) is used instead to match the source
   photo's night-cityscape subject. */
const SECTION_IMAGE = 'https://picsum.photos/seed/restly-metropolis/1920/1080'

export function App() {
  useEffect(() => {
    document.title = 'Restly — Hotel Booking Template'
  }, [])

  return (
    <main>
      {/* Single-section demo: full-viewport section with the full-bleed photo
          page background (NO scrim, NO card — the translucent-white fields
          provide their own contrast), vertically centering the headline and
          the booking form; NO navbar, NO footer (source is a bare booking
          form section). */}
      <section
        id="booking"
        className="flex min-h-screen items-center justify-center bg-cover bg-center px-[15px] py-10"
        style={{ backgroundImage: `url('${SECTION_IMAGE}')` }}
      >
        {/* Bootstrap container width (the form itself has no max-width). */}
        <div className="w-full max-w-[1140px]">
          {/* .booking-cta: centered serif headline — Cantata One, white,
              52px, weight 700 (synthetic), 30px bottom margin. */}
          <h1 className="mb-[30px] text-center font-serif text-[52px] font-bold text-white">
            Make Your Reservation
          </h1>
          <ReservationForm />
        </div>
      </section>
    </main>
  )
}
