import { useState } from 'react'
import { ArticleCard } from './ArticleCard'
import { SectionPanel } from './SectionPanel'
import { latestArticles, morePills, tagPills } from '../data'

const PAGE_SIZE = 8

export function LatestArticles() {
  const [activePill, setActivePill] = useState('all')
  const [moreOpen, setMoreOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const filtered =
    activePill === 'all'
      ? latestArticles
      : latestArticles.filter((article) => article.category === activePill)

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const selectPill = (pill: string) => {
    setActivePill(pill)
    setMoreOpen(false)
    setVisibleCount(PAGE_SIZE)
  }

  return (
    <section>
      <SectionPanel
        title="Latest Articles"
        pills={tagPills}
        activePill={activePill}
        onSelectPill={selectPill}
        morePills={morePills}
        moreOpen={moreOpen}
        onToggleMore={() => setMoreOpen((current) => !current)}
      />
      {visible.length === 0 ? (
        <p className="py-10 text-center font-display text-sm font-medium text-muted">
          No articles found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      )}
      <div className="mt-20 mb-36 flex justify-center">
        <button
          type="button"
          onClick={() => setVisibleCount((current) => current + PAGE_SIZE)}
          disabled={!hasMore || visible.length === 0}
          className="h-9 w-[118px] rounded-[18px] border border-line bg-transparent font-display text-sm font-medium text-black/50 transition-colors hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          Load More
        </button>
      </div>
    </section>
  )
}
