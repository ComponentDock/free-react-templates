import { useState } from 'react'
import { Clock, MessageCircle } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { UPDATE_TABS, UPDATE_NEWS } from '../data'

/* UpdateNews recreated from the source template's update-news-section:
   tabbed content with platform categories (PlayStation, Windows, Mobile,
   Xbox) and article cards. */

export function UpdateNews() {
  const [activeTab, setActiveTab] = useState<string>(UPDATE_TABS[0])

  return (
    <section id="updates" className="bg-card-bg py-20" aria-label="Update news">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="section-title font-heading text-lg font-bold uppercase italic tracking-widest text-text-primary">
          <span className="relative pl-5 before:absolute before:left-0 before:top-1 before:h-4 before:w-2.5 before:-skew-x-[15deg] before:bg-brand before:content-['']">
            Update News
          </span>
        </h2>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="News categories">
          {UPDATE_TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'px-5 py-2 text-xs font-bold uppercase tracking-wider transition-colors',
                activeTab === tab
                  ? 'bg-brand text-text-primary'
                  : 'bg-nav-hover text-text-muted hover:bg-nav-item hover:text-text-primary',
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div role="tabpanel" aria-label={`${activeTab} news`}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {UPDATE_NEWS[activeTab]?.map((article) => (
              <article key={article.title} className="overflow-hidden rounded bg-body-bg">
                <div className="overflow-hidden">
                  <img
                    src={article.image}
                    alt=""
                    className="h-44 w-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold leading-snug text-text-primary">
                    <a href="#" className="transition-colors hover:text-brand">
                      {article.title}
                    </a>
                  </h3>
                  <div className="mt-3 flex items-center gap-3 text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" aria-hidden="true" />
                      {article.comments}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
