import { useEffect } from 'react'
import { CarBookingForm } from './components/CarBookingForm'

/* Seeded picsum placeholder for the source yellow-taxis city-street
   photograph (the original background.jpg must not be copied). Seed
   `drivly-city` renders an aerial downtown scene with streets and cars,
   matching the urban driving mood of the source photo. */
const SECTION_IMAGE = 'https://picsum.photos/seed/drivly-city/1920/1080'

export function App() {
  useEffect(() => {
    document.title = 'Drivly — Car Booking Template'
  }, [])

  return (
    <main>
      {/* Single-section demo: full-viewport section with the full-bleed photo
          page background dimmed by a 60% black overlay scrim (source
          #booking::before rgba(0,0,0,0.6)), vertically centering the dark
          #101113 booking card; NO navbar, NO footer (source is a bare booking
          form section). */}
      <section
        id="booking"
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-[15px] py-10"
        style={{ backgroundImage: `url('${SECTION_IMAGE}')` }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

        <div className="relative w-full">
          <CarBookingForm />
        </div>
      </section>
    </main>
  )
}
