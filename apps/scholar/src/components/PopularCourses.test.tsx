import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PopularCourses } from './PopularCourses'

describe('PopularCourses', () => {
  it('renders the heading, subtext, and 5 course cards with prices and ratings', () => {
    render(<PopularCourses />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /The world.*largest selection of courses/,
      }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Choose from over 100,000 online video courses/)).toBeInTheDocument()

    const priceBadges = screen.getAllByText('$118')
    expect(priceBadges).toHaveLength(5)

    const ratings = screen.getAllByText('4.9')
    expect(ratings).toHaveLength(5)

    const cards = screen.getAllByRole('img')
    expect(cards).toHaveLength(5)
  })
})
