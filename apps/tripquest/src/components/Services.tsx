import { SectionTitle } from './SectionTitle'

const SERVICES = [
  {
    title: 'Rent a Car',
    blurb:
      'Airport pickups, island compact or a family estate — the keys are waiting when you land.',
    seed: 'tripquest-service-1',
  },
  {
    title: 'Cruise Booking',
    blurb:
      'Cabin classes, shore days and drinks packages, compared side by side before you commit.',
    seed: 'tripquest-service-2',
  },
  {
    title: 'To Do List',
    blurb: 'A day-by-day plan for the trip: what to see first, what to skip and where to eat.',
    seed: 'tripquest-service-3',
  },
  {
    title: 'Food Features',
    blurb: 'Local kitchens, market tours and tasting menus booked the way the regulars do it.',
    seed: 'tripquest-service-4',
  },
] as const

/* Four-up service grid: photo thumb that zooms slightly under the pointer,
   charcoal title and grey blurb. */
export function Services() {
  return (
    <section id="services" className="py-[120px]">
      <SectionTitle
        title="Other issues we can help you with"
        subtitle="The practical half of travelling — transport, cabins, itineraries and the food map."
      />
      <div className="mx-auto grid max-w-[1140px] gap-[30px] px-4 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => (
          <article key={service.title} className="group">
            <div className="overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${service.seed}/540/360`}
                alt={service.title}
                className="h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h4 className="mt-[22px] text-[20px] font-semibold text-ink">{service.title}</h4>
            <p className="mt-[12px] text-[15px] leading-[1.8] text-body">{service.blurb}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
