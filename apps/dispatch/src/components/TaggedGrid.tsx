import { useState } from 'react'
import { ArticleCard } from './ArticleCard'
import { SectionPanel } from './SectionPanel'
import { morePills, tagPills, type Article } from '../data'

interface TaggedGridProps {
  title: string
  articles: Article[]
}

export function TaggedGrid({ title, articles }: TaggedGridProps) {
  const [activePill, setActivePill] = useState('all')
  const [moreOpen, setMoreOpen] = useState(false)

  const filtered =
    activePill === 'all' ? articles : articles.filter((article) => article.category === activePill)

  const selectPill = (pill: string) => {
    setActivePill(pill)
    setMoreOpen(false)
  }

  return (
    <section className="mb-16">
      <SectionPanel
        title={title}
        pills={tagPills}
        activePill={activePill}
        onSelectPill={selectPill}
        morePills={morePills}
        moreOpen={moreOpen}
        onToggleMore={() => setMoreOpen((current) => !current)}
      />
      {filtered.length === 0 ? (
        <p className="py-10 text-center font-display text-sm font-medium text-muted">
          No articles found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <div
              key={article.title}
              className={article.size === 'large' ? 'lg:col-span-2' : undefined}
            >
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
