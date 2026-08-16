import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Commercial Cleaning',
    text: 'Offices, shops and storefronts kept spotless with scheduled professional visits.',
    img: 'https://picsum.photos/seed/pristine-commercial/450/340',
  },
  {
    title: 'Residential Cleaning',
    text: 'Homes and apartments cared for with the same detailed standards every visit.',
    img: 'https://picsum.photos/seed/pristine-residential/450/340',
  },
  {
    title: 'Carpet & Floor Cleaning',
    text: 'Deep steam care that revives carpets, rugs and hard floors to like-new.',
    img: 'https://picsum.photos/seed/pristine-carpet/450/340',
  },
] as const

/** White services section: blue kicker, 40px heading and three photo cards
 *  (title, blurb, 50px circular arrow button). Card hover darkens the photo
 *  and turns the circle solid blue with a white arrow. */
export function Services() {
  return (
    <section id="services" className="bg-white pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-5 block text-sm font-medium text-brand">Our Services</span>
          <h2 className="text-3xl font-medium leading-tight text-navy lg:text-4xl">
            Take a look at the variety of services we offer
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group text-center">
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={service.img}
                  alt={service.title}
                  className="aspect-[450/340] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/60" />
              </div>
              <div className="px-4 pt-6">
                <h3 className="text-[22px] font-medium text-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{service.text}</p>
                <a
                  href="#contact"
                  aria-label={`Learn more about ${service.title}`}
                  className="mt-5 inline-flex h-[50px] w-[50px] items-center justify-center rounded-full border border-beige text-navy transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white"
                >
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
