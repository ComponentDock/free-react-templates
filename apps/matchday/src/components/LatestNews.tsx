import { news } from '../data'
import { SectionTitle } from './SectionTitle'

/** Latest news: light #d7d9e5 band with three cards; white date badge over
 *  each photo; hover lifts the card and turns the title brand orange. */
export function LatestNews() {
  return (
    <section id="news" className="bg-mist py-[100px]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle title="Latest news" subtitle="From around the club" />

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.title}
              className="group bg-white transition-shadow hover:shadow-[0_16px_38px_rgba(9,9,9,0.33)]"
            >
              <div className="relative">
                <img src={item.image} alt="" className="h-56 w-full object-cover" />
                <div className="absolute bottom-0 left-0 flex h-[75px] w-[75px] flex-col items-center justify-center bg-white">
                  <span className="text-4xl font-medium leading-none text-brand">{item.day}</span>
                  <span className="mt-1 text-xs uppercase text-ink">{item.month}</span>
                </div>
              </div>
              <div className="px-6 pb-8 pt-5">
                <h3 className="text-2xl font-bold text-ink transition-colors group-hover:text-brand">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed">{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
