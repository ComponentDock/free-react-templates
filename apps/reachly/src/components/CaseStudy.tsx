import { caseStudy } from '../data'

const items = [
  { n: 1, id: 180 },
  { n: 2, id: 20 },
  { n: 3, id: 366 },
  { n: 4, id: 513 },
] as const

/* Case Study (source: div.stups-area — FOUR photo cards; each shows a
   "Marketing" tag and a white title overlaid at the bottom-left above a
   40%-height dark gradient). */
export function CaseStudy() {
  return (
    <section id="case-study" className="pt-[100px] pb-[120px]">
      <div className="mx-auto max-w-[1200px] px-[15px]">
        <div className="mb-[60px] text-center">
          <span className="mb-[18px] block text-[13px] font-medium uppercase tracking-[0.1em] text-brand">
            {caseStudy.kicker}
          </span>
          <h2 className="font-heading text-[36px] font-bold text-navy lg:text-[40px]">
            {caseStudy.heading}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ n, id }) => (
            <article key={n} className="group relative overflow-hidden rounded-[5px]">
              <img
                src={`https://picsum.photos/id/${id}/600/700`}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Bottom gradient overlay (source: .single-sutps::before). */}
              <div
                className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-[25px] left-[30px]">
                <p className="text-sm uppercase tracking-[0.1em] text-white/80">{caseStudy.tag}</p>
                <h3 className="mt-1 font-heading text-lg font-bold text-white">
                  {caseStudy.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
