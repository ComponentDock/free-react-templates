import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { RECENT_TABS } from '../data'

/* Recent Update recreated from the source's recent_update_area: three
   Rajdhani 600 18px white tab pills (50px tall) where the active + hover
   state is the cyan→mint gradient with a 2px gradient border; each pane is
   an image + white heading + paragraph + "Learn More" button. */

export function RecentUpdate() {
  const [active, setActive] = useState(0)

  return (
    <section id="recent-update" className="bg-purple-deep py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div
          role="tablist"
          aria-label="Recent updates"
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {RECENT_TABS.map((tab, index) => (
            <button
              key={tab.label}
              type="button"
              role="tab"
              id={`recent-tab-${index}`}
              aria-selected={active === index}
              aria-controls={`recent-panel-${index}`}
              onClick={() => setActive(index)}
              className={cn(
                'font-display h-[50px] px-6 text-lg font-semibold text-white transition-all',
                active === index
                  ? 'bg-gradient-to-r from-brand to-brand-2 text-purple-ink shadow-[inset_0_0_0_2px_transparent]'
                  : 'hover:bg-gradient-to-r hover:from-brand hover:to-brand-2 hover:text-purple-ink',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {RECENT_TABS.map((tab, index) =>
          active === index ? (
            <div
              key={tab.label}
              role="tabpanel"
              id={`recent-panel-${index}`}
              aria-labelledby={`recent-tab-${index}`}
              className="grid items-center gap-10 md:grid-cols-2"
            >
              <img
                src={`https://picsum.photos/seed/gambit-recent-${index + 1}/560/420`}
                alt=""
                className="w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <div>
                <h3 className="font-display text-4xl font-bold leading-[45px] text-white">
                  {tab.heading}
                </h3>
                <p className="mt-6 leading-relaxed text-white/85">{tab.paragraph}</p>
                <a
                  href="#pricing"
                  className="mt-8 inline-block bg-gradient-to-r from-brand to-brand-2 bg-[length:200%_auto] px-8 text-xs font-medium uppercase tracking-wider text-purple-ink transition-[background-position] duration-300 hover:bg-right"
                  style={{ lineHeight: '50px' }}
                >
                  Learn More
                </a>
              </div>
            </div>
          ) : null,
        )}
      </div>
    </section>
  )
}
