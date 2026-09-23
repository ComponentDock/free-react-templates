import { Users, Handshake, Armchair, Lightbulb } from 'lucide-react'

const stats = [
  { icon: Users, value: '30', label: 'Speakers' },
  { icon: Handshake, value: '200', label: 'Sponsors' },
  { icon: Armchair, value: '2,500', label: 'Total Seats' },
  { icon: Lightbulb, value: '40', label: 'Topics' },
]

export function Counter() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left — image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/festpoint-about/600/400"
              alt="Conference venue"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right — stats */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fest-400">
              Fun Facts
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Fun <span className="text-fest-400">Facts</span>
            </h2>
            <p className="mb-8 text-gray-500">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center rounded-lg bg-gray-50 p-6 text-center"
                >
                  <stat.icon className="mb-2 h-8 w-8 text-fest-400" />
                  <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                  <span className="text-sm text-gray-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
