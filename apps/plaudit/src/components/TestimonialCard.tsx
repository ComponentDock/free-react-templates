import type { CSSProperties } from 'react'
import { cn } from '@free-react-templates/ui'
import type { Testimonial } from '../content'
import { BrandGlyph } from './BrandGlyph'
import { StarRating } from './StarRating'

interface TestimonialCardProps {
  testimonial: Testimonial
}

/**
 * One testimonial: brand + rating, quote, byline — on a 24 px-radius plate.
 * `dark` and `big` are paint jobs, not geometry: same width, same padding,
 * same height as the neighbours, no lift and no shadow.
 */
export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { skin, dark, big } = testimonial
  const style = {
    '--tint': skin.tint,
    '--accent': skin.accent,
    '--ink': skin.ink,
    '--muted': skin.muted,
  } as CSSProperties

  return (
    <figure className={cn('testimonial', dark && 'testimonial-dark')} style={style}>
      <div className="testimonial-top">
        <span className="brand">
          <BrandGlyph mark={testimonial.mark} />
          {testimonial.brand}
        </span>
        <StarRating rating={testimonial.rating} />
      </div>
      <blockquote className={cn('quote', big && 'quote-big')}>
        <p>{testimonial.quote}</p>
      </blockquote>
      <figcaption className="byline">
        <span className="avatar" aria-hidden="true">
          {testimonial.initials}
        </span>
        <span className="who">
          <span className="who-name">{testimonial.name}</span>
          <span className="who-role">{testimonial.role}</span>
        </span>
      </figcaption>
    </figure>
  )
}
