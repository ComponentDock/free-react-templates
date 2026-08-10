import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import {
  blogCards,
  blogFilters,
  blogTitle,
  categoriesTitle,
  categoryLinks,
  imgUrl,
  trendingItems,
  trendingTitle,
} from '../data'
import { ReadMore } from './ReadMore'
import { TopMeta } from './TopMeta'

/** Latest-news section on the purple gradient: filter row, article cards, sidebar. */
export function BlogSection() {
  const [activeFilter, setActiveFilter] = useState<string>(blogFilters[0])

  return (
    <section
      id="latest-news"
      className="blog-section bg-[linear-gradient(45deg,#501755_0%,#2d1854_100%)] px-4 py-[100px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-6">
          <h2 className="text-[30px] font-bold italic text-white uppercase">{blogTitle}</h2>
          <ul className="blog-filter flex flex-wrap items-center gap-6">
            {blogFilters.map((filter) => (
              <li key={filter}>
                <button
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    'relative text-[15px] font-bold italic text-white/70 uppercase transition-colors hover:text-white',
                    filter === activeFilter &&
                      'after:absolute after:right-0 after:-bottom-1 after:h-0.5 after:w-5 after:bg-magenta',
                  )}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Article cards */}
          <div className="flex flex-col gap-12 lg:col-span-9">
            {blogCards.map((card) => (
              <article key={card.seed} className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <img
                  src={imgUrl(card.seed, 700, 420)}
                  alt={card.title}
                  loading="lazy"
                  className="h-[280px] w-full object-cover md:h-full"
                />
                <div className="text-box">
                  <TopMeta date={card.date} category={card.category} />
                  <h3 className="mb-6 text-[26px] leading-snug font-medium text-white">
                    {card.title}
                  </h3>
                  <p className="mb-8 text-[15px] font-medium text-muted">{card.excerpt}</p>
                  <ReadMore />
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="flex flex-col gap-10 lg:sticky lg:top-8">
              <div className="widget-item">
                <h4 className="widget-title mb-6 text-[22px] font-bold italic text-white uppercase">
                  {trendingTitle}
                </h4>
                <ul className="flex flex-col gap-6">
                  {trendingItems.map((item) => (
                    <li key={item.seed} className="flex gap-4">
                      <img
                        src={imgUrl(item.seed, 100, 100)}
                        alt={item.title}
                        loading="lazy"
                        className="h-[100px] w-[100px] shrink-0 object-cover"
                      />
                      <div>
                        <div className="mb-2 text-[13px] font-medium text-white/60">
                          {item.date} / in{' '}
                          <a href="#" className="text-magenta">
                            {item.category}
                          </a>
                        </div>
                        <h5 className="text-[16px] leading-snug font-medium text-white">
                          {item.title}
                        </h5>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="widget-item">
                <h4 className="widget-title mb-6 text-[22px] font-bold italic text-white uppercase">
                  {categoriesTitle}
                </h4>
                <ul className="categories-widget flex flex-col">
                  {categoryLinks.map((link) => (
                    <li key={link} className="border-t border-white/10">
                      <a
                        href="#"
                        className="block py-3 text-[15px] font-medium text-white/80 transition-all hover:translate-x-1 hover:text-magenta"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
