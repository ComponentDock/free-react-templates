import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Courses } from './Courses'

describe('Courses', () => {
  it('renders the section heading', () => {
    render(<Courses />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Our Popular Courses/i)
  })

  it('renders all 4 course titles', () => {
    render(<Courses />)
    for (const title of [
      'Digital Marketing Mastery',
      'Web Development Bootcamp',
      'Data Science Fundamentals',
      'Graphic Design Essentials',
    ]) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('renders the price on each course', () => {
    render(<Courses />)
    const prices = screen.getAllByText('$29.99')
    expect(prices.length).toBe(4)
  })

  it('renders Enroll buttons', () => {
    render(<Courses />)
    const enrollButtons = screen.getAllByRole('button', { name: /enroll/i })
    expect(enrollButtons.length).toBe(4)
  })
})
