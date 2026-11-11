import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PlanCard } from './PlanCard'
import { COMPONENT_DOCK, FLAG_LABEL, PLANS } from '../data/site'

const solo = PLANS[0]!
const team = PLANS[1]!

describe('PlanCard', () => {
  it('renders the six-part stack in order: name, description, price, CTA, label, list', () => {
    const { container } = render(<PlanCard plan={solo} />)

    const card = container.querySelector('article')!
    const stack = Array.from(card.children).map((node) => node.className)
    expect(stack).toEqual(['', 'rc-price', 'rc-cta', 'rc-label', 'rc-list'])
    expect(card.children[0]?.children[0]).toHaveClass('rc-name')
  })

  it('labels the card by its own heading', () => {
    const { container } = render(<PlanCard plan={solo} />)

    const card = container.querySelector('article')!
    expect(card).toHaveAttribute('aria-labelledby', solo.id)
    expect(screen.getByRole('heading', { level: 2 })).toHaveAttribute('id', solo.id)
  })

  it('prints the price with its per-seat qualifier and the CTA copy', () => {
    const { container } = render(<PlanCard plan={solo} />)

    expect(container.querySelector('.rc-amount')?.textContent).toBe(solo.price)
    expect(container.querySelector('.rc-per')?.textContent).toBe(solo.per)
    expect(screen.getByRole('link')).toHaveTextContent(solo.cta)
    expect(container.querySelector('.rc-label')?.textContent).toBe(solo.label)
  })

  it('paints the ghost CTA and no flag on a side card', () => {
    const { container } = render(<PlanCard plan={solo} />)

    const card = container.querySelector('article')!
    expect(card.className).toBe('rc-plan')
    expect(container.querySelector('.rc-flag')).toBeNull()
    expect(screen.getByRole('link').className).toBe('rc-cta')
  })

  it('carries all three featured signals on the middle card', () => {
    const { container } = render(<PlanCard plan={team} />)

    const card = container.querySelector('article')!
    expect(card.className).toBe('rc-plan rc-plan--pop')
    expect(card.children[0]).toHaveClass('rc-flag')
    expect(screen.getByRole('link').className).toBe('rc-cta rc-cta--solid')
  })

  it('puts a decorative star in the flag so the pill reads as plain text', () => {
    const { container } = render(<PlanCard plan={team} />)

    const flag = container.querySelector('.rc-flag')!
    expect(flag.textContent).toBe(FLAG_LABEL)
    expect(flag.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    expect(flag.querySelector('svg')).toHaveAttribute('fill', 'currentColor')
  })

  it('renders every bullet as a real li with a decorative disc', () => {
    const { container } = render(<PlanCard plan={team} />)

    const items = container.querySelectorAll('li')
    expect(items).toHaveLength(team.bullets.length)
    expect(Array.from(items).map((item) => item.textContent)).toEqual([...team.bullets])
    for (const item of items) {
      expect(item.querySelector('.rc-disc')).toHaveAttribute('aria-hidden', 'true')
    }
  })

  it('sends the CTA to Component Dock in a new tab', () => {
    render(<PlanCard plan={solo} />)

    const cta = screen.getByRole('link')
    expect(cta).toHaveAttribute('href', COMPONENT_DOCK)
    expect(cta).toHaveAttribute('target', '_blank')
    expect(cta).toHaveAttribute('rel', 'noreferrer noopener')
  })
})
