import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedCoursesHorizontal } from './FeaturedCoursesHorizontal'

describe('FeaturedCoursesHorizontal', () => {
  it('renders heading and view all button', () => {
    render(<FeaturedCoursesHorizontal />)

    expect(screen.getByRole('heading', { name: 'Featured Courses' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'view all' })).toHaveAttribute('href', '#courses')
  })

  it('renders two course cards', () => {
    render(<FeaturedCoursesHorizontal />)

    expect(screen.getByRole('heading', { name: 'Digital Marketing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Advanced Web Development' })).toBeInTheDocument()
  })

  it('renders course images with correct alt text', () => {
    render(<FeaturedCoursesHorizontal />)

    expect(screen.getByAltText('Digital Marketing')).toBeInTheDocument()
    expect(screen.getByAltText('Advanced Web Development')).toBeInTheDocument()
  })

  it('renders pricing information', () => {
    render(<FeaturedCoursesHorizontal />)

    expect(screen.getByText('Free')).toBeInTheDocument()
    expect(screen.getByText('$32')).toBeInTheDocument()
    expect(screen.getByText('$59')).toBeInTheDocument()
  })

  it('renders author and date info', () => {
    render(<FeaturedCoursesHorizontal />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('Jan 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('Feb 20, 2026')).toBeInTheDocument()
  })
})
