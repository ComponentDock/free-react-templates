import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { matchTabs } from '../data'

/** LatestMatches: ARIA pill tabs (Match 1/2/3) over fixture rows. Only the
 *  active panel renders (inactive content stays out of the DOM). */
export function LatestMatches() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = matchTabs[activeIndex]!

  return (
    <div>
      <h3 className="text-lg font-bold uppercase tracking-wide text-black">Latest Matches</h3>
      <div role="tablist" aria-label="Latest matches" className="mt-4 mb-3 flex gap-2">
        {matchTabs.map((tab, index) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={index === activeIndex}
            aria-controls={`tabpanel-${tab.id}`}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-light uppercase tracking-[0.15em] transition-colors',
              index === activeIndex
                ? 'bg-brand text-white'
                : 'bg-black text-white hover:bg-panel-text',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`tabpanel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        className="space-y-3"
      >
        {active.rows.map((row) => (
          <div
            key={`${row.home}-${row.away}`}
            className="flex items-center justify-between rounded border border-gray-200 bg-white px-4 py-3"
          >
            <div className="flex-1">
              <div className="text-sm font-bold uppercase text-black">{row.home}</div>
              <div className="text-xs text-muted">{row.homeLeague}</div>
            </div>
            <div className="px-4 text-lg font-bold text-brand">{row.score}</div>
            <div className="flex-1 text-right">
              <div className="text-sm font-bold uppercase text-black">{row.away}</div>
              <div className="text-xs text-muted">{row.awayLeague}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
