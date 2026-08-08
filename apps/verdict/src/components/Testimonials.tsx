import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Verdict guided us through a complex acquisition with precision and professionalism. Their strategic counsel was instrumental in securing favorable terms. I would recommend them without hesitation.',
    author: 'Robert Williams',
    role: 'CEO, TechVenture Inc.',
  },
  {
    quote:
      'From the first consultation, the team made me feel heard and supported. They resolved my case quickly and kept me informed at every step.',
    author: 'Jennifer Martinez',
    role: 'Owner, Martinez Properties',
  },
  {
    quote:
      'Exceptional attention to detail and genuine care for their clients. The outcome exceeded every expectation I had.',
    author: 'Michael Chen',
    role: 'Private Client',
  },
  {
    quote:
      'Professional, responsive, and thorough. Their expertise gave our family confidence during a difficult legal process.',
    author: 'Patricia Thompson',
    role: 'Retired Executive',
  },
]

const recognitions = [
  { name: 'Super Lawyers', detail: 'Top 100' },
  { name: 'Best Lawyers', detail: '2024' },
  { name: 'Martindale-Hubbell', detail: 'AV Preeminent' },
  { name: 'Chambers USA', detail: 'Ranked' },
]

export function Testimonials() {
  return (
    <section className="bg-primary-900 py-20 lg:py-28 dark:bg-primary-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-accent-400">
          Client Testimonials
        </p>
        <h2 className="font-display mt-3 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          What Our Clients Say
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-300">
          Our commitment to excellence is reflected in the experiences of those we&apos;ve had the
          privilege to represent.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <Quote className="h-8 w-8 text-accent-400" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-300">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5">
                <p className="text-sm font-bold text-white">{testimonial.author}</p>
                <p className="mt-0.5 text-xs text-gray-400">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Recognized By Leading Legal Publications
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {recognitions.map((recognition) => (
              <div
                key={recognition.name}
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3"
              >
                <p className="text-sm font-bold text-white">{recognition.name}</p>
                <p className="text-xs text-accent-400">{recognition.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
