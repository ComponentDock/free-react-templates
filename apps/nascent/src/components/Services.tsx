import { Monitor, Lightbulb, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Digital Strategy',
    description:
      'Craft a comprehensive digital roadmap tailored to your business goals. We analyze market trends and user behavior to drive measurable growth.',
    link: "Let's Talk",
  },
  {
    icon: Lightbulb,
    title: 'Innovation Lab',
    description:
      'Transform bold ideas into working prototypes. Our innovation team helps you explore emerging technologies and validate concepts quickly.',
    link: "Let's Talk",
  },
  {
    icon: TrendingUp,
    title: 'Growth Analytics',
    description:
      'Data-driven insights to accelerate your scaling journey. We track key metrics and optimize campaigns for maximum return on investment.',
    link: "Let's Talk",
  },
]

export function Services() {
  return (
    <section id="services" data-testid="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold font-heading text-gray-900">Services we provide</h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            We offer end-to-end solutions for startups looking to make an impact. From strategy to
            execution, our team is here to help you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded bg-gray-50 p-8 transition hover:shadow-md">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-400/10">
                <s.icon size={28} className="text-orange-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold font-heading text-gray-900">{s.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-body">{s.description}</p>
              <a
                href="#contact"
                className="inline-block border-b-2 border-orange-400 pb-0.5 text-sm font-semibold text-orange-400 transition hover:text-orange-600"
              >
                {s.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
