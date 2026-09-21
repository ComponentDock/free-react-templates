import { Award, Dumbbell, Droplets, Users } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Award Winning Gym',
    description:
      'Recognized as the top fitness facility in the region, delivering world-class training and results.',
  },
  {
    icon: Dumbbell,
    title: 'Expert Coaches',
    description:
      'Our certified coaches bring years of experience to guide you through every workout and goal.',
  },
  {
    icon: Droplets,
    title: 'Nutrition Plans',
    description:
      'Custom nutrition guidance tailored to your training schedule and personal health objectives.',
  },
  {
    icon: Users,
    title: 'Community Events',
    description:
      'Join regular community workouts, competitions, and social events to stay motivated together.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                  <Icon className="h-8 w-8 text-brand" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-mist">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
