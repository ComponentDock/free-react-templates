import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and all six service cards with Get Quote links', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { name: 'Complete Logistics Solutions' }),
    ).toBeInTheDocument()
    for (const title of [
      'Air Freight',
      'Ocean Freight',
      'Ground Transport',
      'Warehousing',
      'Customs Brokerage',
      'Express Delivery',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Get Quote' })).toHaveLength(6)
  })
})
