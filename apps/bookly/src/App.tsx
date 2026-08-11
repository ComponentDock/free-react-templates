import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

/* Seeded picsum placeholder for the source hotel-bedroom photograph (the
   original background.jpg must not be copied). */
const SECTION_IMAGE = 'https://picsum.photos/seed/bookly-1/1920/1080'

export function App() {
  useEffect(() => {
    document.title = 'Bookly — Hotel Reservation Template'
  }, [])

  return (
    <main>
      {/* Single-section demo: full-viewport section with the full-bleed photo
          page background washed out by an 80% white overlay, vertically
          centering a two-column row — LEFT CTA copy (h1 + paragraph) and
          RIGHT white reservation card; NO navbar, NO footer (source is a
          bare booking form section). */}
      <section
        id="booking"
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-[15px] py-10"
        style={{ backgroundImage: `url('${SECTION_IMAGE}')` }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-white/80" />

        <div className="relative grid w-full max-w-[1140px] grid-cols-1 gap-y-10 md:grid-cols-12">
          {/* Left CTA column (source col-md-5, .booking-cta margin-top 45px). */}
          <div className="md:col-span-5 md:pt-[45px]">
            <h1 className="text-[52px] font-black uppercase leading-tight text-ink">
              Make your reservation
            </h1>
            <p className="mt-4 text-[22px] leading-relaxed text-ink">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam numquam
              at consequatur quisquam suscipit.
            </p>
          </div>

          {/* Right card column (source col-md-6 col-md-offset-1). */}
          <div className="md:col-span-6 md:col-start-7">
            <BookingForm />
          </div>
        </div>
      </section>
    </main>
  )
}
