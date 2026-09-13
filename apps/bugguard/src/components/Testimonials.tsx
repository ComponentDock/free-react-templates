import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'BugGuard eliminated our ant problem in just one visit. Professional, thorough, and friendly team. Highly recommended!',
    author: 'John Smith',
  },
  {
    quote:
      "We've been using BugGuard for our office for two years now. Zero pest issues since. Their monthly service is excellent.",
    author: 'Sarah Johnson',
  },
  {
    quote:
      'Fast response, fair pricing, and effective treatment. They found the entry points we never knew about.',
    author: 'Mike Davis',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <h2 className="text-3xl font-bold text-ink md:text-4xl">Testimonials</h2>
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i <= 4 ? 'fill-brand text-brand' : 'fill-brand/30 text-brand/30'}`}
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-ink">4.7</span>
            <span className="text-sm text-mist">3000 Rating</span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.author} className="rounded-lg bg-white p-6 shadow-sm">
              <p className="leading-relaxed text-mist">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 text-sm font-bold text-ink">By {t.author}</footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-brand" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  )
}
