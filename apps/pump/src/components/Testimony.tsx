import { Star } from 'lucide-react'

interface Quote {
  text: string
  name: string
  role: string
}

const quotes: Quote[] = [
  {
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Gabby Smith',
    role: 'Customer',
  },
  {
    text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'John Carter',
    role: 'Gym Member',
  },
  {
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    name: 'Mia Turner',
    role: 'CrossFit Athlete',
  },
] as const

export function Testimony() {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/pump-testimony/1600/600)' }}
    >
      <div className="absolute inset-0 bg-ink/85" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-brand">Testimony</p>
          <h2 className="font-display text-4xl font-black uppercase text-white">
            Successful Stories
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {quotes.map((quote) => (
            <figure key={quote.name} className="rounded-lg bg-white/10 p-8 backdrop-blur-sm">
              <div className="flex gap-1 text-brand">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-gray-200">
                {quote.text}
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-display text-base font-bold uppercase text-white">
                  {quote.name}
                </p>
                <p className="mt-1 text-sm text-gray-400">{quote.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
