const testimonials = [
  {
    quote: 'Absolutely love the quality. Every piece feels premium and fits perfectly.',
    author: 'Sarah Mitchell',
    role: 'Fashion Blogger',
  },
  {
    quote: 'The best online shopping experience. Fast shipping and beautiful packaging.',
    author: 'Emma Chen',
    role: 'Stylist',
  },
  {
    quote: 'Finally a brand that understands modern elegance. Highly recommend!',
    author: 'Olivia Brooks',
    role: 'Content Creator',
  },
]

export function Testimonials() {
  return (
    <section className="bg-ink py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-12 font-serif text-3xl font-bold">What People Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.author} className="rounded-xl bg-white/5 p-6">
              <p className="mb-4 italic text-gray-300">"{t.quote}"</p>
              <footer>
                <cite className="not-italic font-bold">{t.author}</cite>
                <p className="text-sm text-gray-400">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
