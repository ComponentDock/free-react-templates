import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { whatsNewTitle, whatsNewTabs, whatsNewFeatured, whatsNewSide, imgUrl } from '../data'
import { CategoryBadge } from './CategoryBadge'

export function WhatsNew() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      {/* Section heading */}
      <div className="mb-6 border-b-2 border-section-border pb-4">
        <h2 className="text-xl font-bold uppercase tracking-wide text-heading">{whatsNewTitle}</h2>
      </div>

      {/* Tab row */}
      <div className="mb-8 flex flex-wrap gap-6 border-b border-gray-200">
        {whatsNewTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'relative pb-3 text-sm font-medium transition-colors',
              activeTab === tab.id ? 'text-accent' : 'text-body hover:text-heading',
            )}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
            )}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Large featured article */}
        <div className="group relative overflow-hidden rounded-lg lg:col-span-2">
          <img
            src={imgUrl(whatsNewFeatured.seed, 800, 500)}
            alt={whatsNewFeatured.title}
            className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-80 lg:h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <CategoryBadge
              category={whatsNewFeatured.category}
              color={whatsNewFeatured.categoryColor}
              className="mb-2"
            />
            <h3 className="text-lg font-bold leading-snug text-white md:text-xl">
              {whatsNewFeatured.title}
            </h3>
            <p className="mt-1 text-xs text-white/70">{whatsNewFeatured.date}</p>
          </div>
        </div>

        {/* 3 stacked smaller articles */}
        <div className="flex flex-col gap-4">
          {whatsNewSide.map((article) => (
            <a
              key={article.seed}
              href="#top"
              className="group flex gap-3 rounded-lg border border-card-border p-3 transition-shadow hover:shadow-md"
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
