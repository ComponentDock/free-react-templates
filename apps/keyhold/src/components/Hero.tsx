import { ChevronDown, Mouse } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

/**
 * Hero — full-height photo backdrop (source `.hero-wrap`, 850px) with a
 * white gradient overlay, a gold gradient panel on the left half, a centered
 * 60px headline, a gold "Search Properties" CTA, and a mouse scroll
 * indicator linking down to the search bar.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[850px] items-center justify-center overflow-hidden"
    >
      <img
        src="https://picsum.photos/seed/keyhold-hero/1920/900"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* White gradient overlay (strong top → transparent → white bottom) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.71),rgba(255,255,255,0)_50%,rgba(255,255,255,1))]"
      />
      {/* Gold gradient panel on the left half */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(to_right,#d4c968,rgba(212,201,104,0.9)_36%,rgba(212,201,104,0.55)_50%,transparent)] opacity-70"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-4xl font-normal leading-[1.1] text-ink sm:text-5xl lg:text-[60px]">
          Find Properties That Make You Money
        </h1>
        <ButtonLink
          href="#search"
          className="mt-10 rounded-[3px] bg-brand px-8 py-4 text-white hover:bg-brand-dark"
        >
          Search Properties
        </ButtonLink>
      </div>

      <a
        href="#search"
        aria-label="Scroll to search"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-ink"
      >
        <span className="flex h-11 w-7 items-start justify-center rounded-full border-2 border-ink pt-1.5">
          <Mouse className="h-4 w-4" aria-hidden="true" />
        </span>
        <ChevronDown className="h-5 w-5 -mt-0.5" aria-hidden="true" />
      </a>
    </section>
  )
}
