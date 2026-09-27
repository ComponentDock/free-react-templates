import { Lightbulb, DollarSign, Megaphone } from 'lucide-react'

const services = [
  {
    icon: Lightbulb,
    title: 'Market Research',
    description:
      'Data-driven insights to help you understand your market, competitors, and customers.',
  },
  {
    icon: DollarSign,
    title: 'Financial Services',
    description: 'Strategic financial planning and analysis to grow your business sustainably.',
  },
  {
    icon: Megaphone,
    title: 'Online Marketing',
    description: 'Digital marketing campaigns that reach your audience and drive conversions.',
  },
]

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="flex-1 space-y-8">
            <div className="text-right">
              <span className="text-sm font-medium uppercase tracking-wider text-primary-300">
                Providing
              </span>
              <h2 className="mt-2 text-3xl font-bold text-ink">What We Can Do for You</h2>
            </div>
            <div className="space-y-6">
              {services.map((svc) => (
                <div key={svc.title} className="flex items-start gap-4 text-right">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-ink">{svc.title}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{svc.description}</p>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-300">
                    <svc.icon size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-80 w-full flex-1 overflow-hidden rounded-lg md:h-[500px]">
            <img
              src="https://picsum.photos/seed/airy-about/600/500"
              alt="About us"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
