import { ArrowRight, TrendingUp, Target } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const SERVICES = [
  {
    icon: TrendingUp,
    title: 'Business Growth',
    description: 'Strategic planning and execution to scale your business operations effectively.',
  },
  {
    icon: Target,
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that reach your audience and deliver measurable ROI.',
  },
] as const

export function Services() {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Left: full image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://picsum.photos/seed/orbiter-services/800/600"
          alt="Our services"
          className="h-full w-full object-cover"
        />
      </div>
      {/* Right: dark background with content */}
      <div className="flex w-full items-center bg-service-dark p-10 text-white md:w-1/2 md:p-16">
        <div>
          <h2 className="mb-4 text-3xl font-bold">Grow your business</h2>
          <p className="mb-8 text-gray-400">
            We provide comprehensive solutions designed to accelerate your growth and strengthen
            your market position.
          </p>
          <div className="space-y-8">
            {SERVICES.map((service) => (
              <div key={service.title} className="flex gap-4">
                <service.icon size={32} className="shrink-0 text-brand-secondary" />
                <div>
                  <h3 className="mb-1 text-lg font-bold">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Button className="group mt-8 inline-flex items-center gap-2 rounded-none border-2 border-white bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-service-dark">
            Our services
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
