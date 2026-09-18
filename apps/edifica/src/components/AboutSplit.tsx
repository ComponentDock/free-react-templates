import { useState } from 'react'
import { Play } from 'lucide-react'

const tabs = [
  {
    id: 'mission' as const,
    label: 'Our Mission',
    content:
      'We are committed to delivering exceptional construction services that exceed expectations. Our mission is to build spaces that inspire, using sustainable practices and innovative solutions.',
  },
  {
    id: 'vision' as const,
    label: 'Our Vision',
    content:
      'To be the leading construction firm recognized for integrity, quality craftsmanship, and transformative projects that shape communities for generations.',
  },
  {
    id: 'value' as const,
    label: 'Our Value',
    content:
      'We believe in transparency, safety, and collaboration. Every project is built on a foundation of trust, meticulous attention to detail, and respect for our clients.',
  },
]

type TabId = (typeof tabs)[number]['id']

const contentMap: Record<TabId, string> = Object.fromEntries(
  tabs.map((t) => [t.id, t.content]),
) as Record<TabId, string>

export function AboutSplit() {
  const [activeTab, setActiveTab] = useState<TabId>('mission')

  return (
    <section id="about" className="py-16" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/edifica-about/600/400"
              alt="Construction team at work"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <button
              type="button"
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-400 text-white">
                <Play size={24} fill="white" />
              </span>
            </button>
          </div>
          <div className="pl-0 md:pl-8">
            <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-primary-400">
              Welcome to Edifica
            </span>
            <h2 id="about-heading" className="mb-4 text-3xl font-bold text-ink">
              We create and turn into reality
            </h2>
            <p className="mb-6 leading-relaxed text-smoke">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics.
            </p>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="About tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary-400 text-white'
                      : 'bg-gray-100 text-smoke hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div
              role="tabpanel"
              id={`panel-${activeTab}`}
              className="mt-4 rounded-lg bg-gray-50 p-4 text-sm leading-relaxed text-smoke"
            >
              {contentMap[activeTab]}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
