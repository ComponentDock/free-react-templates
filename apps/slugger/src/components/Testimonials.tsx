import { Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { useCarousel } from '../hooks/useCarousel'
import { testimonials } from '../data'

const visible = 1
const intervalMs = 5000

export function Testimonials() {
  const { start, maxIndex, goTo } = useCarousel(testimonials.length, visible, intervalMs)
  const items = testimonials.slice(start, start + visible)

  return (
    <section aria-label="Testimonials" className="bg-dark py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-bold uppercase text-white md:text-5xl">
          Happy <span className="text-brand">Viewers</span>
        </h2>
        {items.map((item) => (
          <figure key={item.name} className="mt-12">
            <Quote className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
            <blockquote className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              {item.quote}
            </blockquote>
            <figcaption className="mt-6">
              <img
                src={`https://picsum.photos/seed/slugger-${item.name.toLowerCase().replace(/\s+/g, '-')}/56/56`}
                alt=""
                className="mx-auto h-14 w-14 rounded-full border-2 border-white/20 object-cover"
              />
              <span className="mt-3 block font-display text-lg font-bold uppercase text-white">
                {item.name}
              </span>
              <span className="mt-1 block text-sm uppercase tracking-widest text-brand">
                {item.role}
              </span>
            </figcaption>
          </figure>
        ))}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === start ? 'true' : undefined}
              onClick={() => goTo(index)}
              className={cn(
                'h-2.5 rounded-full transition-all',
                index === start ? 'w-6 bg-brand' : 'w-2.5 bg-white/30 hover:bg-white/50',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
