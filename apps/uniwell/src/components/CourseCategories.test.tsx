import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CourseCategories } from './CourseCategories'

describe('CourseCategories', () => {
  it('renders the section heading', () => {
    render(<CourseCategories />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Course Categories')
  })

  it('renders all six category cards', () => {
    render(<CourseCategories />)
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Mobile Development')).toBeInTheDocument()
    expect(screen.getByText('Data Science')).toBeInTheDocument()
    expect(screen.getByText('Business')).toBeInTheDocument()
    expect(screen.getByText('Design')).toBeInTheDocument()
    expect(screen.getByText('Marketing')).toBeInTheDocument()
  })

  it('renders course counts', () => {
    render(<CourseCategories />)
    expect(screen.getByText('120 Courses')).toBeInTheDocument()
    expect(screen.getByText('85 Courses')).toBeInTheDocument()
    expect(screen.getByText('95 Courses')).toBeInTheDocument()
  })

  it('renders category links', () => {
    render(<CourseCategories />)
    const webDevLink = screen.getByText('Web Development').closest('a')
    expect(webDevLink).toHaveAttribute('href', '#courses')
  })
})
