import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Courses } from './Courses'

describe('Courses', () => {
  it('renders the section heading', () => {
    render(<Courses />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /This is Why We have Solid Idea/i,
    )
  })

  it('renders all 14 course category links', () => {
    render(<Courses />)
    const categories = [
      'Development',
      'IT & Software',
      'Photography',
      'Language',
      'Life Science',
      'Business',
      'Social Science',
      'Data Science',
      'Design',
      'Training',
      'Humanities',
      'Marketing',
      'Economics',
      'Personal Dev',
    ]
    for (const cat of categories) {
      expect(screen.getByText(cat)).toBeInTheDocument()
    }
  })

  it('each category link has a correct href', () => {
    render(<Courses />)
    // getByText returns the <span> child, so get the parent <a>
    const devSpan = screen.getByText('Development')
    const devLink = devSpan.closest('a')
    expect(devLink).toHaveAttribute('href', '#course-development')
    const photoSpan = screen.getByText('Photography')
    const photoLink = photoSpan.closest('a')
    expect(photoLink).toHaveAttribute('href', '#course-photography')
  })

  it('renders the View All Courses button', () => {
    render(<Courses />)
    expect(screen.getByRole('button', { name: /view all courses/i })).toBeInTheDocument()
  })
})
