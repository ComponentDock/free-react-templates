import { useEffect, useState } from 'react'
import { Play } from 'lucide-react'
import { justice } from '../data'

/** Two-column justice section: photo with a pulsing gold play circle on the
 *  left; eyebrow, heading, three tab pills with a content panel, and an
 *  animated "40 Years of Experienced" chip on the right. */
export function Justice() {
  const [tab, setTab] = useState(0)
  const [years, setYears] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setYears((current) => Math.min(current + 1, justice.counterValue)),
      30,
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section id="about" aria-label="Justice" className="bg-white pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src={justice.image}
            alt=""
            className="h-[420px] w-full rounded object-cover lg:h-[520px]"
          />
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand shadow-[0_0_70px_-10px_rgba(0,0,0,0.4)]">
            <Play className="h-8 w-8 fill-white text-white" />
          </span>
        </div>

        <div>
          <p className="text-[15px] font-extrabold uppercase tracking-wide text-brand">
            {justice.eyebrow}
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-snug text-ink">{justice.headline}</h2>
          <p className="mt-6 text-base leading-relaxed text-slate-body">{justice.description}</p>

          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Firm values">
            {justice.tabs.map((item, index) => (
              <button
                key={item.label}
                type="button"
                role="tab"
                aria-selected={tab === index}
                aria-controls={`counsely-tab-${index}`}
                id={`counsely-tab-button-${index}`}
                onClick={() => setTab(index)}
                className={
                  tab === index
                    ? 'rounded bg-brand px-5 py-2 text-[15px] font-semibold text-white'
                    : 'rounded border border-black/10 bg-white px-5 py-2 text-[15px] font-semibold text-ink transition-colors hover:border-brand'
                }
              >
                {item.label}
              </button>
            ))}
          </div>

          <div
            id={`counsely-tab-${tab}`}
            role="tabpanel"
            aria-labelledby={`counsely-tab-button-${tab}`}
            className="mt-2 rounded bg-mist p-6 text-sm leading-relaxed text-slate-body"
          >
            {justice.tabs[tab]!.content}
          </div>

          <div className="mt-8 inline-block bg-brand px-5 py-5 text-white">
            <span className="mr-2 text-[28px] font-bold" data-number={justice.counterValue}>
              {years}
            </span>
            <span className="text-[28px] font-bold">{justice.counterLabel}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
