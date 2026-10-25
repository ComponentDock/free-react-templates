import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Reviews } from './Reviews'
import { reviews } from '../data'

describe('Reviews', () => {
  it('renders three reviews with a labelled five-star rating each', () => {
    render(<Reviews />)

    expect(screen.getAllByRole('img', { name: 'Rated 5 out of 5' })).toHaveLength(3)

    for (const review of reviews) {
      expect(screen.getByText(`“${review.quote}”`)).toBeInTheDocument()
      expect(screen.getByText(review.name)).toBeInTheDocument()
      expect(screen.getByText(review.town)).toBeInTheDocument()
    }
  })

  it('keeps the reviewer initial decorative', () => {
    render(<Reviews />)

    expect(screen.getByText('R')).toHaveAttribute('aria-hidden', 'true')
  })
})
