import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'John Doe',
    title: 'CEO, Company',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'forkful-customer-1',
  },
  {
    name: 'Jane Smith',
    title: 'Designer',
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
    image: 'forkful-customer-2',
  },
  {
    name: 'Mike Johnson',
    title: 'Manager',
    quote:
      'Even the all-powerful Pointing has no control about the blind texts — it is an almost unorthographic life.',
    image: 'forkful-customer-3',
  },
] as const

export function Testimonials() {
  return (
    <section id="blog" className="relative overflow-hidden bg-navy py-28">
      <img
        src="https://picsum.photos/seed/forkful-testimonials/1600/700"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold italic text-white sm:text-4xl">
            Customer <span className="text-brand">says</span>
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article key={t.name} className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
              <div className="mb-4 flex gap-1 text-brand">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
                <span className="sr-only">5 out of 5 stars</span>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-white/80">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${t.image}/80/80`}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-white/60">{t.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
