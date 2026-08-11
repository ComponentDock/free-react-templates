import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

/* Seeded picsum placeholder for the source daytime-cityscape photograph (the
   original background.jpg must not be copied). The prep spec pinned seed
   sleeply-1, but that seed resolves to a forest path; picsum id/1029 — a
   color daytime aerial of New York (dense skyscrapers around Central Park
   under a bright blue sky) — is used instead to match the source photo's
   daytime-cityscape subject. */
const SECTION_IMAGE = 'https://picsum.photos/id/1029/1920/1080'

export function App() {
  useEffect(() => {
    document.title = 'Sleeply — Hotel Booking Template'
  }, [])

  return (
    <main>
      {/* Single-section demo: full-viewport section with the full-bleed photo
          page background (NO scrim — the solid WHITE card provides its own
          contrast, the photo stays fully visible around it), vertically
          centering the booking-form card; NO headline, NO navbar, NO footer
          (source is a bare booking form section). */}
      <section
        id="booking"
        className="flex min-h-screen items-center justify-center bg-cover bg-center px-[15px] py-10"
        style={{ backgroundImage: `url('${SECTION_IMAGE}')` }}
      >
        {/* Bootstrap container width (the card itself has no max-width). */}
        <div className="w-full max-w-[1140px]">
          <BookingForm />
        </div>
      </section>
    </main>
  )
}
