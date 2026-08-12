import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CollectionSection } from './CollectionSection'
import { STATS } from '../data'

describe('CollectionSection', () => {
  it('renders the heading, subline, and four colored stat boxes', () => {
    render(<CollectionSection />)

    expect(screen.getByRole('heading', { level: 2, name: 'Experience' })).toBeInTheDocument()
    expect(screen.getByText('How your Donation Reach Over Years')).toBeInTheDocument()

    for (const stat of STATS) {
      expect(screen.getByText(`USD ${stat.value} ${stat.suffix}`)).toBeInTheDocument()
      expect(screen.getByText(stat.year)).toBeInTheDocument()
    }
  })

  it('applies the color classes from the data', () => {
    render(<CollectionSection />)

    expect(screen.getByText('USD 21 M')).toHaveClass('text-stat-orange')
    expect(screen.getByText('USD 15 M')).toHaveClass('text-ink')
    expect(screen.getByText('USD 23 M')).toHaveClass('text-accent')
    expect(screen.getByText('USD 25 M')).toHaveClass('text-stat-purple')
  })
})
