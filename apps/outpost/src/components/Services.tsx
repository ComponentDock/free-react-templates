import { ButtonLink } from '@free-react-templates/ui'
import { SectionTitle } from './SectionTitle'

const SERVICES = [
  { seed: 'outpost-service-1', title: 'Desert Riding Turning So much Flowery' },
  { seed: 'outpost-service-2', title: 'Relaxation in the Local Beach Campfire' },
  { seed: 'outpost-service-3', title: 'Forest Exploration with Energy Package' },
] as const

/* Three service cards with the copy and gradient button first and the
   illustration panel beneath; hovering lifts the card on a purple glow. */
export function Services() {
  return (
    <section id="services" className="py-[120px]">
      <div className="mx-auto max-w-[1140px] px-4">
        <SectionTitle
          eyebrow="We're Offering these Popular Services"
          title="Getting Adventure with Services"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.seed}
              className="border border-hairline p-[30px] transition-all duration-300 hover:border-transparent hover:shadow-[0px_5px_50px_rgba(129,74,255,0.2)]"
            >
              <h5 className="font-display text-[21px] font-bold text-ink">{service.title}</h5>
              <p className="mt-4">
                Guided by locals who know the trail, the tide and the best hour to be there — every
                route is paced so the day stays yours.
              </p>
              <ButtonLink
                href="#packages"
                className="brand-gradient mt-6 rounded-none px-[32px] py-[12px] text-[12px] font-semibold uppercase tracking-[1px] text-white hover:brand-gradient"
              >
                Read More
              </ButtonLink>
              <div className="mt-8 bg-panel p-[40px]">
                <img
                  src={`https://picsum.photos/seed/${service.seed}/520/320`}
                  alt={`Illustration for ${service.title}`}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
