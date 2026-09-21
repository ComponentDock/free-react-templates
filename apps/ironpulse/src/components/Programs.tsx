import { Dumbbell, Heart, Zap, Sparkles, Timer } from 'lucide-react'

const programs = [
  {
    icon: Dumbbell,
    name: 'Crossfit',
    desc: 'High-intensity functional movements for total body fitness.',
  },
  { icon: Heart, name: 'Aerobic Classes', desc: 'High-energy cardio sessions to boost endurance.' },
  {
    icon: Zap,
    name: 'Fitness',
    desc: 'Comprehensive training programs for overall wellness.',
  },
  {
    icon: Sparkles,
    name: 'Yoga Classes',
    desc: 'Flexibility and mindfulness for balanced fitness.',
  },
  {
    icon: Timer,
    name: 'Cardio Training',
    desc: 'Fat-burning interval workouts for maximum results.',
  },
]

export function Programs() {
  return (
    <section id="program" className="py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-2">
        {/* Left list */}
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
        {/* Right image */}
        <div className="relative">
          <img
            src="https://picsum.photos/seed/ironpulse-program/600/600"
            alt="Training programs"
            className="w-full rounded object-cover"
          />
        </div>
      </div>
    </section>
  )
}
