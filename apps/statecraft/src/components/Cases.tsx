import { cases } from '../data'

/** "Top Stories" case-study cards: heading row with a "More Cases" link and
 *  three image cards (title + trust blurb). */
export function Cases() {
  return (
    <section id="cases" className="bg-white pb-[100px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-12">
          <h4 className="font-serif text-3xl font-bold text-ink">Top Stories</h4>
          <a href="#contact" className="btn-outline-ink">
            More Cases
          </a>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {cases.map((item) => (
            <article key={item.image}>
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
              <div className="relative mx-auto -mt-12 w-[88%] bg-cream px-6 pb-5 pt-8 shadow-sm">
                <h4 className="font-serif text-2xl font-bold text-ink">{item.title}</h4>
                <p className="mt-3 leading-relaxed text-olive">{item.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
