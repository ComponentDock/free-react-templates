import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { ShowcaseSection, SubHeading } from './section'

const PILLS = ['Home', 'Profile', 'Messages'] as const
const LOREM =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

const TAB_PANES: Record<(typeof PILLS)[number], string> = {
  Home: 'Here is information about home.',
  Profile: 'Here is your profile.',
  Messages: 'Here are your messages.',
}

/** The kit's pills and tabs: the same three labels in both treatments. */
export function PillsShowcase() {
  const [pill, setPill] = useState<(typeof PILLS)[number]>('Home')
  const [tab, setTab] = useState<(typeof PILLS)[number]>('Home')

  return (
    <ShowcaseSection id="navigationTabs">
      <div>
        <SubHeading>Navigation Pills</SubHeading>
        <div role="tablist" aria-label="Navigation pills" className="flex flex-wrap gap-2">
          {PILLS.map((label) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={pill === label}
              onClick={() => setPill(label)}
              className={cn(
                'cursor-pointer rounded border border-line px-4 py-2',
                pill === label ? 'border-primary bg-primary text-white' : 'hover:bg-light',
              )}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="mt-4">{LOREM}</p>
      </div>

      <div>
        <SubHeading>Navigation Tabs</SubHeading>
        <div role="tablist" aria-label="Navigation tabs" className="flex flex-wrap gap-2">
          {PILLS.map((label) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={tab === label}
              onClick={() => setTab(label)}
              className={cn(
                'cursor-pointer rounded-t border border-b-0 border-line px-4 py-2',
                tab === label ? 'bg-white text-primary' : 'bg-light',
              )}
            >
              {label}
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          aria-label={`${tab} pane`}
          className="rounded-b border border-line p-4"
        >
          {TAB_PANES[tab]}
        </div>
      </div>
    </ShowcaseSection>
  )
}
