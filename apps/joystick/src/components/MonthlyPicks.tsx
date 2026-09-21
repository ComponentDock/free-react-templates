import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

type Tab = 'popular' | 'latest' | 'editor'

const tabs: { id: Tab; label: string }[] = [
  { id: 'popular', label: 'Popular' },
  { id: 'latest', label: 'Latest' },
  { id: 'editor', label: "Editor's Pick" },
]

const gamesByTab: Record<Tab, { title: string; rating: string; genre: string; image: string }[]> = {
  popular: [
    {
      title: 'Grand Theft Auto V',
      rating: '9.1/10',
      genre: 'Action',
      image: 'https://picsum.photos/seed/joystick-pop1/300/200',
    },
    {
      title: 'Doom',
      rating: '9.1/10',
      genre: 'Adventure',
      image: 'https://picsum.photos/seed/joystick-pop2/300/200',
    },
    {
      title: 'God of War',
      rating: '9.1/10',
      genre: 'Action',
      image: 'https://picsum.photos/seed/joystick-pop3/300/200',
    },
    {
      title: 'Bloodborne',
      rating: '9.1/10',
      genre: 'Adventure',
      image: 'https://picsum.photos/seed/joystick-pop4/300/200',
    },
  ],
  latest: [
    {
      title: 'Elden Ring',
      rating: '9.5/10',
      genre: 'RPG',
      image: 'https://picsum.photos/seed/joystick-lat1/300/200',
    },
    {
      title: 'Hades II',
      rating: '9.3/10',
      genre: 'Roguelike',
      image: 'https://picsum.photos/seed/joystick-lat2/300/200',
    },
    {
      title: 'Celeste',
      rating: '9.0/10',
      genre: 'Platformer',
      image: 'https://picsum.photos/seed/joystick-lat3/300/200',
    },
    {
      title: 'Hollow Knight',
      rating: '9.2/10',
      genre: 'Metroidvania',
      image: 'https://picsum.photos/seed/joystick-lat4/300/200',
    },
  ],
  editor: [
    {
      title: 'Persona 5',
      rating: '9.4/10',
      genre: 'JRPG',
      image: 'https://picsum.photos/seed/joystick-ed1/300/200',
    },
    {
      title: 'Red Dead Redemption 2',
      rating: '9.6/10',
      genre: 'Action',
      image: 'https://picsum.photos/seed/joystick-ed2/300/200',
    },
    {
      title: 'The Witcher 3',
      rating: '9.5/10',
      genre: 'RPG',
      image: 'https://picsum.photos/seed/joystick-ed3/300/200',
    },
    {
      title: "Baldur's Gate 3",
      rating: '9.7/10',
      genre: 'RPG',
      image: 'https://picsum.photos/seed/joystick-ed4/300/200',
    },
  ],
}

export function MonthlyPicks() {
  const [activeTab, setActiveTab] = useState<Tab>('popular')

  return (
    <section className="py-20 bg-gray-100" aria-label="Monthly Picks">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-white mb-8">This Month&apos;s Pick</h2>

        {/* Tabs */}
        <div className="flex gap-1 mb-8" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'px-5 py-2 text-sm font-semibold transition-colors',
                activeTab === tab.id
                  ? 'bg-primary-400 text-white'
                  : 'bg-white text-ink hover:bg-gray-200',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Game cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="tabpanel">
          {gamesByTab[activeTab].map((game) => (
            <div key={game.title} className="bg-white rounded overflow-hidden shadow">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <a
                  href="#"
                  className="text-ink font-bold text-sm hover:text-primary-400 transition-colors"
                >
                  {game.title}
                </a>
                <div className="flex items-center gap-3 mt-2 text-xs text-smoke">
                  <span>User: {game.rating}</span>
                  <span className="bg-primary-400/10 text-primary-600 px-2 py-0.5 rounded text-xs font-semibold">
                    {game.genre}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
