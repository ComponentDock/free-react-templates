import { Play } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { BUTTON_BASE, BUTTON_TEAL } from '../lib/buttonStyles'

const PARAGRAPHS = [
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
] as const

/* Split block: the headline sits in a solid turquoise highlight that bleeds
   past its glyphs and overlaps the photo column, with the supporting copy
   right-aligned beneath it and a turquoise pill to start planning. */
export function EscapeLife() {
  return (
    <section id="about" className="py-[70px]">
      <div className="mx-auto grid max-w-[1140px] items-center gap-[40px] px-4 lg:grid-cols-12">
        <div className="lg:relative lg:top-[20px] lg:col-span-5 lg:-right-[30px] lg:z-20">
          <h2 className="text-[40px] text-white md:text-[50px]">
            <span className="title-highlight">
              We Travel Not To Escape Life But for Life not to Escape Us.
            </span>
          </h2>
          {PARAGRAPHS.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="mt-[20px] text-[14px] leading-[1.8] text-black/70 lg:text-right"
            >
              {paragraph}
            </p>
          ))}
          <p className="mt-[25px] lg:text-right">
            <ButtonLink href="#offers" className={cn(BUTTON_BASE, BUTTON_TEAL, 'text-white')}>
              Get started
            </ButtonLink>
          </p>
        </div>

        <div className="relative lg:col-span-6 lg:col-start-7">
          <img
            alt=""
            aria-hidden="true"
            src="https://picsum.photos/seed/trekvoyage-about/900/600"
            className="w-full object-cover"
          />
          <button
            type="button"
            aria-label="Play video"
            className="absolute top-1/2 left-1/2 flex h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white transition-colors duration-300 hover:bg-brand-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <Play className="h-[20px] w-[20px]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
