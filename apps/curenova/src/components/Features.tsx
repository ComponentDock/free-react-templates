import { Stethoscope, MessageSquare, Laptop, Building } from 'lucide-react'

const features = [
  {
    icon: Stethoscope,
    title: 'Qualified Doctors',
    desc: 'Board-certified physicians with years of clinical experience.',
  },
  {
    icon: MessageSquare,
    title: 'Free Consultation',
    desc: 'Complimentary initial consultation for new patients.',
  },
  {
    icon: Laptop,
    title: 'Online Enrollment',
    desc: 'Quick and easy online patient registration and scheduling.',
  },
  {
    icon: Building,
    title: 'Modern Facilities',
    desc: 'Cutting-edge medical equipment and comfortable spaces.',
  },
] as const

export function Features() {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        {/* Background image */}
        <div
          className="h-80 rounded-lg bg-cover bg-center"
          style={{ backgroundImage: "url('https://picsum.photos/seed/curenova-features/600/400')" }}
          role="img"
          aria-label="Modern medical facility"
        />

        {/* Content */}
        <div>
          <h2 className="mb-8 text-3xl font-bold text-ink-900">What makes us best?</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <Icon className="mt-1 h-8 w-8 shrink-0 text-blue-400" aria-hidden="true" />
                <div>
                  <h3 className="text-base font-semibold text-ink-900">{title}</h3>
                  <p className="mt-1 text-sm text-mute-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
