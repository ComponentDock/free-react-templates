import { statsSection } from '../data'

/* White stats CTA with the hosting-stat headline and a blue highlighted
   number (reference: .hami-cta-area). */
export function StatsCta() {
  return (
    <section aria-label="Hosting stats" className="border-b border-borderline bg-white py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold text-ink lg:text-[42px]">
          {statsSection.title} <span className="text-primary">{statsSection.highlight}</span>{' '}
          {statsSection.suffix}
        </h2>
        <a
          href="#plans"
          className="mt-10 inline-flex h-[50px] min-w-[150px] items-center justify-center rounded-full bg-primary px-10 font-semibold text-white transition-colors hover:bg-ink"
        >
          {statsSection.button}
        </a>
      </div>
    </section>
  )
}
