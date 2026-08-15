import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Reviews } from './Reviews'
import { reviews } from '../data'

describe('Reviews', () => {
  it('renders the caption and the blue heading', () => {
    render(<Reviews />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Student Reviews' })).toHaveClass('text-brand')
  })

  it('renders three cards with titles, four filled stars, quotes and author rows', () => {
    const { container } = render(<Reviews />)
    const articles = container.querySelectorAll('article')
    expect(articles).toHaveLength(reviews.length)
    for (const review of reviews) {
      expect(screen.getByRole('heading', { name: review.title })).toBeInTheDocument()
      expect(screen.getByText(review.name)).toBeInTheDocument()
      expect(screen.getByText(review.role)).toBeInTheDocument()
    }
    expect(screen.getAllByLabelText('4 out of 5 stars')).toHaveLength(reviews.length)
    const stars = container.querySelectorAll('svg')
    expect(stars).toHaveLength(reviews.length * 5)
    const avatars = container.querySelectorAll('img.rounded-full')
    expect(avatars).toHaveLength(reviews.length)
    expect(container.querySelectorAll('blockquote')).toHaveLength(reviews.length)
  })
})
