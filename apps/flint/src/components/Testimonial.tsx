import { cn } from '@free-react-templates/ui'

interface TestimonialProps {
  quote: string
  author: string
  location: string
  seed: string
  tone?: 'light' | 'dark'
}

/* Shared testimonial block: light over the hero photo, ink in the testimonial
   row. 40px round avatar, Playfair quote mark, Georgia italic quotation. */
export function Testimonial({ quote, author, location, seed, tone = 'light' }: TestimonialProps) {
  const dark = tone === 'dark'
  return (
    <figure className="flex max-w-[300px] gap-4">
      <span
        aria-hidden="true"
        className={cn('font-display text-5xl leading-[0.8]', dark ? 'text-ink' : 'text-white')}
      >
        &ldquo;
      </span>
      <div>
        <blockquote className={cn('font-serif text-base italic', dark ? 'text-ink' : 'text-white')}>
          {quote}
        </blockquote>
        <figcaption className="mt-4 flex items-center gap-4">
          <img
            src={`https://picsum.photos/seed/${seed}/80/80`}
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className={cn('leading-tight', dark ? 'text-ink' : 'text-white')}>
            <strong className="block font-bold">{author}</strong>
            <span className={dark ? 'text-ink/50' : 'text-white/50'}>{location}</span>
          </div>
        </figcaption>
      </div>
    </figure>
  )
}
