import { Play } from 'lucide-react'

const EPISODES = [
  {
    id: 1,
    title: 'The Future of AI in Creative Industries',
    date: 'Sep 16, 2024',
    duration: '45 min',
    image: 'https://picsum.photos/seed/ep1/400/250',
  },
  {
    id: 2,
    title: 'Building Sustainable Tech Companies',
    date: 'Sep 9, 2024',
    duration: '38 min',
    image: 'https://picsum.photos/seed/ep2/400/250',
  },
  {
    id: 3,
    title: 'Remote Work Revolution: Lessons Learned',
    date: 'Sep 2, 2024',
    duration: '52 min',
    image: 'https://picsum.photos/seed/ep3/400/250',
  },
  {
    id: 4,
    title: 'From Startup to Scaleup: Growth Strategies',
    date: 'Aug 26, 2024',
    duration: '41 min',
    image: 'https://picsum.photos/seed/ep4/400/250',
  },
  {
    id: 5,
    title: 'The Art of Product Design',
    date: 'Aug 19, 2024',
    duration: '35 min',
    image: 'https://picsum.photos/seed/ep5/400/250',
  },
  {
    id: 6,
    title: 'Cybersecurity in the Modern Era',
    date: 'Aug 12, 2024',
    duration: '48 min',
    image: 'https://picsum.photos/seed/ep6/400/250',
  },
]

export function Episodes() {
  return (
    <section className="bg-dark-bg py-16" aria-label="Recent episodes">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-2 text-center text-3xl font-bold text-white">Latest Episodes</h2>
        <p className="mb-12 text-center text-gray-400">Catch up on our most recent conversations</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EPISODES.map((ep) => (
            <article
              key={ep.id}
              className="overflow-hidden rounded-lg bg-surface transition-colors hover:bg-surface/80"
            >
              <img
                src={ep.image}
                alt={ep.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <div className="mb-2 flex items-center gap-3 text-xs text-gray-500">
                  <span>{ep.date}</span>
                  <span className="h-1 w-1 rounded-full bg-gray-600" />
                  <span>{ep.duration}</span>
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">{ep.title}</h3>
                <button
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
                  aria-label={`Play ${ep.title}`}
                >
                  <Play size={14} fill="currentColor" />
                  Play
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
