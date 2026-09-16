import { HardHat, Award, Headphones } from 'lucide-react'

const features = [
  {
    icon: HardHat,
    title: 'Expert & Professional',
    description:
      'Our team of seasoned professionals brings decades of combined experience to every project.',
  },
  {
    icon: Award,
    title: 'High Quality Work',
    description:
      'We use premium materials and proven techniques to deliver lasting, top-quality results.',
  },
  {
    icon: Headphones,
    title: '24/7 Help Support',
    description:
      'Round-the-clock support ensures your questions and concerns are always addressed promptly.',
  },
]

export function Services2() {
  return (
    <section className="bg-gray-50 py-16" aria-labelledby="features-heading">
      <div className="mx-auto max-w-7xl px-4">
        <h2 id="features-heading" className="sr-only">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-sm"
              >
                <Icon size={40} className="shrink-0 text-primary-400" strokeWidth={1.5} />
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-ink">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-smoke">{f.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
