import { MessageCircle } from 'lucide-react'

const RECENT_GAMES = [
  {
    badge: 'New',
    badgeColor: 'bg-badge-red',
    title: 'Stellar Odyssey',
    description: 'A breathtaking space exploration RPG with procedurally generated galaxies.',
    comments: 9,
    image: 'https://picsum.photos/seed/fragzone-recent1/500/350',
  },
  {
    badge: 'Racing',
    badgeColor: 'bg-badge-purple',
    title: 'Turbo Drift Legends',
    description: 'Master the art of drifting across scenic mountain passes and city circuits.',
    comments: 4,
    image: 'https://picsum.photos/seed/fragzone-recent2/500/350',
  },
  {
    badge: 'Adventure',
    badgeColor: 'bg-badge-blue',
    title: 'Wilderness Protocol',
    description: 'Survive the untamed frontier in this story-driven survival adventure.',
    comments: 7,
    image: 'https://picsum.photos/seed/fragzone-recent3/500/350',
  },
]

export function RecentGames() {
  return (
    <section className="border-y border-gray-200 bg-surface py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-10 text-center text-3xl font-light text-ink">Recent Games</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {RECENT_GAMES.map((game) => (
            <div key={game.title} className="relative overflow-hidden bg-white">
              <span
                className={`${game.badgeColor} absolute left-4 top-4 z-10 inline-block px-4 py-1.5 text-xs font-semibold uppercase text-white`}
              >
                {game.badge}
              </span>
              <img src={game.image} alt={game.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="mb-2 text-lg font-semibold text-ink">{game.title}</h3>
                <p className="mb-3 text-sm text-gray-500">{game.description}</p>
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <MessageCircle className="h-3 w-3" aria-hidden="true" />
                  {game.comments} Comments
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
