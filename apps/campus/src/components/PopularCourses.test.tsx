import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PopularCourses } from './PopularCourses'
import {
  popularCourses,
  popularEyebrow,
  popularHeading,
  popularLabel,
  seeMoreLabel,
  starLabel,
} from '../data'

describe('PopularCourses', () => {
  it('renders the eyebrow, heading and all four course cards', () => {
    render(<PopularCourses />)

    expect(screen.getByRole('region', { name: popularLabel })).toBeInTheDocument()
    expect(screen.getByText(popularEyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: popularHeading })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(popularCourses.length)
  })

  it('shows title, meta, blurb and See More link per card', () => {
    render(<PopularCourses />)

    for (const course of popularCourses) {
      // "Business for beginners" appears twice — assert at least one heading.
      expect(
        screen.getAllByRole('heading', { level: 3, name: course.title }).length,
      ).toBeGreaterThan(0)
      expect(screen.getAllByText(course.meta)).toHaveLength(popularCourses.length)
      expect(screen.getAllByText(course.blurb)).toHaveLength(popularCourses.length)
    }
    expect(screen.getAllByRole('link', { name: seeMoreLabel })).toHaveLength(popularCourses.length)
  })

  it('renders a five-star rating with the right filled count per card', () => {
    render(<PopularCourses />)

    for (const course of popularCourses) {
      const ratings = screen.getAllByRole('img', { name: starLabel(course.rating) })
      for (const rating of ratings) {
        expect(rating.querySelectorAll('svg')).toHaveLength(5)
      }
    }
    expect(screen.getAllByRole('img', { name: starLabel(5) })).toHaveLength(2)
    expect(screen.getAllByRole('img', { name: starLabel(4) })).toHaveLength(2)
  })
})
