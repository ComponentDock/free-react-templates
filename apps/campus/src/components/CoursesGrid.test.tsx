import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CoursesGrid } from './CoursesGrid'
import { courseBlurb, courses, coursesLabel } from '../data'

describe('CoursesGrid', () => {
  it('renders every course card with title and blurb', () => {
    render(<CoursesGrid />)

    expect(screen.getByRole('region', { name: coursesLabel })).toBeInTheDocument()
    for (const course of courses) {
      expect(screen.getByRole('heading', { level: 3, name: course.title })).toBeInTheDocument()
    }
    // The blurb is shared across cards, so assert the count of blurbs.
    expect(screen.getAllByText(courseBlurb)).toHaveLength(courses.length)
    expect(screen.getAllByRole('article')).toHaveLength(courses.length)
  })

  it('renders a circular icon badge per course', () => {
    render(<CoursesGrid />)
    expect(document.querySelectorAll('svg')).toHaveLength(courses.length)
    expect(document.querySelectorAll('span.rounded-full')).toHaveLength(courses.length)
  })
})
