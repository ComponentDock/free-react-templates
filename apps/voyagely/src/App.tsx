import { useEffect } from 'react'
import { LayoutGrid } from 'lucide-react'
import { VoyageForm } from './components/VoyageForm'

/* Seeded picsum placeholder for the source Hawaii hero photograph (the
   original 1461×973 background image must not be copied). The prep spec
   pinned seed voyagely-hero for the full-viewport cover background. */
const HERO_IMAGE = 'https://picsum.photos/seed/voyagely-hero/1461/973'

export function App() {
  useEffect(() => {
    document.title = 'Voyagely — Travel Booking Template'
  }, [])

  return (
    <main>
      {/* One-section form demo: the source page is just a full-viewport hero
          photo (body background, cover/center) with the wordmark header and
          the dark booking container overlaid — NO navbar links, NO footer,
          NO other sections. */}
      <section
        id="hero"
        className="flex min-h-screen flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
      >
        {/* .header — flex, space-between, align-items center, padding
            50px 57px: the "VOYAGELY" wordmark (recreating the source
            header-text.png image with styled text) + the 2×2 grid menu icon
            (source dots.png → lucide LayoutGrid; decorative, no menu
            behavior in the source). */}
        <header className="flex items-center justify-between px-[57px] py-[50px]">
          <span className="text-[28px] font-bold uppercase tracking-wide text-white">VOYAGELY</span>
          <LayoutGrid aria-label="Menu" className="h-6 w-6 text-white" />
        </header>

        <VoyageForm />
      </section>
    </main>
  )
}
