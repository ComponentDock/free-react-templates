import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PromoBand } from './PromoBand'
import { BAND_ITEMS } from '../data'

describe('PromoBand', () => {
  it('renders the coral promo band with three white-icon cards', () => {
    const { container } = render(<PromoBand />)

    const section = screen.getByRole('region', { name: 'Free lessons and offers' })
    expect(section).toHaveClass('bg-brand-dark')

    for (const item of BAND_ITEMS) {
      expect(screen.getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
      expect(screen.getByText(item.text)).toBeInTheDocument()
    }

    const links = screen.getAllByRole('link', { name: /Read more/ })
    expect(links).toHaveLength(BAND_ITEMS.length)

    const cards = container.querySelectorAll('[data-promo-card]')
    expect(cards).toHaveLength(3)
    expect(cards[0]).toHaveClass('bg-brand')
  })

  it('renders a white icon inside each card', () => {
    const { container } = render(<PromoBand />)

    const icons = container.querySelectorAll('[data-promo-icon]')
    expect(icons).toHaveLength(3)
    icons.forEach((icon) => {
      expect(icon).toHaveClass('text-white')
    })
  })
})
