import { useEffect, useState } from 'react'
import { Award, FileText, Smile } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { about } from '../data'

const counterIcons = {
  smile: Smile,
  report: FileText,
  award: Award,
} as const

/** Animated counter number (source: .block-18 number counts up on view).
 *  jsdom-safe: a 30ms interval steps from 0 to the target in ~1.5s. */
function CounterValue({ target }: { target: number }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let current = 0
    const step = Math.max(1, Math.round(target / 50))
    const id = setInterval(() => {
      current += step
      if (current >= target) {
        setValue(target)
        clearInterval(id)
      } else {
        setValue(current)
      }
    }, 30)
    return () => clearInterval(id)
  }, [target])

  return <>{value}</>
}

/** About section (source: .ftco-about): left column with subheading,
 *  heading, lead paragraph and Mission / Vision / Value tabs; right photo;
 *  below, the three animated counters 1387 Happy Clients · 310 Success
 *  Reports · 35 Experienced. */
export function About() {
  const [activeTab, setActiveTab] = useState(0)
  const tab = about.tabs[activeTab]!

  return (
    <section id="about" aria-label="About" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[2px] text-brand">
              {about.subheading}
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink lg:text-4xl">
              {about.heading}
            </h2>
            <p className="mt-5 leading-relaxed text-muted">{about.lead}</p>

            <div role="tablist" aria-label="About tabs" className="mt-8 flex gap-2">
              {about.tabs.map((item, i) => (
                <button
                  key={item.label}
                  type="button"
                  role="tab"
                  id={`tab-${i}`}
                  aria-selected={i === activeTab}
                  aria-controls={`tabpanel-${i}`}
                  onClick={() => setActiveTab(i)}
                  className={cn(
                    'rounded-full px-5 py-2 text-sm font-medium transition-colors',
                    i === activeTab
                      ? 'bg-brand text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div
              role="tabpanel"
              id={`tabpanel-${activeTab}`}
              aria-labelledby={`tab-${activeTab}`}
              className="mt-5 leading-relaxed text-ink"
            >
              {tab.text}
            </div>
          </div>

          <div>
            <img
              src={about.image}
              alt="Parley consulting team"
              className="h-full max-h-[520px] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {about.counters.map((counter) => {
            const Icon = counterIcons[counter.icon]
            return (
              <div key={counter.label} className="text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <dd className="mt-4 text-5xl font-normal text-brand">
                  <CounterValue target={counter.value} />
                </dd>
                <dt className="mt-2 text-sm text-muted">{counter.label}</dt>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
