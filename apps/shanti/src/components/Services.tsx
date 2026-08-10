import { Brain, Flower2, HeartPulse, Sparkles } from 'lucide-react'

const services = [
  {
    title: 'Healthy Lifestyle',
    blurb:
      'Build daily habits that keep your body energized, your mind clear and your spirit light.',
    icon: HeartPulse,
  },
  {
    title: 'Body & Mind Balance',
    blurb: 'Reconnect the two halves of your wellbeing through breath, movement and stillness.',
    icon: Flower2,
  },
  {
    title: 'Meditation Practice',
    blurb: 'Learn to quiet the noise with guided sessions that deepen focus and calm.',
    icon: Brain,
  },
  {
    title: 'Edeology',
    blurb: 'A philosophy of mindful living — eating well, resting deeply and moving joyfully.',
    icon: Sparkles,
  },
] as const

export function Services() {
  return (
    <section id="classes" className="bg-soft-100 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="text-center">
                <span className="mx-auto flex h-25 w-25 items-center justify-center rounded-full bg-mauve-100">
                  <Icon className="h-11 w-11 text-mauve-500" strokeWidth={1.2} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-medium text-black">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body-500">{service.blurb}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
