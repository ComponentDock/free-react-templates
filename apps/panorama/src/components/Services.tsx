import { Palette, Lightbulb, Monitor, Search, Presentation, Award } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Graphic Design',
    description:
      'Beautiful, purposeful designs that communicate your brand message and captivate your audience.',
  },
  {
    icon: Lightbulb,
    title: 'Marketing Strategy',
    description:
      'Data-driven strategies that connect with your target market and deliver measurable results.',
  },
  {
    icon: Monitor,
    title: 'Web Design',
    description:
      'Responsive, fast, and accessible websites built with modern technologies and best practices.',
  },
  {
    icon: Search,
    title: 'SEO',
    description:
      'Search engine optimization that improves visibility and drives organic traffic to your site.',
  },
  {
    icon: Presentation,
    title: 'Market Leading',
    description:
      'Competitive analysis and positioning that puts your brand ahead of the competition.',
  },
  {
    icon: Award,
    title: 'Pixel Perfect Design',
    description:
      'Meticulous attention to detail ensuring every pixel serves a purpose and looks stunning.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-ocean-400">
            Our Services
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Services</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <Icon className="mx-auto mb-4 h-10 w-10 text-ocean-400" />
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded bg-ocean-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-ocean-500"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
