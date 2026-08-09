import { Quote, Star } from 'lucide-react'

const testimonials = [
  { role: 'Marketing Manager' },
  { role: 'Interface Designer' },
  { role: 'UI Designer' },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">
            Testimonial
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Happy Clients
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.role}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
            >
              <Quote className="mx-auto h-8 w-8 text-brand/40" aria-hidden="true" />
              <div className="mt-4 flex justify-center gap-1" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-mist">
                Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts.
              </p>
              <div
                className="mx-auto mt-5 h-14 w-14 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://picsum.photos/seed/rently-person-${index + 1}/200/200')`,
                }}
                aria-hidden="true"
              />
              <p className="mt-3 font-display text-base font-bold text-ink">Roger Scott</p>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-wide text-brand">
                {testimonial.role}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
