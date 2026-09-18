import { useState } from 'react'
import {
  Heart,
  Briefcase,
  Shield,
  Gavel,
  Flame,
  DollarSign,
  Pill,
  ShieldAlert,
  Home,
} from 'lucide-react'
import { PRACTICE_AREAS } from '../data'
import { cn } from '@free-react-templates/ui'
import { ButtonLink } from '@free-react-templates/ui'

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  heart: Heart,
  briefcase: Briefcase,
  shield: Shield,
  gavel: Gavel,
  flame: Flame,
  'dollar-sign': DollarSign,
  pill: Pill,
  'shield-alert': ShieldAlert,
  home: Home,
}

/* PracticeAreas — vertical tabs layout with 10 law areas. Left side
   shows tab buttons, right side shows the active area's content. */
export function PracticeAreas() {
  const [activeTab, setActiveTab] = useState(PRACTICE_AREAS[0]!.id)
  const active = PRACTICE_AREAS.find((a) => a.id === activeTab)!
  const ActiveIcon = ICONS[active.icon]!

  return (
    <section id="practice-section" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Practice Areas
          </span>
          <h2 className="mt-2 text-3xl font-bold text-ink">Practice Areas</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-[280px_1fr]">
          <div className="flex flex-col gap-1" role="tablist" aria-orientation="vertical">
            {PRACTICE_AREAS.map((area) => {
              const Icon = ICONS[area.icon]!
              return (
                <button
                  key={area.id}
                  type="button"
                  role="tab"
                  aria-selected={area.id === activeTab}
                  aria-controls={`panel-${area.id}`}
                  onClick={() => setActiveTab(area.id)}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors',
                    area.id === activeTab
                      ? 'bg-brand text-white'
                      : 'text-muted hover:bg-surface hover:text-ink',
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {area.label}
                </button>
              )
            })}
          </div>
          <div
            id={`panel-${active.id}`}
            role="tabpanel"
            className="flex items-center rounded-lg bg-surface p-8 md:p-12"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                <ActiveIcon className="h-8 w-8 text-brand" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-ink">{active.label}</h3>
                <p className="mt-4 leading-relaxed text-muted">{active.description}</p>
                <ButtonLink
                  href="#contact-section"
                  className="mt-6 inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
                >
                  Learn More
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
