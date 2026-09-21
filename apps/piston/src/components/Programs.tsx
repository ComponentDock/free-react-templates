import { Dumbbell, Heart, Weight, Sparkles, Zap } from 'lucide-react'

const programs = [
  {
    icon: Dumbbell,
    name: 'Body Building',
    desc: 'Build muscle and strength with targeted resistance training.',
  },
  { icon: Heart, name: 'Aerobic Classes', desc: 'High-energy cardio sessions to boost endurance.' },
  {
    icon: Weight,
    name: 'Weight Lifting',
    desc: 'Progressive overload programs for serious lifters.',
  },
  {
    icon: Sparkles,
    name: 'Yoga Classes',
    desc: 'Flexibility and mindfulness for balanced fitness.',
  },
  {
    icon: Zap,
    name: 'Cardio Training',
    desc: 'Fat-burning interval workouts for maximum results.',
  },
]

export function Programs() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-2">
        {/* Left text */}
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 text-3xl font-bold text-dark">Fitness Programs</h2>
          <p className="mb-6 leading-relaxed text-mist">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove.
          </p>
          <a
            href="#program"
            className="inline-block w-fit rounded border-2 border-brand px-6 py-2 font-semibold text-brand transition hover:bg-brand hover:text-dark"
          >
            View Full Programs
          </a>
        </div>
        {/* Right list */}
        <div className="flex flex-col gap-4">
          {programs.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-4 rounded border border-gray-200 p-4 transition hover:border-brand"
            >
              <p.icon className="shrink-0 text-brand" size={28} />
              <div>
                <h3 className="font-semibold text-dark">{p.name}</h3>
                <p className="text-sm text-mist">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
