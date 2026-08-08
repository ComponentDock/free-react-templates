import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the eyebrow, heading, and sub', () => {
    render(<Portfolio />)

    expect(screen.getByText('Our Work')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Portfolio' })).toBeInTheDocument()
  })

  it('renders all six couple cards with names and venue lines', () => {
    render(<Portfolio />)

    const couples = [
      ['Sarah & Michael', 'The Grand Estate, Napa Valley'],
      ['Emma & James', 'Seaside Chapel, Malibu'],
      ['Olivia & William', 'Botanical Gardens, Charleston'],
      ['Grace & Thomas', 'Historic Mansion, Savannah'],
      ['Isabella & Alexander', 'Vineyard Estate, Sonoma'],
      ['Charlotte & Benjamin', 'Lakeside Resort, Lake Como'],
    ] as const

    for (const [names, venue] of couples) {
      expect(screen.getByRole('heading', { level: 3, name: names })).toBeInTheDocument()
      expect(screen.getByText(venue)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: names })).toHaveAttribute(
        'src',
        expect.stringContaining('picsum.photos/seed/vows-portfolio'),
      )
    }
  })
})
