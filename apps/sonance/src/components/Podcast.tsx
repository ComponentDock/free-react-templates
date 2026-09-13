import { Play } from 'lucide-react'
import { useState } from 'react'

const CATEGORIES = ['All', 'Entrepreneurship', 'Media', 'Tech', 'Tutorials'] as const

const EPISODES = [
  {
    title: 'Episode 01: 6 Powerful Tips To Creating Testimonials That Sell Your Product',
    date: '7 Jun 2019',
    author: 'John Smith',
    tags: 'Radio, Music, Camp',
    imageSeed: 'sonance-live-1',
  },
  {
    title: 'Episode 02: How To Build A Personal Brand Online',
    date: '14 Jun 2019',
    author: 'John Smith',
    tags: 'Entrepreneurship, Media',
    imageSeed: 'sonance-live-2',
  },
  {
    title: 'Episode 03: Mastering Social Media Marketing',
    date: '21 Jun 2019',
    author: 'Jane Doe',
    tags: 'Tech, Tutorials',
    imageSeed: 'sonance-live-3',
  },
]

export function Podcast() {
  const [activeTab, setActiveTab] = useState<string>('All')

  const filtered =
    activeTab === 'All'
      ? EPISODES
      : EPISODES.filter(
          (ep) =>
            ep.tags.toLowerCase().includes(activeTab.toLowerCase()) ||
            ep.tags.split(', ').some((t) => t.toLowerCase() === activeTab.toLowerCase()),
        )

  return (
    <section id="episodes" aria-label="Live and upcoming episodes" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-extrabold text-ink">Live &amp; Upcoming</h2>

        <div className="mt-6 flex flex-wrap gap-3" role="tablist" aria-label="Filter by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeTab === cat}
              onClick={() => setActiveTab(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                activeTab === cat
                  ? 'bg-primary-400 text-white'
                  : 'bg-mist text-smoke hover:bg-primary-50 hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-8">
          {filtered.map((ep) => (
            <article
              key={ep.imageSeed}
              className="flex flex-col gap-4 rounded-xl bg-mist p-4 sm:flex-row sm:items-center sm:gap-6"
            >
              <img
                src={`https://picsum.photos/seed/${ep.imageSeed}/120/120`}
                alt={`${ep.title} artwork`}
                className="h-24 w-24 shrink-0 rounded-lg object-cover"
                loading="lazy"
              />

              <div className="min-w-0 flex-1">
                <p className="text-xs text-smoke">
                  {ep.date} by {ep.author} · {ep.tags}
                </p>
                <h3 className="mt-1 text-base font-bold text-ink">{ep.title}</h3>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label={`Play ${ep.title}`}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-400 text-white transition-colors hover:bg-primary-500"
                >
                  <Play size={16} fill="currentColor" />
                </button>
                <div className="hidden h-1 w-20 rounded-full bg-gray-200 sm:block">
                  <div className="h-full w-0 rounded-full bg-primary-400" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
