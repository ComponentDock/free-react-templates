import { useState, type ReactElement } from 'react'
import { Award, BarChart3, Briefcase, GraduationCap } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { SectionHeading } from './SectionHeading'
import {
  awardEntries,
  circularSkills,
  educationEntries,
  experienceEntries,
  linearSkills,
  resumeTabs,
  type CircularSkill,
  type LinearSkill,
  type ResumeEntry,
} from '../data'

const tabIcons = {
  Education: GraduationCap,
  Experience: Briefcase,
  Skills: BarChart3,
  Awards: Award,
} as const

type TabName = (typeof resumeTabs)[number]

function ResumeCard({ entry, icon: Icon }: { entry: ResumeEntry; icon: typeof GraduationCap }) {
  return (
    <article className="flex gap-4 rounded-xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-lg bg-brand/10">
        <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
      </span>
      <div>
        <p className="text-sm font-semibold text-brand">{entry.date}</p>
        <h3 className="mt-1 text-xl font-semibold text-heading">{entry.title}</h3>
        <p className="mt-0.5 text-sm font-medium text-muted">{entry.org}</p>
        <p className="mt-2 leading-relaxed text-muted">{entry.blurb}</p>
      </div>
    </article>
  )
}

function CircularMeter({ label, pct, level }: CircularSkill) {
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - pct / 100)
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${label} ${pct}% ${level}`}
        className="relative h-28 w-28"
      >
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            strokeWidth="8"
            className="stroke-surface"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="stroke-brand"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-heading">
          {pct}%
        </span>
      </div>
      <div className="text-center">
        <p className="font-semibold text-heading">{label}</p>
        <p className="text-sm text-muted">{level}</p>
      </div>
    </div>
  )
}

function LinearBar({ label, pct }: LinearSkill) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-heading">{label}</span>
        <span className="text-muted">{pct}%</span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
        className="h-2 w-full overflow-hidden rounded-full bg-surface"
      >
        <div className="h-full rounded-full bg-brand" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

const tabPanels: Record<TabName, () => ReactElement> = {
  Education: () => (
    <div className="grid gap-6 md:grid-cols-2">
      {educationEntries.map((entry) => (
        <ResumeCard key={entry.title} entry={entry} icon={GraduationCap} />
      ))}
    </div>
  ),
  Experience: () => (
    <div className="grid gap-6 md:grid-cols-2">
      {experienceEntries.map((entry) => (
        <ResumeCard key={entry.title} entry={entry} icon={Briefcase} />
      ))}
    </div>
  ),
  Skills: () => (
    <div className="grid gap-10 md:grid-cols-3">
      {circularSkills.map((skill) => (
        <CircularMeter key={skill.label} {...skill} />
      ))}
      <div className="grid gap-6 md:col-span-3">
        {linearSkills.map((skill) => (
          <LinearBar key={skill.label} {...skill} />
        ))}
      </div>
    </div>
  ),
  Awards: () => (
    <div className="grid gap-6 md:grid-cols-2">
      {awardEntries.map((entry) => (
        <ResumeCard key={entry.title} entry={entry} icon={Award} />
      ))}
    </div>
  ),
}

export function Resume() {
  const [activeTab, setActiveTab] = useState<TabName>('Education')
  const Panel = tabPanels[activeTab]

  return (
    <section id="resume-section" aria-label="Resume" className="bg-surface/60 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading title="Resume" />

        <div role="tablist" aria-label="Resume sections" className="mb-10 flex flex-wrap gap-3">
          {resumeTabs.map((tab) => {
            const Icon = tabIcons[tab]
            const selected = tab === activeTab
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                id={`resume-tab-${tab.toLowerCase()}`}
                aria-selected={selected}
                aria-controls="resume-panel"
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors',
                  selected
                    ? 'bg-brand text-white'
                    : 'bg-surface text-muted hover:bg-line hover:text-heading',
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {tab}
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          id="resume-panel"
          aria-labelledby={`resume-tab-${activeTab.toLowerCase()}`}
        >
          <Panel />
        </div>
      </div>
    </section>
  )
}
