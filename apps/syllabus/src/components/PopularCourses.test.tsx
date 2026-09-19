import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PopularCourses } from './PopularCourses'

describe('PopularCourses', () => {
  it('renders the section heading', () => {
    render(<PopularCourses />)
    expect(screen.getByRole('heading', { level: 2, name: 'Popular Courses' })).toBeInTheDocument()
  })

  it('renders three course cards with titles', () => {
    render(<PopularCourses />)

    expect(screen.getByText('Digital Marketing')).toBeInTheDocument()
    expect(screen.getByText('SEO Fundamentals')).toBeInTheDocument()
    expect(screen.getByText('WordPress Development')).toBeInTheDocument()
  })

  it('shows $29 price badge on each course', () => {
    render(<PopularCourses />)

    const prices = screen.getAllByText('$29')
    expect(prices).toHaveLength(3)
  })

  it('displays author names', () => {
    render(<PopularCourses />)

    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Mike Williams')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('renders course images with alt text', () => {
    render(<PopularCourses />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
