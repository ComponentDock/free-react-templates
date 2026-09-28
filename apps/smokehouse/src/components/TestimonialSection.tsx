import { useState } from 'react'

const testimonials = [
  {
    quote:
      "The best dining experience I've ever had. The flavors were incredible and the service was impeccable.",
    author: 'John Doe',
    position: 'Food Critic',
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
  },
  {
    quote: 'An absolute gem. Every dish was a masterpiece. I keep coming back for more.',
    author: 'Jane Smith',
    position: 'Regular Customer',
    avatar: 'https://picsum.photos/seed/avatar2/100/100',
  },
  {
    quote: 'The ambiance, the food, the staff — everything was perfect. Highly recommended!',
    author: 'Mike Johnson',
    position: 'Food Blogger',
    avatar: 'https://picsum.photos/seed/avatar3/100/100',
  },
]

export function TestimonialSection() {
  const [active, setActive] = useState(0)

  const next = () => setActive((a) => (a + 1) % testimonials.length)
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[active]!

  return (
    <section className="bg-bg-light py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-12 text-3xl font-bold text-heading md:text-4xl">Testimonials</h2>

        <div className="relative">
          <span
            className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl text-brand opacity-30"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <blockquote className="mb-8 px-8 pt-8">
            <p className="mb-6 text-lg italic leading-relaxed text-text-muted">{t.quote}</p>
            <footer className="flex items-center justify-center gap-4">
              <img src={t.avatar} alt={t.author} className="h-14 w-14 rounded-full object-cover" />
              <div className="text-left">
                <cite className="not-italic font-semibold text-heading">{t.author}</cite>
                <p className="text-sm text-text-muted">{t.position}</p>
              </div>
            </footer>
          </blockquote>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={prev}
            className="border border-border-gray px-4 py-2 text-sm font-semibold uppercase tracking-widest text-text-muted transition-colors hover:border-heading hover:text-heading"
            aria-label="Previous testimonial"
          >
            &larr;
          </button>
          <button
            onClick={next}
            className="border border-border-gray px-4 py-2 text-sm font-semibold uppercase tracking-widest text-text-muted transition-colors hover:border-heading hover:text-heading"
            aria-label="Next testimonial"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  )
}
