import { Check } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const whyChooseUs = [
  'Lorem ipsum dolor sit amet, consectetur.',
  'Sed quia consequuntur magni dolores eos.',
  'Nemo enim ipsam voluptatem.',
  'We denounce with righteous indignation.',
] as const

export function ServiceArea() {
  return (
    <section id="services">
      {/* Service top — dark header + why choose us */}
      <div className="bg-ink py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Our Service</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-white/70">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Left — service description */}
            <div>
              <h3 className="text-xl font-bold text-white">
                We offer quick &amp; powerful logistics solution
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                I must explain to you how all this mistaken idea of denouncing pleasure and praising
                pain was born and I will give you.
              </p>
              <ButtonLink
                href="#"
                variant="outline"
                className="mt-6 rounded-[3px] border-2 border-white text-white transition-colors hover:bg-white hover:text-ink"
              >
                Learn More
              </ButtonLink>
            </div>

            {/* Right — why choose us */}
            <div className="relative rounded-lg bg-brand/10 p-6">
              <h3 className="text-xl font-bold text-white">Why Choose Us?</h3>
              <p className="mt-3 text-sm text-white/70">
                I must explain to you how all this mistaken idea of denouncing pleasure and praising
                pain was born and I will give you.
              </p>
              <ul className="mt-4 space-y-2">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#"
                variant="outline"
                className="mt-6 rounded-[3px] border-2 border-white text-white transition-colors hover:bg-white hover:text-ink"
              >
                Learn More
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      {/* Service bottom — 4 service cards */}
      <div className="bg-[#f4f7f9] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: '📦',
                title: 'Ware House',
                description:
                  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
              },
              {
                icon: '🚚',
                title: 'Road Freight',
                description:
                  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
              },
              {
                icon: '🚢',
                title: 'Sea Freight',
                description:
                  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
              },
              {
                icon: '✈️',
                title: 'Air Freight',
                description:
                  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-sm"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand text-2xl text-white">
                  <span aria-hidden="true">{service.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-ink">{service.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{service.description}</p>
                  <a
                    href="#"
                    className="mt-2 inline-block text-sm font-bold text-brand hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
