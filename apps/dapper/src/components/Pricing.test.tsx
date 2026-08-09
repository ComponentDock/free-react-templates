import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and three package cards with prices and Order Now buttons', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { name: 'Choose Your Package' })).toBeInTheDocument()
    const expected = [
      ['Basic Hair Cut & Shave', '$79.00'],
      ['Premium Hair Cut & Shave', '$89.00'],
      ['Luxury Hair Cut & Shave', '$99.00'],
    ] as const
    for (const [name, price] of expected) {
      const card = screen.getByRole('heading', { name }).closest('article')
      expect(card).not.toBeNull()
      expect(within(card!).getByText(price)).toBeInTheDocument()
      expect(within(card!).getByRole('button', { name: 'Order Now' })).toBeInTheDocument()
    }
  })

  it('highlights the middle package with the featured treatment', () => {
    render(<Pricing />)

    const featured = screen
      .getByRole('heading', { name: 'Premium Hair Cut & Shave' })
      .closest('article')
    expect(featured).not.toBeNull()
    expect(featured).toHaveClass('bg-[#222222]')

    const basic = screen.getByRole('heading', { name: 'Basic Hair Cut & Shave' }).closest('article')
    expect(basic).not.toBeNull()
    expect(basic).not.toHaveClass('bg-[#222222]')
  })

  it('lists the five included services on each package', () => {
    render(<Pricing />)

    expect(screen.getAllByText('Premium Hair Cut')).toHaveLength(1)
    expect(screen.getAllByText('Luxury Head Wash')).toHaveLength(1)
    expect(screen.getByText('Basic Shave')).toBeInTheDocument()
  })
})
