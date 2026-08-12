import { Download } from 'lucide-react'
import { ABOUT } from '../data'

/* About section recreated from the ColorLib "Clark" about: portrait on the
   left, "About Me" heading + lorem on the right, a personal-info list
   (white labels / light values), the amber "120 Project complete" counter
   and an amber pill "Download CV" button. */

export function About() {
  return (
    <section id="about-section" className="bg-black py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <img
          src={ABOUT.image}
          alt="Portrait of Alex Maverick"
          loading="lazy"
          className="h-[420px] w-full max-w-[420px] object-cover lg:h-[520px]"
        />
        <div>
          <p className="mb-2 text-[13px] font-medium uppercase tracking-[3px] text-brand">
            {ABOUT.subheading}
          </p>
          <h2 className="text-[50px] font-bold text-white">{ABOUT.heading}</h2>
          <p className="mt-4 max-w-lg text-[16px] text-muted">{ABOUT.blurb}</p>

          <ul className="mt-8 space-y-2">
            {ABOUT.info.map((item) => (
              <li key={item.label} className="flex gap-4">
                <span className="w-[130px] shrink-0 font-semibold text-white">{item.label}:</span>
                <span className="text-faint">{item.value}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-3xl font-semibold text-brand">{ABOUT.counterValue}</span>
            <span className="text-xl font-medium text-white">{ABOUT.counterLabel}</span>
          </div>

          <a
            href="#contact-section"
            className="mt-8 inline-flex items-center gap-2 rounded-[40px] bg-brand px-6 py-3 text-[16px] font-semibold text-black transition-colors hover:bg-brand-dark"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
