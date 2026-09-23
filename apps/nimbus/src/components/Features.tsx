import { Monitor, Code, Clock } from 'lucide-react'

const features = [
  {
    icon: Monitor,
    title: 'Stunning Visuals',
    description:
      'A beautifully crafted interface that makes data visualization intuitive and engaging for every user.',
  },
  {
    icon: Code,
    title: 'Clean Code',
    description:
      'Built on a robust, maintainable architecture that developers love to work with and extend.',
  },
  {
    icon: Clock,
    title: 'Punctuality',
    description:
      'Real-time notifications and scheduling tools that keep your team on track and never miss a deadline.',
  },
]

export function Features() {
  return (
    <section id="services" className="pb-24 pt-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-semibold text-ink">Our Most Unique Features</h2>
          <p className="text-smoke">
            A suite of powerful tools designed to accelerate your workflow.
          </p>
        </div>

        <div className="mx-auto mb-12 max-w-3xl">
          <img
            src="https://picsum.photos/seed/nimbus-mockup/800/450"
            alt="Platform mockup"
            className="mx-auto block w-full rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl bg-mist p-10 text-center transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(59,172,240,0.2)]"
            >
              <f.icon className="mx-auto mb-4 h-8 w-8 text-ink" />
              <h3 className="mb-4 text-lg font-semibold text-ink">{f.title}</h3>
              <p className="text-sm leading-relaxed text-smoke">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
