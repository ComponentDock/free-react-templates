import { Anchor, Newspaper, Umbrella, Truck } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const features = [
  {
    icon: Anchor,
    title: 'Our Location',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: Newspaper,
    title: 'Latest News',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: Umbrella,
    title: '24/7 Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
] as const

export function Promo() {
  return (
    <section>
      {/* Feature highlights */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-ink">{feature.title}</h3>
                  <p className="mt-1 text-sm text-mist">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dark parallax CTA */}
      <div
        className="relative bg-cover bg-center bg-fixed py-20"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/packwell-cta/1920/600')`,
        }}
      >
        <div className="absolute inset-0 bg-ink/80" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            We provide international freight &amp; logistics service worldwide
          </h2>
          <ButtonLink
            href="#contact"
            variant="primary"
            className="mt-6 rounded-[3px] border-2 border-brand bg-brand px-8 py-3 text-white transition-colors hover:bg-brand-dark hover:border-brand-dark"
          >
            Get A Quote
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
