import { cn } from '@free-react-templates/ui'

const programs = [
  {
    title: 'Body Building',
    description:
      'Build strength and sculpt your body with our expert-led weight training sessions.',
    image: 'https://picsum.photos/seed/gritbox-prog1/600/400',
  },
  {
    title: 'Body Combat',
    description:
      'High-energy martial arts-inspired workout that burns calories and builds confidence.',
    image: 'https://picsum.photos/seed/gritbox-prog2/600/400',
  },
  {
    title: 'Push Up',
    description:
      'Master the fundamentals of bodyweight training with progressive push-up challenges.',
    image: 'https://picsum.photos/seed/gritbox-prog3/600/400',
  },
  {
    title: 'Weight Lifting',
    description: 'Progressive overload training designed to maximize muscle growth and power.',
    image: 'https://picsum.photos/seed/gritbox-prog4/600/400',
  },
  {
    title: 'Cardio Blast',
    description: 'Fast-paced interval training that boosts endurance and cardiovascular health.',
    image: 'https://picsum.photos/seed/gritbox-prog5/600/400',
  },
  {
    title: 'Core Strength',
    description: 'Targeted core workouts to improve stability, posture, and overall fitness.',
    image: 'https://picsum.photos/seed/gritbox-prog6/600/400',
  },
]

export function PopularProgram() {
  return (
    <section id="program" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="relative inline-block text-3xl font-bold uppercase text-ink md:text-4xl">
            <span className="relative z-10">Popular Program</span>
            <span className="absolute bottom-0 left-1/2 h-1 w-10 -translate-x-1/2 bg-brand" />
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((prog) => (
            <ProgramCard key={prog.title} {...prog} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProgramCardProps {
  title: string
  description: string
  image: string
}

function ProgramCard({ title, description, image }: ProgramCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div
        className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm text-white/80">{description}</p>
        <a
          href="#program"
          className={cn(
            'mt-4 inline-block rounded-full bg-brand px-6 py-2 text-xs font-semibold uppercase text-white transition-colors hover:bg-brand-dark',
          )}
        >
          Learn More
        </a>
      </div>
    </div>
  )
}
