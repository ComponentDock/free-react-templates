import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface TimelineEntry {
  period: string
  company: string
  role: string
  location: string
}

const experiences: TimelineEntry[] = [
  {
    period: 'March 2017 to present',
    company: 'TechCorp',
    role: 'Senior Web Developer',
    location: 'Santa Monica, Los Angeles',
  },
  {
    period: 'Jan 2015 to Feb 2017',
    company: 'DesignStudio',
    role: 'Frontend Developer',
    location: 'San Francisco, CA',
  },
  {
    period: 'Jun 2013 to Dec 2014',
    company: 'CreativeAgency',
    role: 'UI/UX Designer',
    location: 'New York, NY',
  },
]

const education: TimelineEntry[] = [
  {
    period: 'Sep 2009 to Jun 2013',
    company: 'State University',
    role: 'B.S. Computer Science',
    location: 'Los Angeles, CA',
  },
  {
    period: 'Sep 2013 to Jun 2015',
    company: 'Tech Institute',
    role: 'M.S. Human-Computer Interaction',
    location: 'San Francisco, CA',
  },
]

const tabs = [
  { id: 'experience', label: 'My Experiences', entries: experiences },
  { id: 'education', label: 'My Education', entries: education },
] as const

function TimelineList({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ul className="space-y-6">
      {entries.map((entry) => (
        <li key={entry.period + entry.company} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-brand mt-1.5" />
            <div className="w-px flex-1 bg-line" />
          </div>
          <div className="pb-6">
            <p className="text-sm text-text-light mb-1">{entry.period}</p>
            <h4 className="text-lg font-bold font-[var(--font-heebo)]">{entry.company}</h4>
            <p className="text-text-secondary">
              {entry.role}
              <br />
              {entry.location}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export function ExperienceTabs() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id)
  const activeTabData = tabs.find((t) => t.id === activeTab)!

  return (
    <section className="py-20 bg-bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg p-8 shadow-sm">
          {/* Tab buttons */}
          <div className="flex gap-4 mb-8 border-b border-line">
            {tabs.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={cn(
                  'pb-3 px-4 text-sm font-medium transition-colors border-b-2',
                  activeTab === id
                    ? 'text-brand border-brand'
                    : 'text-text-secondary border-transparent hover:text-brand',
                )}
                role="tab"
                aria-selected={activeTab === id}
                aria-controls={`panel-${id}`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div role="tabpanel" id={`panel-${activeTab}`}>
            <TimelineList entries={activeTabData.entries} />
          </div>
        </div>
      </div>
    </section>
  )
}
