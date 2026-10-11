import { useState } from 'react'
import { MessageSquare, Settings, User, type LucideIcon } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Band, SectionHeading } from './Band'

type TabTone = 'secondary' | 'info'

const TONE_ACTIVE: Record<TabTone, string> = {
  secondary: 'bg-flair-secondary shadow-tab',
  info: 'bg-flair-info shadow-tab-info',
}

const TAB_ITEMS: { label: string; icon: LucideIcon }[] = [
  { label: 'Profile', icon: User },
  { label: 'Messages', icon: MessageSquare },
  { label: 'Settings', icon: Settings },
]

const PANE_LABELS = TAB_ITEMS.map((item) => item.label)

const PANE_PARAGRAPHS = [
  'A quiet harbour held the last of the evening light while gulls wheeled above the moored boats and the water turned a deep indigo.',
  'Every instrument in the workshop was still warm, and the scent of sawdust drifted through the open window towards the empty street.',
]

/** One pill-nav card: white surface, tinted active pill, state-driven pane. */
function TabCard({
  title,
  tone,
  withIcons,
}: {
  title: string
  tone: TabTone
  withIcons?: boolean
}) {
  const [active, setActive] = useState(0)

  return (
    <div>
      <SectionHeading className="mb-5">{title}</SectionHeading>
      <div className="rounded-sm bg-white p-6 shadow-tab">
        <div role="tablist" aria-label={`${title} panels`} className="mb-4 flex flex-row">
          {TAB_ITEMS.map((item, index) => (
            <button
              key={item.label}
              type="button"
              role="tab"
              aria-selected={active === index}
              onClick={() => setActive(index)}
              className={cn(
                'flex cursor-pointer items-center gap-2 px-4 py-2 text-[1rem] text-black transition-colors',
                active === index && cn('text-white', TONE_ACTIVE[tone]),
              )}
            >
              {withIcons && <item.icon className="h-4 w-4" aria-hidden="true" />}
              {item.label}
            </button>
          ))}
        </div>
        <div role="tabpanel" aria-label={PANE_LABELS[active]} className="space-y-4">
          {PANE_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

/** Two side-by-side tab cards: a plain gray-toned one and an icon cyan one. */
export function TabsShowcase() {
  return (
    <Band className="bg-band">
      <div className="grid gap-8 md:grid-cols-2">
        <TabCard title="Tab" tone="secondary" />
        <TabCard title="Tab with Icon" tone="info" withIcons />
      </div>
    </Band>
  )
}
