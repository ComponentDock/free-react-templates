import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { COMPONENT_DOCK, FLAG_LABEL, PLANS, type Plan } from '../content'
import { PlanCard } from './PlanCard'

const spark: Plan = PLANS[0]!
const creator: Plan = PLANS[1]!
const studio: Plan = PLANS[2]!

describe('PlanCard', () => {
  it('renders the plan as an article labelled by its own heading', () => {
    const { container } = render(<PlanCard plan={spark} />)

    const article = container.querySelector('article')
    expect(article).toHaveClass('lm-plan')
    expect(article).not.toHaveClass('lm-plan--pop')
    expect(article).toHaveAttribute('aria-labelledby', spark.id)

    const heading = screen.getByRole('heading', { level: 2, name: spark.name })
    expect(heading).toHaveAttribute('id', spark.id)
    expect(heading).toHaveClass('lm-name')
  })

  it('hides the icon tile and its glyph from assistive tech', () => {
    const { container } = render(<PlanCard plan={spark} />)

    const tile = container.querySelector('.lm-icon')
    expect(tile).toHaveClass('lm-icon--cyan')
    expect(tile).toHaveAttribute('aria-hidden', 'true')
    expect(tile?.querySelector('svg')).not.toBeNull()
  })

  it('only marks the featured plan with the flag, and never inside its heading', () => {
    const { container: plain } = render(<PlanCard plan={spark} />)
    expect(plain.querySelector('.lm-flag')).toBeNull()

    const { container: featured } = render(<PlanCard plan={creator} />)
    const flag = featured.querySelector('.lm-flag')
    expect(flag).toHaveTextContent(FLAG_LABEL)
    expect(flag?.parentElement?.querySelector('h2')?.contains(flag)).toBe(false)
    expect(featured.querySelector('article')).toHaveClass('lm-plan--pop')
  })

  it('gives the free plan no period marker at all', () => {
    const { container: free } = render(<PlanCard plan={spark} />)
    expect(priceRow(free)).toHaveTextContent(spark.price)
    expect(free.querySelector('.lm-per')).toBeNull()

    const { container: paid } = render(<PlanCard plan={studio} />)
    expect(paid.querySelector('.lm-per')).toHaveTextContent(studio.period ?? '')
  })

  it('draws one sparkle per bullet, all decorative', () => {
    const { container } = render(<PlanCard plan={creator} />)

    const items = [...container.querySelectorAll('li')]
    expect(items).toHaveLength(creator.bullets.length)
    for (const [index, item] of items.entries()) {
      const glyph = item.querySelector('svg.lm-spark')
      expect(glyph).not.toBeNull()
      expect(glyph).toHaveAttribute('aria-hidden', 'true')
      expect(glyph?.querySelector('path')).toHaveAttribute('fill', 'currentColor')
      expect(item).toHaveTextContent(creator.bullets[index]!)
    }
  })

  it('paints the featured bullet in the pink tone through the card class', () => {
    const { container } = render(<PlanCard plan={creator} />)
    expect(container.querySelectorAll('article.lm-plan--pop .lm-spark')).toHaveLength(
      creator.bullets.length,
    )
  })

  it('points the CTA at Component Dock and gives the featured one the gradient class', () => {
    const { container: plain } = render(<PlanCard plan={spark} />)
    const plainCta = screen.getByRole('link', { name: spark.cta })
    expect(plainCta).toHaveAttribute('href', COMPONENT_DOCK)
    expect(plainCta).toHaveClass('lm-cta')
    expect(plainCta).not.toHaveClass('lm-cta--glow')
    expect(plain.querySelector('a')).toBe(plainCta)

    render(<PlanCard plan={creator} />)
    const featuredCta = screen.getByRole('link', { name: creator.cta })
    expect(featuredCta).toHaveClass('lm-cta', 'lm-cta--glow')
    expect(featuredCta).toHaveAttribute('target', '_blank')
    expect(featuredCta).toHaveAttribute('rel', 'noreferrer noopener')
  })
})

/** The price row, kept separate so the assertion reads as the row, not a span. */
function priceRow(container: HTMLElement): HTMLElement {
  const row = container.querySelector('.lm-price')
  if (!(row instanceof HTMLElement)) throw new Error('price row missing')
  return row
}
