import { useState } from 'react'
import { Eye, MessageCircle } from 'lucide-react'
import { SIDEBAR_SHOWS, SIDEBAR_WEEKLY, SIDEBAR_MONTHLY, SIDEBAR_YEARLY } from '../data'

/* Sidebar recreated from the source template's sidebar: "Top Views"
   heading with filter tabs (Day/Week/Month/Years) and a ranked list
   of anime shows with thumbnail, episode counts, comments, and views. */

const TABS = ['Day', 'Week', 'Month', 'Years'] as const

const TAB_DATA: Record<(typeof TABS)[number], typeof SIDEBAR_SHOWS> = {
  Day: SIDEBAR_SHOWS,
  Week: SIDEBAR_WEEKLY,
  Month: SIDEBAR_MONTHLY,
  Years: SIDEBAR_YEARLY,
}

export function Sidebar() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>('Day')
  const shows = TAB_DATA[activeTab]

  return (
    <aside className="bg-navy-card rounded-lg p-5">
      {/* Heading */}
      <div className="mb-4 flex items-center gap-3">
        <span className="h-6 w-1 rounded-full bg-brand" aria-hidden="true" />
        <h3 className="font-heading text-base font-bold uppercase tracking-wide text-text-white">
          Top Views
        </h3>
      </div>

      {/* Filter tabs */}
      <div className="mb-5 flex gap-1" role="tablist" aria-label="Top views time filter">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
              activeTab === tab
                ? 'bg-brand text-text-white'
                : 'bg-navy-deep text-text-muted hover:text-text-light'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Show list */}
      <ul className="space-y-4">
        {shows.map((show, idx) => (
          <li key={show.title} className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-brand/20 text-xs font-bold text-brand">
              {idx + 1}
            </span>
            <img
              src={show.image}
              alt={show.title}
              loading="lazy"
              className="h-[50px] w-[70px] shrink-0 rounded object-cover"
            />
            <div className="min-w-0 flex-1">
              <h4 className="truncate text-sm font-semibold text-text-white">{show.title}</h4>
              <div className="mt-0.5 flex items-center gap-3 text-[11px] text-text-muted">
                <span>{show.episodes}</span>
                <span className="flex items-center gap-0.5">
                  <MessageCircle className="h-3 w-3" aria-hidden="true" />
                  {show.comments}
                </span>
                <span className="flex items-center gap-0.5">
                  <Eye className="h-3 w-3" aria-hidden="true" />
                  {show.views.toLocaleString()}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  )
}
