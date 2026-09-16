import { Lightbulb, Code, Monitor, BarChart3, FileText, DollarSign } from 'lucide-react'

const services = [
  {
    icon: Lightbulb,
    title: 'Unique Design',
    description:
      'Crafting distinctive and innovative designs that set your brand apart from the competition.',
  },
  {
    icon: Code,
    title: 'Clean Layout',
    description: 'Well-structured and organized layouts that provide an excellent user experience.',
  },
  {
    icon: Monitor,
    title: 'Well Responsive',
    description:
      'Fully responsive designs that look great on every device, from desktop to mobile.',
  },
  {
    icon: BarChart3,
    title: 'Pro Development',
    description:
      'Professional development services using the latest technologies and best practices.',
  },
  {
    icon: FileText,
    title: 'Well Documented',
    description: 'Comprehensive documentation to help you understand and maintain your project.',
  },
  {
    icon: DollarSign,
    title: 'Quick Marketing',
    description: 'Fast and effective marketing strategies to boost your business growth.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-400">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-navy-500">{title}</h3>
              <p className="mt-3 text-sm text-gray-500">{description}</p>
              <a
                href="#contact"
                className="mt-4 inline-block text-sm font-semibold text-primary-400 hover:text-primary-500"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
