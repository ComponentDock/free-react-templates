import { useState } from 'react'
import { Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

const testimonials = [
  {
    quote:
      'Airwave is the first podcast I recommend to founders. Every episode leaves me with a concrete idea I can use the same week.',
    name: 'Rachel Kim',
    tag: 'Founder, LaunchPad',
  },
  {
    quote:
      'The production quality is elite, but the conversations are what keep me coming back. Alex asks the questions everyone else skips.',
    name: 'Marcus Thompson',
    tag: 'Product Lead, ScaleUp',
  },
  {
    quote:
      'I have listened to hundreds of business podcasts. Airwave is the only one where I have taken notes on every single episode.',
    name: 'Priya Patel',
    tag: 'CEO, BuildRight',
  },
  {
    quote:
      'My commute is the highlight of my day now. The Tuesday drop is the only appointment I never miss.',
    name: 'Ryan Mitchell',
    tag: 'Daily Listener',
  },
  {
    quote:
      'As an episode guest, I was blown away by the preparation and the warmth of the conversation. The edit was flawless.',
    name: 'Dr. Sarah Lin',
    tag: 'Episode 142 Guest',
  },
  {
    quote:
      'I discovered Airwave in season one and have recommended it to my entire team. It genuinely changed how we think about growth.',
    name: 'Jordan Blake',
    tag: 'Listener since Season 1',
  },
] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const visible = testimonials[index]!

  return (
    <section className="bg-gray-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wider text-primary-500">
            Reviews
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            What Listeners Say
          </h2>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-12 max-w-3xl">
          <figure className="rounded-2xl border border-gray-800 bg-gray-950/60 p-8 text-center sm:p-10">
            <div role="img" aria-label="5 out of 5 stars" className="flex justify-center gap-1">
              {Array.from({ length: 5 }, (_, starIndex) => (
                <Star
                  key={starIndex}
                  className="h-5 w-5 fill-primary-500 text-primary-500"
                  aria-hidden="true"
                />
              ))}
            </div>
            <blockquote className="mt-6 text-lg leading-relaxed text-gray-200">
              &ldquo;{visible.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6">
              <div className="font-bold text-white">{visible.name}</div>
              <div className="mt-1 text-sm text-gray-400">{visible.tag}</div>
            </figcaption>
          </figure>

          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((testimonial, dotIndex) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setIndex(dotIndex)}
                aria-label={`Go to testimonial ${dotIndex + 1}`}
                aria-current={dotIndex === index ? 'true' : undefined}
                className={cn(
                  'h-2.5 rounded-full transition-all',
                  dotIndex === index ? 'w-6 bg-primary-500' : 'w-2.5 bg-gray-700 hover:bg-gray-600',
                )}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
