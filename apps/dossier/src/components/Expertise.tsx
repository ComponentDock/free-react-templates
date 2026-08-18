import { expertise } from '../data'

/**
 * My Expertise section: a solid green block listing three design disciplines
 * beside descriptive paragraphs (reference: .experience).
 */
export function Expertise() {
  return (
    <section id="portfolio" aria-label="My expertise" className="py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2 className="mb-10 text-center font-heading text-[40px] font-normal leading-[1.3] text-ink">
          My Expertise
        </h2>
        <div className="bg-brand-green px-8 py-12 md:px-[65px] md:py-[60px]">
          <div className="grid gap-10 md:grid-cols-3">
            {expertise.map((item) => (
              <div key={item.title}>
                <h3 className="mb-4 text-lg font-bold text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink/75">{item.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
