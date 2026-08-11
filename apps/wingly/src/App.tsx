import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

/* Seeded picsum placeholder for the source airplane-wing-over-clouds
   photograph (the original background.jpg must not be copied). The prep
   spec pinned seed wingly-1, but that seed resolves to a beach scene; seed
   wingly-9 (Golden Gate bridge rising above a sea of fog under a pale blue
   sky — "above the clouds") is used instead to match the source photo's
   sky/clouds subject. */
const SECTION_IMAGE = 'https://picsum.photos/seed/wingly-9/1920/1080'

export function App() {
  useEffect(() => {
    document.title = 'Wingly — Flight Booking Template'
  }, [])

  return (
    <main>
      {/* Single-section demo: full-viewport section with the full-bleed photo
          page background (NO scrim — the card's own rgba(0,0,0,0.7) provides
          the contrast), vertically centering the full-width dark booking
          card; NO navbar, NO headline/CTA column, NO footer (source is a
          bare booking form section). */}
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
