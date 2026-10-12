import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PlanRow } from './PlanRow'

describe('PlanRow', () => {
  it('renders the question headline over three plan cards', () => {
    render(<PlanRow />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Which rack fits the way you build?',
    )
    for (const name of ['Shared Hosting', 'Dedicated Hosting', 'Premium Hosting']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'View Details' })).toHaveLength(3)
  })

  it('gives every card its price line, lime glyph and shadowed hairline border', () => {
    const { container } = render(<PlanRow />)

    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(3)
    for (const card of cards) {
      expect(card).toHaveClass('border-line', 'bg-surface', 'shadow-[0_5px_20px_-5px_rgba(0,0,0,0.2)]')
    }
    expect(screen.getByText('Plans start at $6.99/month')).toHaveClass('text-muted-alt')
    expect(container.querySelectorAll('svg')).toHaveLength(3)
    expect((container.querySelector('svg') as SVGElement).getAttribute('class')).toContain(
      'text-lime',
    )
  })

  it('staggered the cards 100 / 200 / 300 ms and links each action to the contact band', () => {
    const { container } = render(<PlanRow />)

    const delays = Array.from(container.querySelectorAll('[style]')).map(
      (node) => (node as HTMLElement).style.transitionDelay,
    )
    expect(delays).toEqual(['100ms', '200ms', '300ms'])
    expect(screen.getAllByRole('link', { name: 'View Details' })[0]).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
