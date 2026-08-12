import { Quote } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const testimonials: ReadonlyArray<{
  name: string
  role: string
  quote: string
  image: string
}> = [
  {
    name: 'Racky Henderson',
    role: 'Farmer',
    quote: 'Three implants, zero pain, and the staff remembered my name on every visit.',
    image: 'https://picsum.photos/seed/enamel-patient-1/100/100',
  },
  {
    name: 'Henry Dee',
    role: 'Businessman',
    quote: 'The whitening took twenty minutes over lunch and the difference is unreal.',
    image: 'https://picsum.photos/seed/enamel-patient-2/100/100',
  },
  {
    name: 'Mark Huff',
    role: 'Students',
    quote: 'They explained every step and never pushed a single treatment I did not need.',
    image: 'https://picsum.photos/seed/enamel-patient-3/100/100',
  },
  {
    name: 'Rodel Golez',
    role: 'Striper',
    quote: 'My root canal was genuinely comfortable — I almost fell asleep in the chair.',
    image: 'https://picsum.photos/seed/enamel-patient-4/100/100',
  },
]

/** "Our Patients Says About Us" — four horizontal testimonial cards with
    circular patient photos (the source .testimony-wrap cards). */
export function Testimonials() {
  return (
    <section className="bg-cloud py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="Testimonials"
          title="Our Patients Says About Us"
          intro="Real words from real patients — because a smile is the best review we can earn."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="flex gap-4">
              <img
                src={testimonial.image}
                alt=""
                className="h-16 w-16 shrink-0 rounded-full object-cover"
              />
              <div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary">
                  <Quote className="h-4 w-4" aria-hidden="true" />
                </span>
                <blockquote className="mt-2 text-sm leading-relaxed text-mist">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-2 text-sm font-medium text-ink">
                  {testimonial.name}
                  <span className="ml-2 text-xs font-normal text-mist">{testimonial.role}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
