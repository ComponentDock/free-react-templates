import { Diamond, Phone } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const features = [
  {
    icon: Diamond,
    title: 'Expert Services',
    description:
      'Our experienced team provides top-quality political strategy and community outreach.',
  },
  {
    icon: Phone,
    title: 'Great Support',
    description: 'We are always available to listen, help, and support our community members.',
  },
] as const

export function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/civicpulse-about/700/700"
            alt="Political leader addressing supporters"
            className="w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Who We Are
          </span>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Who we are to Serve the nation
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-mist">
            Inspires employees and organizations to support causes they care about. We do this to
            bring more resources to the nonprofits that are changing our world.
          </p>
          <div className="mt-8 space-y-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{feature.title}</h3>
                  <p className="mt-1 text-sm text-mist">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink
              href="#contact"
              className="rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Learn More
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
