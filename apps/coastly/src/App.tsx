import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

export function App() {
  useEffect(() => {
    document.title = 'Coastly — Hotel Booking Form Template'
  }, [])

  return (
    <main>
      {/* Single-section demo: full-viewport section with a full-bleed
          cover/center photo (pool resort) washed out by an 85% white
          overlay, vertically centering a two-column row — dark form block
          LEFT, "Book Now!" CTA RIGHT. NO navbar, NO footer (source is a
          bare booking form section). */}
      <section
        id="booking"
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/coastly-1/1920/1080')" }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-wash" />
        <div className="relative z-10 mx-auto w-full max-w-[1140px] px-[15px] py-10">
          <div className="grid grid-cols-1 items-center gap-y-10 lg:grid-cols-12 lg:gap-x-8">
            {/* CTA copy column (.booking-cta): col-md-7 push-5 — right side
                on desktop, stacks above the form below 992px (DOM order). */}
            <div className="mb-[30px] mt-20 lg:col-span-7 lg:col-start-6">
              <h1 className="text-[58px] font-normal uppercase leading-tight text-ink">
                Book Now!
              </h1>
              <p className="text-[16px] leading-relaxed text-ink">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam
                numquam at consequatur quisquam suscipit.
              </p>
            </div>

            {/* Dark form block (.booking-form): col-md-4 pull-7 — left side
                on desktop. */}
            <div className="lg:col-span-4 lg:col-start-1 lg:row-start-1">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
