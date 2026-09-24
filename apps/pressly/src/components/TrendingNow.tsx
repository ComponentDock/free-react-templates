import { cn } from '@free-react-templates/ui'
import { trendingTitle, trendingFeatured, trendingArticles, imgUrl, viewAllLabel } from '../data'
import { CategoryBadge } from './CategoryBadge'

export function TrendingNow() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      {/* Section heading */}
      <div className="mb-8 flex items-center justify-between border-b-2 border-section-border pb-4">
        <h2 className="text-xl font-bold uppercase tracking-wide text-heading">{trendingTitle}</h2>
        <a href="#top" className="text-sm font-medium text-accent hover:underline">
          {viewAllLabel}
        </a>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Large featured card */}
        <div className="group relative overflow-hidden rounded-lg">
          <img
            src={imgUrl(trendingFeatured.seed, 600, 400)}
            alt={trendingFeatured.title}
            className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <CategoryBadge
              category={trendingFeatured.category}
              color={trendingFeatured.categoryColor}
              className="mb-2"
            />
            <h3 className="text-lg font-bold leading-snug text-white">{trendingFeatured.title}</h3>
            <p className="mt-1 text-xs text-white/70">{trendingFeatured.date}</p>
          </div>
        </div>

        {/* 5 smaller cards grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {trendingArticles.map((article) => (
            <a
              key={article.seed}
              href="#top"
              className={cn(
                'group flex gap-3 rounded-lg border border-card-border p-3 transition-shadow hover:shadow-md',
                article.seed === 'pressly-trend-5' ? 'sm:col-span-2 sm:flex-row' : '',
              )}
            >
              <img
                src={imgUrl(article.seed, 200, 150)}
                alt={article.title}
                className="h-20 w-24 shrink-0 rounded object-cover"
              />
              <div className="min-w-0">
                <CategoryBadge
                  category={article.category}
                  color={article.categoryColor}
                  className="mb-1"
                />
                <h4 className="text-sm font-semibold leading-snug text-heading line-clamp-2 group-hover:text-accent">
                  {article.title}
                </h4>
                <p className="mt-1 text-xs text-meta">{article.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
