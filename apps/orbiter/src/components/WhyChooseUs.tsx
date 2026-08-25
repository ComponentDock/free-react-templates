import { ArrowRight, Monitor, Code, Palette, PenTool } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const FEATURES = [
  { icon: Monitor, title: 'Web Design' },
  { icon: Code, title: 'Web Development' },
  { icon: Palette, title: 'Branding & Identity' },
  { icon: PenTool, title: 'Graphic Design' },
] as const

const STATS = [
  { value: '12', label: 'Years of experience' },
  { value: '34', label: 'Team members' },
] as const

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Right aside (appears first on mobile, second on desktop) */}
          <div className="order-2 flex flex-col justify-center bg-gray-50 p-8 lg:order-3 lg:w-1/4">
            <p className="mb-6 text-sm text-body">
              We have over a decade of experience delivering exceptional results for businesses of
              all sizes.
            </p>
            {STATS.map((stat) => (
              <div key={stat.label} className="mb-6">
                <span className="text-4xl font-bold text-brand-primary">{stat.value}</span>
                <p className="text-sm text-footer-text">{stat.label}</p>
              </div>
            ))}
            <Button className="group mt-4 inline-flex items-center gap-2 self-start rounded-none border-2 border-heading bg-heading px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-transparent hover:text-heading">
              Why Orbiter
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Main content */}
          <div className="order-3 lg:order-2 lg:w-3/4">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-secondary">
                Why Orbiter?
              </p>
              <h2 className="mb-4 text-3xl font-bold text-heading">
                You still thinking about why you should choose us?
              </h2>
              <p className="mx-auto max-w-2xl text-body">
                We combine creativity with technical expertise to deliver solutions that stand out
                in the digital landscape.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="group cursor-pointer border border-gray-100 bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <feature.icon
                    size={40}
                    className="mb-4 text-brand-primary transition-colors group-hover:text-brand-secondary"
                  />
                  <h3 className="mb-2 text-base font-bold text-heading">{feature.title}</h3>
                  <ArrowRight
                    size={16}
                    className="text-footer-text transition-colors group-hover:text-brand-primary"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
