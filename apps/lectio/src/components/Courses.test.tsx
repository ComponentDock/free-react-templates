import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Courses } from './Courses'

describe('Courses', () => {
  it('renders the section heading', () => {
    render(<Courses />)
    expect(screen.getByRole('heading', { name: /Our Courses/i })).toBeInTheDocument()
  })

  it('renders the first 3 course cards by default', () => {
    render(<Courses />)
    expect(screen.getByText(/Italian for Beginners/i)).toBeInTheDocument()
    expect(screen.getByText(/Introduction to Software Engineering/i)).toBeInTheDocument()
    expect(screen.getByText(/Business Administration Fundamentals/i)).toBeInTheDocument()
  })

  it('renders Enroll Now buttons for each visible course', () => {
    render(<Courses />)
    const enrollButtons = screen.getAllByRole('link', { name: /Enroll Now/i })
    expect(enrollButtons).toHaveLength(3)
  })

  it('navigates to next set of courses', async () => {
    const user = userEvent.setup()
    render(<Courses />)
    await user.click(screen.getByRole('button', { name: /Next courses/i }))
    expect(screen.getByText(/Introduction to Software Engineering/i)).toBeInTheDocument()
    expect(screen.getByText(/Graphic Design Masterclass/i)).toBeInTheDocument()
  })

  it('disables Previous button at start', () => {
    render(<Courses />)
    expect(screen.getByRole('button', { name: /Previous courses/i })).toBeDisabled()
  })

  it('disables Next button at end', async () => {
    const user = userEvent.setup()
    render(<Courses />)
    await user.click(screen.getByRole('button', { name: /Next courses/i }))
    await user.click(screen.getByRole('button', { name: /Next courses/i }))
    await user.click(screen.getByRole('button', { name: /Next courses/i }))
    expect(screen.getByRole('button', { name: /Next courses/i })).toBeDisabled()
  })

  it('navigates back with Previous button', async () => {
    const user = userEvent.setup()
    render(<Courses />)
    // Move forward first
    await user.click(screen.getByRole('button', { name: /Next courses/i }))
    expect(screen.getByText(/Introduction to Software/i)).toBeInTheDocument()
    // Now click Previous
    await user.click(screen.getByRole('button', { name: /Previous courses/i }))
    expect(screen.getByText(/Italian for Beginners/i)).toBeInTheDocument()
  })
})
