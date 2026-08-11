import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { tabLabels, type PostPane } from '../data'
import { FeaturedPost } from './FeaturedPost'
import { SmallPostRow } from './SmallPostRow'
import { TrendingSlider } from './TrendingSlider'

interface CategoryTabsProps {
  title: string
  panes: PostPane[]
  variant: 'featured' | 'trending'
  className?: string
}

/* Tabbed category section, reused for both "Don't Miss" (featured pane:
   featured card + 4 stacked rows) and "What's Trending" (2 columns of 4 +
   sliding row). Nine tabs per section (same labels as the reference), active
   tab black with a 2px #0000ff underline (shadow 0 2px 10px rgba(0,0,0,.15))
   on a 2px #f1f1f1 tab bar. */
export function CategoryTabs({ title, panes, variant, className }: CategoryTabsProps) {
  const [activeTab, setActiveTab] = useState(0)
  const activePane = panes[activeTab]!

  return (
    <section aria-label={title} className={className}>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b-2 border-divider py-[10px]">
        <p className="mr-auto font-heading text-lg font-bold text-ink">{title}</p>
        <div role="tablist" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {tabLabels.map((label, index) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={index === activeTab}
              onClick={() => setActiveTab(index)}
              className={cn(
                'relative pb-2 font-heading text-sm font-medium transition-colors',
                index === activeTab ? 'text-ink' : 'text-text-muted hover:text-ink',
              )}
            >
              {label}
              {index === activeTab && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-[-17px] left-[15px] h-[2px] w-[calc(100%-30px)] bg-brand shadow-[0_2px_10px_rgba(0,0,0,0.15)]"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div role="tabpanel" className="mt-8">
        {variant === 'featured' ? (
          <div className="grid gap-8 md:grid-cols-2">
            <FeaturedPost post={activePane[0]!} />
            <div className="space-y-5">
              {activePane.slice(1).map((post) => (
                <SmallPostRow key={post.title} post={post} />
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-5">
                {activePane.slice(0, 4).map((post) => (
                  <SmallPostRow key={post.title} post={post} />
                ))}
              </div>
              <div className="space-y-5">
                {activePane.slice(4, 8).map((post) => (
                  <SmallPostRow key={post.title} post={post} />
                ))}
              </div>
            </div>
            <TrendingSlider posts={activePane} />
          </>
        )}
      </div>
    </section>
  )
}
