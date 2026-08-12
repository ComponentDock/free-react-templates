import { HIRE_ME } from '../data'

/* Hire-me band recreated from the ColorLib "Clark" hire-me: a full-width
   amber band over a photo background with the white 40px heading "I'm
   Available for freelancing" and an amber pill button. On desktop the band
   overlaps the preceding counter section's bottom edge (~70px). */

export function HireMe() {
  return (
    <section className="relative z-10 -mt-[70px] overflow-hidden bg-brand lg:mt-[-70px]">
      <img
        src={HIRE_ME.image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-brand/80" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-[40px] font-black leading-tight text-white">{HIRE_ME.heading}</h2>
        <p className="mx-auto mt-4 max-w-lg text-[16px] text-white/90">{HIRE_ME.blurb}</p>
        <a
          href="#contact-section"
          className="mt-8 inline-flex items-center rounded-[40px] bg-black px-6 py-3 text-[16px] font-semibold text-white transition-colors hover:bg-[#191919]"
        >
          Hire me
        </a>
      </div>
    </section>
  )
}
