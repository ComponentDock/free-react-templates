import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ChooseCourse } from './ChooseCourse'
import { courses } from '../data'

describe('ChooseCourse', () => {
  it('renders the caption and the blue heading', () => {
    render(<ChooseCourse />)
    expect(screen.getByText('Tutorial Courses')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { name: 'Choose Course' })
    expect(heading).toHaveClass('text-brand')
  })

  it('renders six brand-icon tiles with brand colors and labels', () => {
    const { container } = render(<ChooseCourse />)
    const links = container.querySelectorAll('a')
    expect(links).toHaveLength(courses.length)
    for (const course of courses) {
      expect(screen.getByRole('link', { name: course.name })).toBeInTheDocument()
    }
    const icons = container.querySelectorAll('svg')
    expect(icons).toHaveLength(courses.length)
    const first = container.querySelector('span[style]')
    expect(first).not.toBeNull()
    expect(first!).toHaveStyle({ color: courses[0]!.color })
  })
})
