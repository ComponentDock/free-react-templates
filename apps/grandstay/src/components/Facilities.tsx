import { FACILITIES } from '../data'

/** Facilities — heading with alternating image-left/text-right and
    reversed layout. Gold "Visit Center" CTA buttons. */
export function Facilities() {
  return (
    <section id="facilities" className="bg-offwhite py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center font-heading text-3xl font-bold text-navy">Facilities</h2>
        <div className="space-y-16">
          {FACILITIES.map((facility, i) => (
            <div
              key={facility.title}
              className={`flex flex-col items-center gap-8 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full object-cover md:w-1/2"
              />
              <div className="w-full md:w-1/2">
                <h3 className="font-heading text-2xl font-bold text-navy">{facility.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-ink/80">{facility.description}</p>
                <button
                  type="button"
                  className="mt-6 rounded-full border-2 border-brand bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-wider text-navy transition-colors hover:bg-brand hover:text-white"
                >
                  {facility.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
