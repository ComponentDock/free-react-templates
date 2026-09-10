import { Palette, Code2, Smartphone, Globe } from 'lucide-react'

const services = [
  {
    Icon: Palette,
    title: 'Graphics Design',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and the power of globalization.',
  },
  {
    Icon: Code2,
    title: 'Web Development',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and the power of globalization.',
  },
  {
    Icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and the power of globalization.',
  },
  {
    Icon: Globe,
    title: 'SEO Marketing',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and the power of globalization.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-charcoal">
      <div className="mx-auto flex flex-col md:flex-row">
        <div className="flex items-center justify-center px-8 py-20 md:w-1/2 md:items-start md:justify-start md:px-16">
          <div>
            <h2 className="text-3xl font-extralight text-white sm:text-4xl">
              <span className="font-semibold">Services</span>
              <br />
              We Offered
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-gray-400">
              Delivering comprehensive digital solutions tailored to your business needs — from
              design to deployment and beyond.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 bg-white sm:grid-cols-2 md:w-1/2">
          {services.map(({ Icon, title, description }) => (
            <div key={title} className="border border-gray-100 p-10">
              <Icon className="h-8 w-8 bg-gradient-to-b from-brand-500 to-accent-300 bg-clip-text text-transparent" />
              <h3 className="mb-6 mt-6 text-sm font-semibold uppercase tracking-[2px] text-gray-900">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
