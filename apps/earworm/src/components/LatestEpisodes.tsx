import { useState } from 'react'
import { Heart, Share2, Download } from 'lucide-react'

const categories = ['All', 'Entrepreneurship', 'Media', 'Tech', 'Tutorials'] as const

const episodes = [
  {
    id: 1,
    title: "Episode 201 — You Don't Know Squat!",
    date: 'December 9, 2024',
    cat: 'Tutorials',
    seed: 'ep-201',
  },
  {
    id: 2,
    title: 'Episode 202 — I Want A New Judge!',
    date: 'December 9, 2024',
    cat: 'Entrepreneurship',
    seed: 'ep-202',
  },
  {
    id: 3,
    title: 'Episode 203 — The Last Blockbuster',
    date: 'December 9, 2024',
    cat: 'Media',
    seed: 'ep-203',
  },
  {
    id: 4,
    title: 'Episode 204 — The Last Blockbuster',
    date: 'December 9, 2024',
    cat: 'Media',
    seed: 'ep-204',
  },
  {
    id: 5,
    title: 'Episode 205 — See Ya In Three!',
    date: 'December 9, 2024',
    cat: 'Tech',
    seed: 'ep-205',
  },
  {
    id: 6,
    title: "Episode 206 — Let's Get This Party Started!",
    date: 'December 9, 2024',
    cat: 'Tech',
    seed: 'ep-206',
  },
] as const

export function LatestEpisodes() {
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const filtered =
    activeFilter === 'All' ? episodes : episodes.filter((ep) => ep.cat === activeFilter)

  return (
    <section id="podcasts" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-heading">Latest Episodes</h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-brand" />
        </div>

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeFilter === cat
                  ? 'bg-brand text-white'
                  : 'bg-gray-bg text-heading hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Episode grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {filtered.map((ep) => (
            <div
              key={ep.id}
              className="flex flex-col items-center gap-4 rounded-lg border border-border p-4 sm:flex-row sm:items-start sm:text-left"
            >
              <img
                src={`https://picsum.photos/seed/${ep.seed}/160/160`}
                alt={ep.title}
                className="h-32 w-32 rounded object-cover"
              />
              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs text-secondary">{ep.date}</p>
                <h3 className="mt-1 text-lg font-semibold text-heading">{ep.title}</h3>
                <p className="mt-1 text-sm text-secondary">By Admin | {ep.cat} | 00:02:56</p>
                <audio controls className="mt-2 w-full max-w-xs">
                  <source src="" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <div className="mt-2 flex items-center justify-center gap-4 text-xs text-secondary sm:justify-start">
                  <button className="flex items-center gap-1 transition-colors hover:text-brand">
                    <Heart className="h-3.5 w-3.5" /> Like (29)
                  </button>
                  <button className="flex items-center gap-1 transition-colors hover:text-brand">
                    <Share2 className="h-3.5 w-3.5" /> Share (04)
                  </button>
                  <button className="flex items-center gap-1 transition-colors hover:text-brand">
                    <Download className="h-3.5 w-3.5" /> Download (12)
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        <div className="mt-10 text-center">
          <button className="rounded bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark">
            Load More
          </button>
        </div>
      </div>
    </section>
  )
}
