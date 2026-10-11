import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { ShowcaseSection, SubHeading } from './section'

const TABS = [
  {
    id: 'home',
    label: 'Home',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    id: 'profile',
    label: 'Profile',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    id: 'messages',
    label: 'Messages',
    text: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
]

const BADGES = [
  { label: 'Default', className: 'bg-gray-100 text-heading' },
  { label: 'Primary', className: 'bg-primary-600 text-white' },
  { label: 'Success', className: 'bg-success text-white' },
  { label: 'Info', className: 'bg-info text-white' },
  { label: 'Warning', className: 'bg-warning text-white' },
  { label: 'Danger', className: 'bg-danger text-white' },
]

export function TabsBadgesShowcase() {
  const [active, setActive] = useState('home')

  return (
    <ShowcaseSection id="navigationTabs" title="Navigation Tabs" className="bg-light">
      <div>
        <div
          role="tablist"
          aria-label="Showcase tabs"
          className="flex flex-wrap gap-1 border-b border-gray-200"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`buildkit-tab-${tab.id}`}
              aria-selected={active === tab.id}
              aria-controls={`buildkit-panel-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={cn(
                'cursor-pointer px-4 py-2 text-sm',
                active === tab.id ? 'border-b-2 border-primary-600 text-primary-600' : 'text-body',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {TABS.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`buildkit-panel-${tab.id}`}
            aria-labelledby={`buildkit-tab-${tab.id}`}
            hidden={active !== tab.id}
            className="pt-6 text-body"
          >
            {tab.text}
          </div>
        ))}
      </div>

      <div>
        <SubHeading>Badges</SubHeading>
        <div className="mt-4 flex flex-wrap gap-3">
          {BADGES.map((badge) => (
            <span
              key={badge.label}
              className={cn(
                'rounded-[0.25rem] border border-black px-1.5 py-1 text-[75%] font-bold',
                badge.className,
              )}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </ShowcaseSection>
  )
}
