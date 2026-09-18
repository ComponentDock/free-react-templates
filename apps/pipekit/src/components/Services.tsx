import { Paintbrush, Code, Megaphone, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: <Paintbrush className="h-8 w-8" aria-hidden="true" />,
    title: 'Brand Identity',
    description:
      'We create distinctive brand identities that capture your essence and resonate with your audience.',
  },
  {
    icon: <Code className="h-8 w-8" aria-hidden="true" />,
    title: 'Web Development',
    description:
      'Modern, performant websites built with cutting-edge technologies and best practices.',
  },
  {
    icon: <Megaphone className="h-8 w-8" aria-hidden="true" />,
    title: 'Digital Marketing',
    description: 'Strategic campaigns that amplify your reach and drive meaningful engagement.',
  },
  {
    icon: <BarChart3 className="h-8 w-8" aria-hidden="true" />,
    title: 'Analytics',
    description:
      'Data-driven insights that help you understand your audience and optimize performance.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold-500">
            Our Services
          </p>
          <h2 className="text-3xl font-bold text-navy-600 sm:text-4xl">What We Do Best</h2>
        </div>

        {/* Split layout: text + image */}
        <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-navy-600">We Build Brands That Last</h3>
            <p className="mt-4 leading-relaxed text-gray-600">
              Our comprehensive suite of services covers everything from initial concept to final
              execution. We believe in holistic approaches that integrate design, technology, and
              strategy to deliver exceptional results.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Whether you need a complete brand overhaul or targeted digital campaigns, our team
              brings expertise and creativity to every project.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/pipekit-services/500/350"
              alt="Our service workspace"
              className="w-full max-w-md rounded-lg object-cover shadow-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* 4-column services grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg bg-white p-8 text-center shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/10 text-gold-500">
                  {feature.icon}
                </div>
              </div>
              <h4 className="mb-3 text-lg font-bold text-navy-600">{feature.title}</h4>
              <p className="text-sm leading-relaxed text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
