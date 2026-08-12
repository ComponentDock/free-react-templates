import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PopularCourses } from './PopularCourses'

describe('PopularCourses', () => {
  it('shows the section title and subtitle', () => {
    render(<PopularCourses />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(
      /Popular Courses\s*Available Right Now/,
    )
    expect(screen.getByText(/Explore the most-loved courses/)).toBeInTheDocument()
  })

  it('renders four course cards with category, price, title, stars and reviews', () => {
    render(<PopularCourses />)

    expect(screen.getAllByRole('article')).toHaveLength(4)
    expect(screen.getByText('Learn Angular JS Course for Legendary Persons')).toBeInTheDocument()
    expect(screen.getAllByText('$150').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('25 Reviews')).toBeInTheDocument()
    expect(screen.getAllByText('programming language').length).toBeGreaterThanOrEqual(1)
    // 5 stars × 4 cards
    const firstCard = screen.getAllByRole('article')[0]!
    expect(firstCard.querySelectorAll('img')).toHaveLength(1)
    expect(document.querySelectorAll('article svg.lucide-star').length).toBeGreaterThanOrEqual(5)
  })
})
