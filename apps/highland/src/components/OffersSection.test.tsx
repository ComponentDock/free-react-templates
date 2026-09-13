import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OffersSection } from './OffersSection'

describe('OffersSection', () => {
  it('renders the offers section heading', () => {
    render(<OffersSection />)
    expect(screen.getByTestId('offers-section')).toBeInTheDocument()
    expect(screen.getByText('Our Offers')).toBeInTheDocument()
    expect(screen.getByText('Ongoing Offers')).toBeInTheDocument()
  })

  it('renders 3 offer cards', () => {
    render(<OffersSection />)
    const bookButtons = screen.getAllByText('Book Now')
    expect(bookButtons).toHaveLength(3)
  })

  it('renders bullet points in each card', () => {
    render(<OffersSection />)
    expect(screen.getAllByText('Luxurious accommodation')).toHaveLength(3)
    expect(screen.getAllByText('3 Adults & 2 Children size')).toHaveLength(3)
    expect(screen.getAllByText('Sea view side')).toHaveLength(3)
  })
})
