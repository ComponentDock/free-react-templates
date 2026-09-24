import { Play } from 'lucide-react'
import {
  technologyTitle,
  viewAllLabel,
  techLeft,
  techCenter,
  techRight,
  imgUrl,
  playVideoLabel,
} from '../data'
import { CategoryBadge } from './CategoryBadge'

function SmallArticle({ article }: { article: (typeof techLeft)[number] }) {
  return (
    <a
      href="#top"
      className="group flex gap-3 rounded-lg border border-card-border p-3 transition-shadow hover:shadow-md"
    >
      <img
        src={imgUrl(article.seed, 200, 150)}
        alt={article.title}
        className="h-20 w-24 shrink-0 rounded object-cover"
      />
      <div className="min-w-0">
        <CategoryBadge category={article.category} color={article.categoryColor} className="mb-1" />
        <h4 className="text-sm font-semibold leading-snug text-heading line-clamp-2 group-hover:text-accent">
          {article.title}
        </h4>
        <p className="mt-1 text-xs text-meta">{article.date}</p>
      </div>
    </a>
  )
}

export function Technology() {
  return (
    <section className="bg-light-bg py-12">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section heading */}
        <div className="mb-8 flex items-center justify-between border-b-2 border-section-border pb-4">
          <h2 className="text-xl font-bold uppercase tracking-wide text-heading">
            {technologyTitle}
          </h2>
          <a href="#top" className="text-sm font-medium text-accent hover:underline">
            {viewAllLabel}
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left column: 2 small articles */}
          <div className="flex flex-col gap-4">
            {techLeft.map((article) => (
              <SmallArticle key={article.seed} article={article} />
            ))}
          </div>

          {/* Center: large slider with video play icon */}
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src={imgUrl(techCenter.seed, 600, 400)}
              alt={techCenter.title}
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <button
              type="button"
              aria-label={playVideoLabel}
              className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent/90 text-white shadow-lg transition-transform hover:scale-110"
            >
              <Play className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="absolute bottom-4 left-4 right-4">
              <CategoryBadge
                category={techCenter.category}
                color={techCenter.categoryColor}
                className="mb-2"
              />
              <h3 className="text-lg font-bold leading-snug text-white">{techCenter.title}</h3>
              <p className="mt-1 text-xs text-white/70">{techCenter.date}</p>
            </div>
          </div>

          {/* Right column: 2 small articles */}
          <div className="flex flex-col gap-4">
            {techRight.map((article) => (
              <SmallArticle key={article.seed} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
