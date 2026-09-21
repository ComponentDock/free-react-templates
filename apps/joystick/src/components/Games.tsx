import { Button } from '@free-react-templates/ui'

const games = [
  { title: 'Cyber Quest', image: 'https://picsum.photos/seed/joystick-game1/400/300' },
  { title: 'Shadow Realm', image: 'https://picsum.photos/seed/joystick-game2/400/300' },
  { title: 'Star Frontier', image: 'https://picsum.photos/seed/joystick-game3/400/300' },
]

export function Games() {
  return (
    <section className="py-20 bg-white" aria-label="Games">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game) => (
            <div key={game.title} className="text-center">
              <img
                src={game.image}
                alt={game.title}
                className="w-full rounded object-cover mb-4"
                loading="lazy"
              />
              <Button className="bg-primary-400 text-white px-6 py-2 rounded-none hover:bg-dark transition-colors font-semibold">
                View Games
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
