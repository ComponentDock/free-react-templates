import { testimonials } from '../data'

/* Reference: section.testimonial-section.bg-light-2 — #FAFAFA band with a
   #E0E0E0 top border, centered 70px heading, then THREE testimonial cards
   (col-md-4): 70px circular author photo, italic 20px black quote
   (blockquote p) and an italic attribution em. */
export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="border-t border-border-soft bg-light-bg py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-[48px] text-ink lg:text-[70px]">{testimonials.heading}</h2>
        <div className="mt-16 grid gap-12 text-center md:grid-cols-3">
          {testimonials.quotes.map((quote) => (
            <figure key={quote.author} className="flex flex-col items-center">
              <img
                src={quote.photo}
                alt={quote.alt}
                loading="lazy"
                className="h-[70px] w-[70px] rounded-full object-cover"
              />
              <blockquote className="mt-6">
                <p className="text-[20px] italic leading-[1.5] text-ink">{quote.text}</p>
              </blockquote>
              <figcaption>
                <em className="mt-4 block">— {quote.author}</em>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
