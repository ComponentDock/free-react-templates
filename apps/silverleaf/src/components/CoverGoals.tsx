import { Heart, Users, Stethoscope } from 'lucide-react'

const goals = [
  { icon: Heart, title: 'Expert Nursing Staff' },
  { icon: Users, title: 'Community Living' },
  { icon: Stethoscope, title: 'Medical Support' },
]

export function CoverGoals() {
  return (
    <section className="relative py-24">
      {/* Background image + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/silverleaf-cover/1920/800)' }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-12 font-display text-3xl font-bold text-white md:text-4xl">
          Our Goal is to Make Your Life Better
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {goals.map((goal) => {
            const Icon = goal.icon
            return (
              <div key={goal.title} className="flex flex-col items-center">
                <div className="mb-4 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-white">
                  <Icon size={32} className="text-brand" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  {goal.title}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
