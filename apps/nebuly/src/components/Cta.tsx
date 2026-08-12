import { CTA } from '../data'

/* CTA strip — light band with a heading, subtext, and green button. */

export function Cta() {
  return (
    <section id="cta-section" className="bg-light py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-[32px] font-bold text-navy dark:text-white sm:text-[40px]">
          {CTA.heading}
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-gray-500">{CTA.subtext}</p>
        <a
          href="#contact-section"
          className="mt-10 inline-block rounded-md bg-accent px-6 py-4 text-[16px] font-medium text-white shadow-lg transition-colors hover:bg-accentdark"
        >
          {CTA.button}
        </a>
      </div>
    </section>
  )
}
