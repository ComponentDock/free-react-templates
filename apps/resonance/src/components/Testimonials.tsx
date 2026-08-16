import { Quote } from 'lucide-react'
import { testimonials } from '../data'

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#f8f9fa]">
      <div className="mx-auto max-w-[1250px] px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-accent/20 px-5 py-1.5 text-[10px] font-bold tracking-widest text-accent uppercase">
            {testimonials.pill}
          </span>
          <h2 className="mt-4 mb-5 text-4xl font-bold text-brand">{testimonials.heading}</h2>
          <p className="text-lg leading-relaxed text-body">{testimonials.subline}</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.items.map((item) => (
            <figure
              key={item.name}
              className="rounded-lg border border-black/10 bg-white p-10 transition-colors hover:border-brand"
            >
              <Quote className="mb-4 h-8 w-8 text-accent" aria-hidden="true" />
              <blockquote className="text-lg font-light leading-relaxed text-gray-500">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-5">
                <img
                  src={item.avatar}
                  alt={`${item.name} avatar`}
                  className="h-10 w-10 flex-none rounded-full"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-base font-bold text-ink">{item.name}</h3>
                  <span className="text-sm text-gray-500">{item.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
