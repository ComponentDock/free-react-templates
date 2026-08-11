import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Courses } from './Courses'
import { courses, coursesHeading, coursesLabel, coursesParagraph, freeBadgeLabel } from '../data'

describe('Courses', () => {
  it('renders the section title and paragraph', () => {
    render(<Courses />)

    expect(screen.getByRole('region', { name: coursesLabel })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: coursesHeading })).toBeInTheDocument()
    expect(screen.getByText(coursesParagraph)).toBeInTheDocument()
  })

  it('renders five course cards with overlay content', () => {
    const { container } = render(<Courses />)

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(courses.length)
    const badges = screen.getAllByText(freeBadgeLabel)
    expect(badges).toHaveLength(courses.length)

    for (const course of courses) {
      expect(screen.getByRole('heading', { level: 3, name: course.title })).toBeInTheDocument()
      expect(screen.getByText(String(course.students))).toBeInTheDocument()
      expect(screen.getByText(String(course.reviews))).toBeInTheDocument()
      expect(screen.getByText(course.instructor)).toBeInTheDocument()
    }
  })

  it('sizes the sidebar card tall and the grid cards wide', () => {
    const { container } = render(<Courses />)

    const sidebar = courses.find((course) => course.sidebar)!
    const sidebarImage = container.querySelector(`img[src*="${sidebar.seed}"]`) as HTMLImageElement
    expect(sidebarImage.getAttribute('class')).toContain('h-full')

    const gridImage = container.querySelector(`img[src*="${courses[0]!.seed}"]`) as HTMLImageElement
    expect(gridImage.getAttribute('class')).not.toContain('h-full')
  })
})
