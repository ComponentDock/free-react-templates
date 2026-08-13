import { render, screen, within } from '@testing-library/react'
import { MoreServices } from './MoreServices'
import { describe, expect, it } from 'vitest'

describe('MoreServices', () => {
  it('renders the section title and six service rows', () => {
    render(<MoreServices />)
    const heading = screen.getByRole('heading', { level: 2, name: 'More Services' })
    expect(heading).toHaveClass('text-brand')
    expect(screen.getByText('We Offer The Following Services')).toBeInTheDocument()
    const section = screen.getByRole('region', { name: 'More Services' })
    for (const title of [
      'Air Freight',
      'Ocean Freight',
      'Ground Shipping',
      'Warehousing',
      'Storage',
      'Delivery Van',
    ]) {
      expect(within(section).getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(within(section).getAllByRole('link', { name: 'Learn More' })).toHaveLength(6)
  })
})
