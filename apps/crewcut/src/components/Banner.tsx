import { ArrowRight } from 'lucide-react'

export function Banner() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-r from-brand to-brand-dark"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-32 sm:px-6 lg:grid-cols-2 lg:pb-24 lg:pt-40">
        <div>
          <h1 className="font-display text-4xl font-black uppercase leading-tight text-white md:text-5xl lg:text-6xl">
            HairStyle is a Must try Fashion for all Occasion
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
          </p>
          <a
            href="#service"
            className="mt-9 inline-flex items-center gap-3 rounded-[20px] bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_20px_20px_0_rgba(0,0,0,0.1)] transition-colors hover:bg-black hover:text-white"
          >
            View More Changes
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="hidden justify-end lg:flex">
          <img
            src="https://picsum.photos/seed/crewcut-hero/600/650"
            alt="Barber styling a client's hair"
            className="max-h-[520px] w-auto rounded-t-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
