import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Categories } from './Categories'
import { categories } from '../data'

describe('Categories', () => {
  it('renders the section header and four industry cards with icons and links', () => {
    const { container } = render(<Categories />)
    const section = screen.getByRole('region', { name: 'Industry We Offer' })
    expect(
      within(section).getByRole('heading', {
        level: 2,
        name: 'Managed IT services customized for your industry',
      }),
    ).toBeInTheDocument()
    expect(within(section).getByText('Industry We Offer')).toBeInTheDocument()

    const cards = within(section).getAllByRole('article')
    expect(cards).toHaveLength(categories.length)
    cards.forEach((card, idx) => {
      const category = categories[idx]!
      expect(card).toHaveTextContent(category.title)
      expect(card).toHaveTextContent(category.blurb)
      expect(within(card).getByRole('link', { name: /Find Out More/ })).toHaveAttribute(
        'href',
        '#services',
      )
      expect(card.className).toContain('hover:shadow-[0_20px_30px_rgba(35,47,85,0.1)]')
      expect(card.querySelectorAll('svg').length).toBe(2)
    })
    expect(container.querySelectorAll('svg').length).toBeGreaterThanOrEqual(8)
  })
})
