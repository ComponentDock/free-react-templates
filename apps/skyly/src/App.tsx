import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

/* Seeded picsum placeholder for the source airplane-window photograph (the
   original background.jpg must not be copied). */
const SECTION_IMAGE = 'https://picsum.photos/seed/skyly-1/1920/1080'

export function App() {
  useEffect(() => {
    document.title = 'Skyly — Airline Flight Booking Template'
  }, [])

  return (
    <main>
      {/* Single-section demo: full-viewport section with the full-bleed photo
          page background, vertically centering a two-column row — LEFT CTA
          copy (h1 + paragraph) and RIGHT white flight-search card; NO
          navbar, NO footer (source is a bare booking form section). */}
      <section
        id="booking"
        className="flex min-h-screen items-center justify-center bg-cover bg-center px-[15px] py-10"
        style={{ backgroundImage: `url('${SECTION_IMAGE}')` }}
      >
        <div className="grid w-full max-w-[1140px] grid-cols-1 gap-y-10 md:grid-cols-12">
          {/* Left CTA column (source col-md-4, .booking-cta margin-top 45px). */}
          <div className="md:col-span-4 md:pt-[45px]">
            <h1 className="text-[52px] font-normal uppercase leading-tight text-brand">
              Book your flight today
            </h1>
            <p className="mt-4 text-[22px] leading-relaxed text-ink">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam numquam
              at consequatur quisquam suscipit.
            </p>
          </div>

          {/* Right card column (source col-md-7 col-md-offset-1). */}
          <div className="md:col-span-7 md:col-start-6">
            <BookingForm />
          </div>
        </div>
      </section>
    </main>
  )
}
