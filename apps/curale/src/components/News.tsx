import { ArrowRight } from 'lucide-react'
import { news } from '../data'

/** Three news cards: image with a #244cfd date badge overlapping the
 *  bottom-left (up 25px, left 30px), an h3 title link, a paragraph and a
 *  "read more" link whose arrow slides right on hover. */
export function News() {
  return (
    <section id="news" className="bg-white py-[130px]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-20 text-center">
          <h2 className="text-[30px] font-bold text-ink md:text-[36px]">Recent medical news</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-body">
            Green above he cattle god saw day multiply under fill in the cattle fowl a all, living,
            tree word link available in the service for subdue fruit.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {news.map((article) => (
            <article key={article.title}>
              <div className="relative">
                <img
                  src={article.image}
                  alt=""
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover"
                />
                <span className="absolute left-[30px] top-[-25px] inline-block bg-brand px-8 py-3 text-white">
                  {article.date}
                </span>
              </div>
              <h3 className="mt-6 text-[18px] font-bold text-ink transition-colors hover:text-brand">
                <a href="#">{article.title}</a>
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body">{article.copy}</p>
              <a
                href="#"
                className="group mt-5 inline-block text-[12px] font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand"
              >
                read more
                <ArrowRight
                  className="relative right-[-17px] top-[1px] ml-1 inline-block h-4 w-4 transition-all duration-200 group-hover:right-[-20px]"
                  aria-hidden="true"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
