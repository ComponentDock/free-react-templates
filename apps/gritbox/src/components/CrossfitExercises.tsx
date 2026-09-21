import { Dumbbell, Footprints, Activity, Users, RotateCcw, ArrowDownUp } from 'lucide-react'

const exercises = [
  {
    icon: Dumbbell,
    title: 'Weight Lifting',
    description: 'Build raw strength with compound and isolation lifts under expert supervision.',
  },
  {
    icon: Footprints,
    title: 'Walking Exercise',
    description: 'Low-impact cardio that improves endurance and supports active recovery.',
  },
  {
    icon: Activity,
    title: 'Belly Crunches',
    description: 'Target your core with progressive crunch variations for a stronger midsection.',
  },
  {
    icon: Users,
    title: 'Partner Training',
    description: 'Team up for accountability-driven workouts that push both partners further.',
  },
  {
    icon: RotateCcw,
    title: 'Exercise Rolling',
    description: 'Dynamic movement flows combining mobility work with strength training.',
  },
  {
    icon: ArrowDownUp,
    title: 'Lunge Plank',
    description: 'Compound movement blending lower-body power with core stability.',
  },
]

export function CrossfitExercises() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="relative inline-block text-3xl font-bold uppercase text-ink md:text-4xl">
            <span className="relative z-10">Crossfit Exercises</span>
            <span className="absolute bottom-0 left-1/2 h-1 w-10 -translate-x-1/2 bg-brand" />
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exercises.map((ex) => {
            const Icon = ex.icon
            return (
              <div
                key={ex.title}
                className="rounded-lg border border-gray-200 p-8 text-center transition-shadow hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-ink">{ex.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-mist">{ex.description}</p>
                <a
                  href="#program"
                  className="text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  Learn More
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
