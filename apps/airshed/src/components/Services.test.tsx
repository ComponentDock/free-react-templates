import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SERVICES } from '../content'
import { Services } from './Services'

describe('Services', () => {
  it('renders six priced services in source order', () => {
    render(<Services />)
    const cards = SERVICES.items.map((service) =>
      screen.getByRole('heading', { level: 3, name: service.title }),
    )
    expect(cards).toHaveLength(6)
    expect(cards[0]).toHaveTextContent('Seven-day air assessment')
    expect(cards[5]).toHaveTextContent('Wildfire season preparation')
  })

  it('prints every From price', () => {
    render(<Services />)
    const prices = ['From $345', 'From $420', 'From $890', 'From $1,150', 'From $850', 'From $290']
    prices.forEach((price) => {
      const node = screen.getByText(price)
      expect(node.className).toContain('text-primary-700')
    })
  })

  it('joins the cards with 1 px gutters rather than borders, and anchors the wildfire card', () => {
    const { container } = render(<Services />)
    expect(container.querySelector('.gap-px')).not.toBeNull()
    expect(container.querySelector('.gap-px')?.children).toHaveLength(6)
    expect(document.getElementById('service-wildfire')?.textContent).toContain(
      'Wildfire season preparation',
    )
  })

  it('carries the sample-data note', () => {
    render(<Services />)
    expect(screen.getByText(SERVICES.note)).toBeInTheDocument()
  })
})
