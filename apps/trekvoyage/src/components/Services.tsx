import { SectionTitle } from './SectionTitle'

const BLURB =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'

const SERVICES = [
  {
    title: 'Easy & Free Transport',
    blurb: 'Even the all-powerful Pointing has no control about the blind texts.',
  },
  {
    title: 'Delicious Food',
    blurb: 'Even the all-powerful Pointing has no control about the blind texts.',
  },
  {
    title: 'Swimming Pool',
    blurb: 'Even the all-powerful Pointing has no control about the blind texts.',
  },
  {
    title: 'Playground',
    blurb: 'Even the all-powerful Pointing has no control about the blind texts.',
  },
] as const

/* Centered-title block with a tall photo beside a two-by-two grid of
   light-grey service cards. */
export function Services() {
  return (
    <section id="services" className="py-[70px]">
      <div className="mx-auto max-w-[1140px] px-4">
        <SectionTitle title="Our Services" subtitle={BLURB} />

        <div className="grid items-start gap-[30px] lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img
              alt=""
              aria-hidden="true"
              src="https://picsum.photos/seed/trekvoyage-services/600/620"
              className="h-[300px] w-full object-cover lg:h-[620px]"
            />
          </div>

          <div className="grid gap-[30px] sm:grid-cols-2 lg:col-span-8">
            {SERVICES.map((service) => (
              <div key={service.title} className="bg-panel p-[30px]">
                <h3 className="text-[1.2rem] font-bold">{service.title}</h3>
                <p className="mt-[12px] text-[14px] leading-[1.8] text-black/70">{service.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
