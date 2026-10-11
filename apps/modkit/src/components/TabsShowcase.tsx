import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { Band } from './Band'

const TABS = ['Profile', 'Messages', 'Settings'] as const

type Tab = (typeof TABS)[number]

const PANES: Record<Tab, string> = {
  Profile:
    'Mist enveloped the ship three hours out from port. A shining crescent hung far beneath the flying vessel.',
  Messages:
    'All their equipment and instruments are alive, humming with the steady rhythm of the voyage.',
  Settings:
    'The sky was cloudless and of a deep dark blue, and the crew charted a course for the far harbour.',
}

function TabCard({ activeClasses }: { activeClasses: string }) {
  const [active, setActive] = useState<Tab>('Profile')

  return (
    <div className="rounded bg-white p-6 shadow-kit-card">
      <div role="tablist" aria-label="Kit tabs" className="flex flex-wrap gap-2">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active === tab}
            onClick={() => setActive(tab)}
            className={cn(
              'cursor-pointer rounded-full px-4 py-1.5 text-[0.9rem] tracking-wide uppercase transition-colors',
              active === tab ? activeClasses : 'text-body hover:bg-band',
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="mt-4 leading-relaxed">
        {PANES[active]}
      </div>
    </div>
  )
}

export function TabsShowcase() {
  return (
    <Band
      title="Tabs"
      lead="The kit's tabbed cards: a horizontal pill navigation switching Lorem ipsum panes, in the indigo and gray accents."
    >
      <div className="grid gap-6 rounded bg-band p-4 md:grid-cols-2">
        <TabCard activeClasses="bg-kit-primary text-white" />
        <TabCard activeClasses="bg-kit-secondary text-white" />
      </div>
    </Band>
  )
}
