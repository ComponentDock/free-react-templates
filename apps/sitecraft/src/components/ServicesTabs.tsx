import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const tabs = [
  {
    id: 'interior',
    label: 'Interior Design',
    image: 'https://picsum.photos/seed/sitecraft-interior/600/400',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    bullets: [
      'It is a paradisematic country in which',
      'Even the all-powerful Pointing has no control',
      'When she reached the first hills of the Italic Mountains',
      'Alphabet Village and the subline of her own road',
    ],
  },
  {
    id: 'architecture',
    label: 'Architecture',
    image: 'https://picsum.photos/seed/sitecraft-arch/600/400',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Far far away, behind the word mountains.',
    bullets: [
      'It is a paradisematic country in which',
      'Even the all-powerful Pointing has no control',
      'When she reached the first hills of the Italic Mountains',
      'Alphabet Village and the subline of her own road',
    ],
  },
  {
    id: 'modeling',
    label: 'Building Modeling',
    image: 'https://picsum.photos/seed/sitecraft-model/600/400',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    bullets: [
      'It is a paradisematic country in which',
      'Even the all-powerful Pointing has no control',
      'When she reached the first hills of the Italic Mountains',
      'Alphabet Village and the subline of her own road',
    ],
  },
] as const

export function ServicesTabs() {
  const [active, setActive] = useState<string>(tabs[0].id)

  const activeTab = tabs.find((t) => t.id === active)!

  return (
    <section id="services" aria-label="What We Offer" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink">What We Offer</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="mb-8 flex flex-wrap justify-center gap-2" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={cn(
                'rounded px-5 py-2.5 text-sm font-medium transition-colors',
                active === tab.id
                  ? 'bg-brand text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active panel */}
        <div
          id={`panel-${activeTab.id}`}
          role="tabpanel"
          aria-labelledby={activeTab.id}
          className="grid items-center gap-8 md:grid-cols-2"
        >
          <img
            src={activeTab.image}
            alt={`${activeTab.label} service`}
            className="h-auto w-full rounded-lg object-cover"
            loading="lazy"
          />
          <div>
            <p className="mb-4 leading-relaxed text-gray-600">{activeTab.description}</p>
            <ul className="space-y-2">
              {activeTab.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-gray-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
