import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the eyebrow, divider, and heading with a bold span', () => {
    render(<Services />)

    expect(screen.getByText('Featured Services')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /The Services That We Are Providing/ }),
    ).toBeInTheDocument()
  })

  it('renders four service cards with icons', () => {
    render(<Services />)

    const cards = screen.getAllByRole('heading', { level: 3 })
    expect(cards.map((node) => node.textContent)).toEqual([
      'Branding',
      'Web Design',
      'App Design',
      'Start Up',
    ])

    for (const title of ['Branding', 'Web Design', 'App Design', 'Start Up']) {
      const heading = screen.getByRole('heading', { level: 3, name: title })
      const card = heading.closest('div')!
      expect(card.querySelector('svg')).toBeInTheDocument()
    }
  })
})
