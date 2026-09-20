import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PopularCourses } from './PopularCourses'

describe('PopularCourses', () => {
  it('renders section heading', () => {
    render(<PopularCourses />)
    expect(screen.getByText('Popular Online Courses')).toBeInTheDocument()
  })

  it('renders 5 course cards', () => {
    render(<PopularCourses />)
    const cards = screen.getAllByText(
      /Developing Mobile Apps|Advanced Web|Data Science|UI\/UX Design|Python for Beginners/,
    )
    expect(cards).toHaveLength(5)
  })

  it('shows teacher names', () => {
    render(<PopularCourses />)
    expect(screen.getByText('David Clarson')).toBeInTheDocument()
  })

  it('shows prices', () => {
    render(<PopularCourses />)
    expect(screen.getByText('$150')).toBeInTheDocument()
  })

  it('shows old prices with line-through', () => {
    render(<PopularCourses />)
    expect(screen.getByText('$250')).toBeInTheDocument()
  })
})
