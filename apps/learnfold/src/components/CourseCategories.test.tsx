import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CourseCategories } from './CourseCategories'

describe('CourseCategories', () => {
  it('renders heading and 6 category cards', () => {
    render(<CourseCategories />)

    expect(screen.getByText('Our Course Categories')).toBeInTheDocument()

    const categories = [
      'Business Management',
      'Graphic Design',
      'Web Development',
      'Photography',
      'Digital Marketing',
      'Education & Teaching',
    ]

    for (const cat of categories) {
      expect(screen.getByText(cat)).toBeInTheDocument()
    }
  })

  it('shows course counts on each card', () => {
    render(<CourseCategories />)

    expect(screen.getByText('12 Courses')).toBeInTheDocument()
    expect(screen.getByText('8 Courses')).toBeInTheDocument()
    expect(screen.getByText('15 Courses')).toBeInTheDocument()
    expect(screen.getByText('6 Courses')).toBeInTheDocument()
    expect(screen.getByText('10 Courses')).toBeInTheDocument()
    expect(screen.getByText('9 Courses')).toBeInTheDocument()
  })
})
