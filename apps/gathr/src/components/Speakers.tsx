import { cn } from '@free-react-templates/ui'

const speakers = [
  { name: 'Patricia Stone', role: 'CEO' },
  { name: 'James Oliver', role: 'CEO' },
  { name: 'Carla Banks', role: 'CEO' },
  { name: 'William Smith', role: 'CEO' },
  { name: 'Jessica Black', role: 'CEO' },
  { name: 'Duncan Stan', role: 'CEO' },
  { name: 'Elena Moore', role: 'CEO' },
  { name: 'Ryan Clark', role: 'CEO' },
]

export function Speakers() {
  return (
    <section id="speakers" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#18181c] md:text-4xl">
          Our Speakers
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((speaker, i) => (
            <div
              key={speaker.name}
              className={cn(
                'group text-center',
                'rounded-lg bg-gray-50 p-6 transition hover:shadow-lg',
              )}
            >
              <div className="mx-auto mb-4 h-[300px] w-[300px] overflow-hidden rounded-lg">
                <img
                  src={`https://picsum.photos/seed/gathr-speaker-${i + 1}/300/300`}
                  alt={speaker.name}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#18181c]">{speaker.name}</h3>
              <p className="text-sm text-[#838383]">{speaker.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
