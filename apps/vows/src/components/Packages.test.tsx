import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Packages } from './Packages'

describe('Packages', () => {
  it('renders the eyebrow, heading, and sub', () => {
    render(<Packages />)

    expect(screen.getByText('Investment')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Wedding Packages' })).toBeInTheDocument()
  })

  it('renders three packages with prices, guests, and features', () => {
    render(<Packages />)

    for (const [name, price, guests] of [
      ['Intimate', '$3,500', 'Up to 50 guests'],
      ['Classic', '$7,500', 'Up to 150 guests'],
      ['Grand', '$15,000', 'Unlimited guests'],
    ] as const) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
      expect(screen.getByText(price)).toBeInTheDocument()
      expect(screen.getByText(guests)).toBeInTheDocument()
    }

    expect(screen.getByText('Day-of coordination')).toBeInTheDocument()
    expect(screen.getByText('Honeymoon planning')).toBeInTheDocument()
    expect(screen.getByText('Guest concierge services')).toBeInTheDocument()
  })

  it('marks the Classic package as Most Popular with a primary Inquire button', () => {
    render(<Packages />)

    expect(screen.getByText('Most Popular')).toBeInTheDocument()

    const classicCard = screen.getByRole('heading', { level: 3, name: 'Classic' }).closest('div')!
    expect(classicCard).toHaveClass('ring-primary-600')

    const inquireButtons = screen.getAllByRole('link', { name: 'Inquire' })
    expect(inquireButtons).toHaveLength(3)
  })
})
