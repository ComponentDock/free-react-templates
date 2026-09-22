import { Zap } from 'lucide-react'

const players = [
  { name: 'Grace Osborne', position: 'Center', number: '01', seed: 'player1' },
  { name: 'Frances Matthews', position: 'Point Guard', number: '83', seed: 'player2' },
  { name: 'Florence Munoz', position: 'Shooting Guard', number: '36', seed: 'player3' },
  { name: 'Victoria Lawrence', position: 'Power Forward', number: '12', seed: 'player4' },
]

export function TeamRoster() {
  return (
    <section className="bg-dark-surface py-16 text-white">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between">
          <div className="flex items-center gap-2">
            <Zap size={20} className="text-primary" />
            <h2 className="font-heading text-2xl font-bold uppercase">First Team</h2>
          </div>
          <a
            href="#join"
            className="inline-block border-2 border-primary bg-transparent px-6 py-2 font-heading text-sm uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Join Our Team
          </a>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {players.map((p) => (
            <div key={p.name} className="group overflow-hidden rounded bg-dark-card">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/hoopside-${p.seed}/400/500`}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <span className="font-heading text-sm font-bold">{p.number}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading text-lg font-semibold">{p.name}</h3>
                <p className="text-sm text-gray-400">{p.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
