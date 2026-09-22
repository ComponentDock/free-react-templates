import { Dumbbell, Heart, Users, Zap } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const features = [
  {
    icon: Dumbbell,
    title: 'Modern Equipment',
    description:
      'State-of-the-art machines and free weights to support every type of workout routine.',
  },
  {
    icon: Heart,
    title: 'Healthy Diet Plan',
    description:
      'Personalized nutrition plans crafted by certified dietitians to fuel your fitness journey.',
  },
  {
    icon: Users,
    title: 'Expert Trainers',
    description:
      'Certified and experienced trainers who guide you through every step of your transformation.',
  },
  {
    icon: Zap,
    title: 'Cardio Zone',
    description:
      'Dedicated cardio area with the latest treadmills, ellipticals, and cycling equipment.',
  },
] as const

export function Features() {
  return (
    <section id="about" aria-label="Features" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-ink">Our Features</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-smoke">
          We offer world-class fitness facilities with modern equipment and expert guidance to help
          you achieve your health and fitness goals.
        </p>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={cn(
                  'border border-gray-100 bg-mist p-8 text-center',
                  'transition-shadow hover:shadow-lg',
                )}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-400 text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-smoke">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
