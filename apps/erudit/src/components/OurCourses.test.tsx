import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OurCourses } from './OurCourses'

describe('OurCourses', () => {
  it('renders section heading', () => {
    render(<OurCourses />)
    expect(screen.getByText('Our Courses')).toBeInTheDocument()
  })

  it('renders 6 course cards', () => {
    render(<OurCourses />)
    const titles = screen.getAllByText(
      /Developing Mobile Apps|Advanced Web|Data Science|UI\/UX Design|Python for Beginners|Digital Marketing/,
    )
    expect(titles).toHaveLength(6)
  })

  it('shows prices', () => {
    render(<OurCourses />)
    expect(screen.getByText('$150')).toBeInTheDocument()
    expect(screen.getByText('$110')).toBeInTheDocument()
  })
})
