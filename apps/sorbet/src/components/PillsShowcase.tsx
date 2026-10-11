import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { ShowcaseSection } from './section'

const TEXT =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'

const PILLS = [
  { id: 'home', label: 'Home' },
  { id: 'profile', label: 'Profile' },
  { id: 'messages', label: 'Messages' },
]

/** Pill navigation with three switching panels, over a light band. */
export function PillsShowcase() {
  const [active, setActive] = useState('home')

  return (
    <ShowcaseSection id="pills" title="Navigation Pills" className="bg-light py-24">
      <div>
        <div role="tablist" aria-label="Navigation pills" className="flex flex-wrap gap-2">
          {PILLS.map((pill) => (
            <button
              key={pill.id}
              type="button"
              role="tab"
              id={`sorbet-pill-${pill.id}`}
              aria-selected={active === pill.id}
              aria-controls={`sorbet-panel-${pill.id}`}
              onClick={() => setActive(pill.id)}
              className={cn(
                'cursor-pointer rounded-full border-2 px-4 py-2 text-sm transition-colors',
                active === pill.id
                  ? 'border-primary-500 bg-primary-500 text-heading'
                  : 'border-transparent text-body hover:text-primary-500',
              )}
            >
              {pill.label}
            </button>
          ))}
        </div>

        {PILLS.map((pill) => (
          <div
            key={pill.id}
            role="tabpanel"
            id={`sorbet-panel-${pill.id}`}
            aria-labelledby={`sorbet-pill-${pill.id}`}
            hidden={active !== pill.id}
            className="pt-6"
          >
            {TEXT}
          </div>
        ))}
      </div>
    </ShowcaseSection>
  )
}
