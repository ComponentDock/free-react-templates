import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Reviews } from './Reviews'
import { reviews } from '../data'

describe('Reviews', () => {
  it('renders two review cards with photo badges, names and authors', () => {
    const { container } = render(<Reviews />)

    expect(container.querySelectorAll('img')).toHaveLength(reviews.length * 2)

    for (const review of reviews) {
      expect(screen.getAllByText(review.badge).length).toBeGreaterThan(0)
      expect(screen.getAllByText(review.dateLine).length).toBeGreaterThan(0)
      expect(screen.getByRole('heading', { name: review.name })).toBeInTheDocument()
      expect(screen.getByText(review.author)).toBeInTheDocument()
    }
  })
})
