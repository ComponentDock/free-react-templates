import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { newsPanes, newsTabs, newsTitle, type TabId } from '../data'
import { PostCard } from './PostCard'
import { ThumbRow } from './ThumbRow'

/** Tabbed "ALL THE NEWS" section: LATEST (default) / POPULAR /
    INTERNATIONAL / LOCAL panes, each with two large cards and six small
    thumb-left rows. Tabs filter the same news data client-side
    (reference: .intro-news-area + .tabs-nav-txt). */
export function NewsTabs() {
  const [activeTab, setActiveTab] = useState<TabId>('latest')
  const pane = newsPanes[activeTab]

  return (
    <section>
      <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4 border-b border-hairline pb-5">
        <h2 className="text-lg font-bold tracking-wide uppercase">{newsTitle}</h2>
        <div role="tablist" aria-label={newsTitle} className="flex gap-6">
          {newsTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={activeTab === tab.id}
              aria-controls={`pane-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'pb-1 text-xs font-bold tracking-widest uppercase transition-colors',
                activeTab === tab.id
                  ? 'border-b-2 border-accent text-accent'
                  : 'border-b-2 border-transparent text-ash hover:text-accent',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div
        role="tabpanel"
        id={`pane-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="grid gap-10 lg:grid-cols-2"
      >
        <div className="space-y-10">
          {pane.large.map((post) => (
            <PostCard key={post.seed} post={post} />
          ))}
        </div>
        <div className="grid gap-8 content-start">
          {pane.small.map((post) => (
            <ThumbRow key={post.seed} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
