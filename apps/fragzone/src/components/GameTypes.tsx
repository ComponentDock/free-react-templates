import { MessageCircle } from 'lucide-react'

const GAME_TYPES = [
  {
    category: 'New Release',
    badgeColor: 'bg-badge-red',
    title: 'Cyber Nexus: Awakening',
    description: 'An open-world cyberpunk adventure with branching storylines.',
    comments: 12,
    image: 'https://picsum.photos/seed/fragzone-game1/400/500',
  },
  {
    category: 'Strategy',
    badgeColor: 'bg-badge-green',
    title: 'Empire Forge: Conquest',
    description: 'Build your empire and conquer rival kingdoms in real-time.',
    comments: 8,
    image: 'https://picsum.photos/seed/fragzone-game2/400/500',
  },
  {
    category: 'RPG',
    badgeColor: 'bg-badge-blue',
    title: 'Shadow Realms Online',
    description: 'Explore a vast fantasy world with deep character progression.',
    comments: 15,
    image: 'https://picsum.photos/seed/fragzone-game3/400/500',
  },
  {
    category: 'Racing',
    badgeColor: 'bg-badge-purple',
    title: 'Velocity Rush GT',
    description: 'High-octane racing with customizable vehicles and tracks.',
    comments: 6,
    image: 'https://picsum.photos/seed/fragzone-game4/400/500',
  },
]

export function GameTypes() {
  return (
    <section id="games" className="py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-4">
        {GAME_TYPES.map((game) => (
          <div
            key={game.category}
            className="relative flex min-h-[380px] flex-col justify-end bg-cover bg-center p-5"
            style={{ backgroundImage: `url('${game.image}')` }}
          >
            <div className="absolute inset-0 bg-black/70" />
            <span
              className={`${game.badgeColor} absolute left-4 top-4 z-10 inline-block px-4 py-1.5 text-xs font-semibold uppercase text-white`}
            >
              {game.category}
            </span>
            <div className="relative z-10">
              <h3 className="mb-1 text-lg font-semibold text-white">{game.title}</h3>
              <p className="mb-2 text-sm text-gray-300">{game.description}</p>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <MessageCircle className="h-3 w-3" aria-hidden="true" />
                {game.comments} Comments
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
