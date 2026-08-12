import { CTA } from '../data'

/* Get-started CTA band recreated from the ColorLib "Cloud83" banner: a
   heading, a short subtext line, and a square brand-green "Start" button. */

export function Cta() {
  return (
    <section id="cta-section" className="bg-white py-24 text-center">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-[36px] font-bold leading-tight text-heading">{CTA.heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-body">{CTA.subtext}</p>
        <a
          href="#contact-section"
          className="mt-10 inline-block min-w-[110px] bg-brand px-6 py-[14px] text-center text-[16px] text-white transition-opacity hover:opacity-90"
        >
          Start
        </a>
      </div>
    </section>
  )
}
