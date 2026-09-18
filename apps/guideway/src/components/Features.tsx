import { Users, BarChart3, Target, Handshake } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Organization',
    description:
      "Expert consulting services to help your business grow and succeed in today's competitive market.",
  },
  {
    icon: BarChart3,
    title: 'Risk Analysis',
    description: 'Comprehensive risk assessment to protect your investments and maximize returns.',
  },
  {
    icon: Target,
    title: 'Marketing Strategy',
    description:
      'Data-driven marketing solutions tailored to your business goals and target audience.',
  },
  {
    icon: Handshake,
    title: 'Capital Market',
    description:
      'Strategic financial guidance to navigate complex capital markets with confidence.',
  },
] as const

export function Features() {
  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image side */}
          <div className="relative overflow-hidden rounded-xl border border-border">
            <img
              src="https://picsum.photos/seed/guideway-about/600/500"
              alt="Consulting team at work"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Content side */}
          <div>
            <h2 className="mb-4 font-heading text-3xl font-bold text-navy lg:text-4xl">
              Our Main Features
            </h2>
            <p className="mb-8 text-mist leading-relaxed">
              On her way she met a copy. The copy warned the Little Blind Text, that where it came
              from it would have been rewritten a thousand times and everything that was left from
              its origin would be the word.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-border p-6 transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10">
                    <f.icon className="h-6 w-6 text-brand" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-navy">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-mist">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
