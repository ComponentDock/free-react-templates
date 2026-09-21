import { Zap, Flame, Sun, Heart } from 'lucide-react'

const programs = [
  {
    title: 'Crossfit Level 1',
    description: 'Foundation crossfit training for building strength and endurance.',
    Icon: Zap,
    image: 'https://picsum.photos/seed/sprintly-prog1/400/300',
  },
  {
    title: 'BootCamp',
    description: 'Intense full-body workout combining cardio and strength training.',
    Icon: Flame,
    image: 'https://picsum.photos/seed/sprintly-prog2/400/300',
  },
  {
    title: 'Energy Blast',
    description: 'High-energy cardio session designed to maximize calorie burn.',
    Icon: Sun,
    image: 'https://picsum.photos/seed/sprintly-prog3/400/300',
  },
  {
    title: 'Body Balance',
    description: 'Flexibility and core strength through yoga-inspired movements.',
    Icon: Heart,
    image: 'https://picsum.photos/seed/sprintly-prog4/400/300',
  },
]

export function Programs() {
  return (
    <section id="classes" className="bg-dark-800 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-500">
            Our Programs
          </span>
          <h2 className="mt-2 font-heading text-4xl font-bold uppercase text-white">
            Choose Your Program
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map(({ title, description, Icon, image }) => (
            <div
              key={title}
              className="group overflow-hidden rounded-lg bg-dark-700 transition-transform hover:-translate-y-1"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${image}')` }}
              />
              <div className="p-5">
                <Icon className="mb-2 h-6 w-6 text-brand-500" />
                <h3 className="font-heading text-lg font-semibold uppercase text-white">{title}</h3>
                <p className="mt-2 text-sm text-dark-300">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
