import { Heart, Dumbbell, Users } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Aerobics Program',
    description:
      'Boost your cardiovascular health with our dynamic aerobics classes led by certified instructors.',
  },
  {
    icon: Dumbbell,
    title: 'Train Hard',
    description:
      'Access world-class equipment and personalized training plans to reach your fitness goals.',
  },
  {
    icon: Users,
    title: 'Basic Program',
    description:
      'Perfect for beginners — learn proper form and build a solid fitness foundation with us.',
  },
] as const

export function Intro() {
  return (
    <section className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group rounded-2xl bg-gray-50 p-8 text-center transition-colors hover:bg-brand dark:bg-gray-900"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 transition-colors group-hover:bg-white dark:bg-brand/20">
              <feature.icon className="h-8 w-8 text-brand" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-lg font-bold uppercase tracking-wide text-heading dark:text-white">
              {feature.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-body dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
