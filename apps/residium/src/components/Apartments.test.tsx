import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Apartments } from './Apartments'

describe('Apartments', () => {
  it('renders apartment cards with prices and specs', () => {
    render(<Apartments />)
    expect(screen.getByText(/Featured Apartments/)).toBeInTheDocument()

    const prices = screen.getAllByText(/^\$[\d,]+$/)
    expect(prices.length).toBeGreaterThanOrEqual(3)

    const bdItems = screen.getAllByText(/BD$/)
    expect(bdItems.length).toBeGreaterThanOrEqual(3)
    const sfItems = screen.getAllByText(/SF$/)
    expect(sfItems.length).toBeGreaterThanOrEqual(3)
  })

  it('renders navigation buttons', () => {
    render(<Apartments />)
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })
})
