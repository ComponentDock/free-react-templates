import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SpecialOffers } from './SpecialOffers'
import { offers } from '../data'

describe('SpecialOffers', () => {
  it('shows the eyebrow and heading', () => {
    render(<SpecialOffers />)
    expect(screen.getByText('Offers')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Special Offers' })).toBeInTheDocument()
  })

  it('renders every offer cell with image, title, blurb and green price', () => {
    render(<SpecialOffers />)
    for (const cell of offers.cells) {
      expect(screen.getByRole('img', { name: cell.alt })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: cell.title })).toBeInTheDocument()
      expect(screen.getByText(cell.blurb)).toBeInTheDocument()
    }
    // all four prices share the same value
    expect(screen.getAllByText('$9.00')).toHaveLength(offers.cells.length)
  })
})
