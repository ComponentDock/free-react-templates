import { render, screen, within } from '@testing-library/react'
import { OfferSection } from './OfferSection'
import { describe, expect, it } from 'vitest'

describe('OfferSection', () => {
  it('renders the section title with underline and sub-line', () => {
    render(<OfferSection />)
    const heading = screen.getByRole('heading', { level: 2, name: 'What We Offer' })
    expect(heading).toHaveClass('text-brand')
    expect(
      screen.getByText('Global freight solutions for every load, every route, every deadline.'),
    ).toBeInTheDocument()
  })

  it('renders three service rows with icons and Learn More links', () => {
    render(<OfferSection />)
    const section = screen.getByRole('region', { name: 'What We Offer' })
    for (const title of ['Air Freight', 'Ocean Freight', 'Ground Shipping']) {
      expect(within(section).getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(within(section).getAllByRole('link', { name: 'Learn More' })).toHaveLength(3)
  })
})
