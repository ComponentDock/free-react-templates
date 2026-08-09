import { useEffect, useState } from 'react'
import { Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Roger Scott',
    role: 'Marketing Manager',
    seed: 'torquely-13',
  },
  {
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Roger Scott',
    role: 'Marketing Manager',
    seed: 'torquely-14',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    name: 'Roger Scott',
    role: 'Marketing Manager',
    seed: 'torquely-15',
  },
] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 7000)
    return () => clearInterval(id)
  }, [])

  const testimonial = testimonials[index]!

  return (
    <section id="testimonials" className="bg-paper py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Testimonies</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl">
            Happy Clients &amp; Feedbacks
          </h2>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
            <Quote className="h-6 w-6" aria-hidden="true" />
          </div>
          <blockquote className="mt-6 text-lg leading-relaxed text-mist dark:text-white/70">
            {testimonial.quote}
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-4">
            <img
              src={`https://picsum.photos/seed/${testimonial.seed}/96/96`}
              alt={testimonial.name}
              className="h-14 w-14 rounded-full object-cover"
              loading="lazy"
            />
            <div className="text-left">
              <p className="font-display font-bold text-ink dark:text-white">{testimonial.name}</p>
              <p className="text-sm text-mist dark:text-white/60">{testimonial.role}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((item, i) => (
            <button
              key={item.seed}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={cn(
                'h-3 w-3 rounded-full transition-colors',
                i === index ? 'bg-accent' : 'bg-ink/20 hover:bg-ink/40',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
