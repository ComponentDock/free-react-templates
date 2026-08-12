import { ABOUT_HEADING, ABOUT_PARAGRAPH } from '../data'

/* About recreated from the source's about_us_area: a gradient purple block
   on the left with a white heading + paragraph + gradient "Learn More"
   button, and an image on the right. */

export function About() {
  return (
    <section id="about" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-purple-deep via-purple-end to-purple-deep p-10 lg:p-14">
          <h2 className="font-display text-4xl font-bold leading-[45px] text-white">
            {ABOUT_HEADING}
          </h2>
          <p className="mt-6 leading-relaxed text-white/85">{ABOUT_PARAGRAPH}</p>
          <a
            href="#pricing"
            className="mt-8 inline-block bg-gradient-to-r from-brand to-brand-2 bg-[length:200%_auto] px-8 text-xs font-medium uppercase tracking-wider text-purple-ink transition-[background-position] duration-300 hover:bg-right"
            style={{ lineHeight: '50px' }}
          >
            Learn More
          </a>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://picsum.photos/seed/gambit-about/600/450"
            alt="Gambit gaming platform preview"
            className="w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
