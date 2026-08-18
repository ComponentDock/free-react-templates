import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders the section header and three photo cards with titles and links', () => {
    const { container } = render(<Services />)
    const section = screen.getByRole('region', { name: 'Services' })
    expect(
      within(section).getByRole('heading', {
        level: 2,
        name: 'We design apps & websites that lead in their space',
      }),
    ).toBeInTheDocument()

    const cards = within(section).getAllByRole('article')
    expect(cards).toHaveLength(services.length)
    cards.forEach((card, idx) => {
      const service = services[idx]!
      expect(
        within(card).getByRole('heading', { level: 3, name: service.title }),
      ).toBeInTheDocument()
      expect(card).toHaveTextContent(service.blurb)
      expect(within(card).getByRole('link', { name: 'Learn More' })).toHaveAttribute(
        'href',
        '#contact',
      )
      expect(card.querySelector('img')).toHaveAttribute('src', service.image)
    })
    expect(container.querySelectorAll('img').length).toBe(services.length)
  })
})
