import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { GALLERY_COUNTRIES } from '../data'

const GALLERY_BG = 'https://picsum.photos/id/1015/1920/800'

/* Destination Gallery — dark full-bleed band with a huge country name
   slide and a white controls bar of every country; clicking a control or
   using the arrows changes the featured country (wrap-around). */
export function Gallery() {
  const [active, setActive] = useState(0)
  const goTo = (next: number) =>
    setActive(
      ((next % GALLERY_COUNTRIES.length) + GALLERY_COUNTRIES.length) % GALLERY_COUNTRIES.length,
    )

  return (
    <section
      aria-label="Destination Gallery"
      id="destination-gallery"
      className="relative flex min-h-[560px] flex-col justify-center overflow-hidden bg-cover bg-center lg:min-h-[682px]"
      style={{ backgroundImage: `url(${GALLERY_BG})` }}
    >
      <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 text-center lg:px-8">
        <div className="flex items-center justify-center gap-6">
          <button
            type="button"
            aria-label="Previous country"
            onClick={() => goTo(active - 1)}
            className="flex h-11 w-11 shrink-0 items-center justify-center bg-white/15 text-white transition-colors hover:bg-brand"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="min-w-0 flex-1">
            <p className="mx-auto h-1.5 w-20 bg-brand" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-extrabold text-white lg:text-5xl">
              Destination Gallery
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters.
            </p>
            <h1 className="mt-8 text-6xl font-extrabold uppercase tracking-[6px] text-white drop-shadow-lg lg:text-[110px] lg:tracking-[8px]">
              {GALLERY_COUNTRIES[active]}
            </h1>
          </div>

          <button
            type="button"
            aria-label="Next country"
            onClick={() => goTo(active + 1)}
            className="flex h-11 w-11 shrink-0 items-center justify-center bg-white/15 text-white transition-colors hover:bg-brand"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="relative bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-4 lg:px-8">
          {GALLERY_COUNTRIES.map((country, index) => (
            <button
              key={country}
              type="button"
              aria-pressed={index === active}
              onClick={() => setActive(index)}
              className={cn(
                'text-lg font-extrabold text-ink transition-colors hover:text-brand',
                index === active && 'text-brand',
              )}
            >
              {country}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
