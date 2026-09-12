import { Flame, Wind, Bike, StretchHorizontal, Swords } from 'lucide-react'

const classes = [
  {
    icon: Flame,
    title: 'Muscle Sculpt',
    desc: 'Build lean muscle with targeted strength training.',
  },
  { icon: Wind, title: 'Fat Burn', desc: 'High-intensity intervals to torch calories fast.' },
  { icon: Bike, title: 'Cycling', desc: 'Cardio sessions on stationary bikes for endurance.' },
  {
    icon: StretchHorizontal,
    title: 'Pilates & Stretching',
    desc: 'Flexibility and core stability work.',
  },
  { icon: Swords, title: 'Boxing', desc: 'Full-body combat conditioning.' },
]

export function GymClasses() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-400">
            Gym Classes
          </p>
          <h2 className="text-3xl font-bold text-white">
            What You Get From <span className="text-brand-400">Vigor</span> Membership
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {classes.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-lg bg-gray-800 p-6 text-center transition-colors hover:bg-gray-700"
            >
              <Icon className="mx-auto mb-4 h-10 w-10 text-brand-400" />
              <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
