import { User } from 'lucide-react'

const classes = [
  { name: 'Yoga', instructor: 'Ryan Knight', seed: 'gymcore-yoga' },
  { name: 'Running', instructor: 'Randy Rivera', seed: 'gymcore-running' },
  { name: 'Personal Training', instructor: 'Cole Robertson', seed: 'gymcore-pt' },
  { name: 'Karate', instructor: 'Kevin McCormick', seed: 'gymcore-karate' },
  { name: 'Dance', instructor: 'Russell Lane', seed: 'gymcore-dance' },
  { name: 'Boxing', instructor: 'Mike Torres', seed: 'gymcore-boxing' },
]

export function Classes() {
  return (
    <section id="classes" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-semibold uppercase text-ink md:text-4xl">
          Unlimited Classes
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls) => (
            <div
              key={cls.name}
              className="group relative h-64 overflow-hidden rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(https://picsum.photos/seed/${cls.seed}/400/300)`,
              }}
            >
              <div className="absolute bottom-0 left-0 p-5">
                <h4 className="mb-1 text-xl font-semibold text-white">{cls.name}</h4>
                <span className="flex items-center gap-1 text-sm text-gray-200">
                  <User className="h-4 w-4" />
                  {cls.instructor}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
