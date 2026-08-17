import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { SERVICES } from '../data'

describe('Services', () => {
  it('renders the heading, six cards with icons, copy, and Read more links', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(6)
    cards.forEach((card) => {
      expect(within(card).getByRole('heading', { level: 3 })).toHaveTextContent('On Time Service')
      expect(within(card).getByRole('link', { name: 'Read more' })).toHaveAttribute(
        'href',
        '#contact-section',
      )
    })
    SERVICES.forEach((service) => {
      expect(screen.getAllByText(service.text).length).toBeGreaterThan(0)
    })
  })
})
