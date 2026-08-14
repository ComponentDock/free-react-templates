import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PopularCourses } from './PopularCourses'

describe('PopularCourses', () => {
  it('renders the section title and three course cards with meta info', () => {
    render(<PopularCourses />)
    expect(
      screen.getByRole('heading', { name: 'Most Popular Course of This Week' }),
    ).toBeInTheDocument()
    for (const title of ['Graphic Design', 'Web Development', 'Digital Marketing']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getByText('52 Review')).toBeInTheDocument()
    expect(screen.getAllByText('Free')).toHaveLength(3)
    expect(screen.getByText('Design')).toBeInTheDocument()
  })

  it('renders the Find More Courses button linking to courses', () => {
    render(<PopularCourses />)
    const button = screen.getByRole('link', { name: 'Find More Courses' })
    expect(button).toHaveAttribute('href', '#courses')
  })

  it('renders course card images with descriptive alt text', () => {
    render(<PopularCourses />)
    expect(screen.getByRole('img', { name: 'Graphic Design course' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Web Development course' })).toBeInTheDocument()
  })
})
