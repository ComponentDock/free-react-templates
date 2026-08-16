import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Courses } from './Courses'
import { courses, sectionHeadings } from '../data'

describe('Courses', () => {
  it('renders the Our Courses heading block', () => {
    render(<Courses />)

    expect(screen.getByText(sectionHeadings.coursesSub)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: sectionHeadings.coursesTitle }),
    ).toBeInTheDocument()
  })

  it('renders nine course cards with rating, meta and price', () => {
    render(<Courses />)

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(courses.length)
    for (const course of courses) {
      expect(screen.getByRole('heading', { level: 3, name: course.title })).toBeInTheDocument()
      expect(screen.getAllByText(course.instructor).length).toBeGreaterThan(0)
      expect(screen.getAllByText(course.lectures).length).toBeGreaterThan(0)
      expect(screen.getAllByText(course.price).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByText('(5.0)')).toHaveLength(courses.length)
  })

  it('shows five teal star icons and an Enroll Now button per card', () => {
    const { container } = render(<Courses />)

    expect(container.querySelectorAll('[data-course-star]')).toHaveLength(courses.length * 5)
    expect(screen.getAllByRole('link', { name: /Enroll Now!/ })).toHaveLength(courses.length)
  })
})
