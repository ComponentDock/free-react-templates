import { Monitor, Sun, Lightbulb, PenTool } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Inspire',
    description:
      'We craft innovative digital experiences that captivate and motivate your audience.',
  },
  {
    icon: Sun,
    title: 'Create',
    description: 'From concept to reality, we build stunning designs that tell your unique story.',
  },
  {
    icon: Lightbulb,
    title: 'Innovate',
    description: 'Stay ahead with cutting-edge solutions that push the boundaries of creativity.',
  },
  {
    icon: PenTool,
    title: 'Publish',
    description:
      'Launch your vision to the world with our expert publishing and marketing strategies.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-heading">Our Services</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-[40%] bg-brand/10 text-brand">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-heading">{title}</h3>
              <p className="text-sm leading-relaxed text-body-text">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#services"
            className="inline-block rounded-full border-2 border-brand px-6 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            See All Services
          </a>
        </div>
      </div>
    </section>
  )
}
