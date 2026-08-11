import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

/* Seeded picsum placeholder for the source canyon photograph (the original
   1920×1288 bg-registration-form-9.jpg must not be copied). The prep spec
   pinned seed innkeep-bg, but image screening (2026-08-11) showed it renders
   a camper van on a dirt road — off-subject. innkeep-badlands renders a
   person seen from behind overlooking a vast mountain/lake landscape, the
   closest available match to the source hiker-overlooking-the-canyon
   composition (bright sky, blue tones complementing the #3e91f7 brand). */
const BG_IMAGE = 'https://picsum.photos/seed/innkeep-badlands/1920/1288'

export function App() {
  useEffect(() => {
    document.title = 'Innkeep — Room Booking Template'
  }, [])

  return (
    <main>
      {/* div.wrapper — min-height 100vh, background photo cover, anchored
          right-center on desktop, centered ≤1199px, hidden ≤767px. The
          photo IS the page background, not a section div of its own. */}
      <section
        id="hero"
        className="relative min-h-screen bg-cover bg-right bg-no-repeat max-[1199px]:bg-center max-[767px]:bg-none"
        style={{ backgroundImage: `url('${BG_IMAGE}')` }}
      >
        {/* div.inner — absolute, top 50%, left 11.07%, translateY(-50%),
            width 511px, padding 7px with a plain light-gray frame (the
            source 66×66 bg-inner.png texture tile is approximated, never
            copied), soft drop shadow 0 0 10px rgba(0,0,0,0.2). ≤991px the
            card is 60% wide; ≤767px full-width static with no shadow/frame. */}
        <div className="absolute top-1/2 left-[11.07%] w-[511px] -translate-y-1/2 bg-neutral-100 p-[7px] shadow-[0_0_10px_0_rgba(0,0,0,0.2)] max-[991px]:w-[60%] max-[767px]:static max-[767px]:w-full max-[767px]:translate-y-0 max-[767px]:bg-transparent max-[767px]:p-0 max-[767px]:shadow-none">
          <BookingForm />
        </div>
      </section>
    </main>
  )
}
