import { ExternalLink } from 'lucide-react'

const trainers = [
  {
    name: 'Jessica Mino',
    role: 'Fitness Instructor',
    image: 'gymbox-trainer-1',
  },
  {
    name: 'Amit Khan',
    role: 'Strength Coach',
    image: 'gymbox-trainer-2',
  },
  {
    name: 'Paulo Rolac',
    role: 'Yoga Specialist',
    image: 'gymbox-trainer-3',
  },
] as const

export function Team() {
  return (
    <section id="team" aria-label="Our trainers" className="bg-mist py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-ink">Expert Trainers</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="group relative overflow-hidden bg-white">
              <img
                src={`https://picsum.photos/seed/${trainer.image}/400/500`}
                alt={`${trainer.name} — ${trainer.role}`}
                className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink/80 via-ink/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex gap-3 pb-8">
                  <a
                    href="#"
                    aria-label={`${trainer.name} on Facebook`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-400 text-white transition-colors hover:bg-primary-500"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${trainer.name} on Twitter`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-400 text-white transition-colors hover:bg-primary-500"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${trainer.name} on LinkedIn`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-400 text-white transition-colors hover:bg-primary-500"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-display text-lg font-semibold text-ink">{trainer.name}</h3>
                <p className="mt-1 text-sm text-smoke">{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
