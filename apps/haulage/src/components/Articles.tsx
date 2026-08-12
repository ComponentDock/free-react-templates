import { ArrowRight } from 'lucide-react'
import { ARTICLES } from '../data'
import { SectionHeading } from './SectionHeading'

/* Articles — blog entries: 150px thumbnail (4px radius), meta line, title
   link (black, orange on hover), excerpt and a "Read More" link. */
export function Articles() {
  return (
    <section id="blog" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Articles"
          blurb="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        />
        <div className="grid gap-10 md:grid-cols-2">
          {ARTICLES.map((article) => (
            <article key={article.title} className="flex gap-5">
              <img
                src={article.image}
                alt=""
                loading="lazy"
                className="h-[150px] w-[150px] shrink-0 rounded object-cover"
              />
              <div>
                <p className="text-xs uppercase tracking-wide text-faint">{article.meta}</p>
                <h3 className="mt-2">
                  <a
                    href="#blog"
                    className="font-display text-lg font-medium uppercase text-ink transition-colors hover:text-brand"
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="mt-2 text-smoke">{article.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium uppercase tracking-wide text-brand transition-colors hover:text-ink"
                >
                  Read More
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
